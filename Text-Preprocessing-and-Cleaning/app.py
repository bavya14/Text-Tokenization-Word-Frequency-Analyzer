"""
Text Preprocessing and Cleaning Application
Subject: Text and Speech Analysis
Built with Python and Streamlit.

This application allows a user to enter or paste raw text and apply a series
of standard NLP preprocessing steps (lowercasing, removing URLs, emails,
punctuation, numbers, special characters, extra spaces, and stopwords).

Author: <Your Name>
"""

import re
import string

import nltk
import streamlit as st

# ---------------------------------------------------------------------------
# NLTK setup
# ---------------------------------------------------------------------------
# The stopwords corpus is downloaded once (silently) on first run. We wrap it
# in a try/except so the app still launches if the machine has no internet.
try:
    nltk.data.find("corpora/stopwords")
except LookupError:
    try:
        nltk.download("stopwords", quiet=True)
    except Exception:
        pass

from nltk.corpus import stopwords as nltk_stopwords  # noqa: E402


# ---------------------------------------------------------------------------
# Preprocessing functions
# ---------------------------------------------------------------------------
def to_lowercase(text: str) -> str:
    """Convert every character in *text* to lowercase."""
    return text.lower()


def remove_urls(text: str) -> str:
    """Remove http(s), ftp, and www. URLs from *text*."""
    url_pattern = re.compile(
        r"https?://\S+|ftp://\S+|www\.\S+",
        flags=re.IGNORECASE,
    )
    return url_pattern.sub("", text)


def remove_emails(text: str) -> str:
    """Remove e-mail addresses from *text*."""
    email_pattern = re.compile(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}")
    return email_pattern.sub("", text)


def remove_punctuation(text: str) -> str:
    """Remove punctuation characters from *text*."""
    translator = str.maketrans("", "", string.punctuation)
    return text.translate(translator)


def remove_numbers(text: str) -> str:
    """Remove digit characters (0-9) from *text*."""
    return re.sub(r"\d+", "", text)


def remove_special_characters(text: str) -> str:
    """
    Remove characters that are not alphanumeric or basic whitespace.

    Everything outside a-z, A-Z, 0-9 and whitespace is stripped, which removes
    symbols such as ©, ™, ★, emojis, etc.
    """
    return re.sub(r"[^a-zA-Z0-9\s]", "", text)


def remove_extra_spaces(text: str) -> str:
    """Collapse runs of whitespace into a single space and trim the ends."""
    return re.sub(r"\s+", " ", text).strip()


def remove_stopwords(text: str) -> str:
    """Remove common English stop-words from *text*."""
    try:
        stop_words = set(nltk_stopwords.words("english"))
    except Exception:
        # Fallback minimal list if the corpus could not be downloaded.
        stop_words = {
            "i", "me", "my", "myself", "we", "our", "ours", "ourselves",
            "you", "your", "yours", "yourself", "yourselves", "he", "him",
            "his", "himself", "she", "her", "hers", "herself", "it", "its",
            "itself", "they", "them", "their", "theirs", "themselves", "what",
            "which", "who", "whom", "this", "that", "these", "those", "am",
            "is", "are", "was", "were", "be", "been", "being", "have", "has",
            "had", "having", "do", "does", "did", "doing", "a", "an", "the",
            "and", "but", "if", "or", "because", "as", "until", "while",
            "of", "at", "by", "for", "with", "about", "against", "between",
            "into", "through", "during", "before", "after", "above", "below",
            "to", "from", "up", "down", "in", "out", "on", "off", "over",
            "under", "again", "further", "then", "once", "here", "there",
            "when", "where", "why", "how", "all", "any", "both", "each",
            "few", "more", "most", "other", "some", "such", "no", "nor",
            "not", "only", "own", "same", "so", "than", "too", "very", "s",
            "t", "can", "will", "just", "don", "should", "now",
        }
    words = text.split()
    filtered = [w for w in words if w.lower() not in stop_words]
    return " ".join(filtered)


def preprocess_text(
    text: str,
    lowercase: bool = True,
    urls: bool = True,
    emails: bool = True,
    punctuation: bool = True,
    numbers: bool = True,
    special: bool = True,
    spaces: bool = True,
    stopwords_flag: bool = True,
) -> str:
    """
    Run every selected preprocessing step in pipeline order and return the
    cleaned text.  The order matches the documented pipeline.

    Parameters
    ----------
    text : str
        Raw input text.
    lowercase, urls, emails, punctuation, numbers, special, spaces,
    stopwords_flag : bool
        Flags that enable / disable each step.

    Returns
    -------
    str
        Cleaned text.
    """
    cleaned = text

    if lowercase:
        cleaned = to_lowercase(cleaned)
    if urls:
        cleaned = remove_urls(cleaned)
    if emails:
        cleaned = remove_emails(cleaned)
    if punctuation:
        cleaned = remove_punctuation(cleaned)
    if numbers:
        cleaned = remove_numbers(cleaned)
    if special:
        cleaned = remove_special_characters(cleaned)
    if spaces:
        cleaned = remove_extra_spaces(cleaned)
    if stopwords_flag:
        cleaned = remove_stopwords(cleaned)
        # a second pass keeps spacing tidy after word removal
        cleaned = remove_extra_spaces(cleaned)

    return cleaned


def get_statistics(original: str, cleaned: str) -> dict:
    """
    Compute comparison statistics between the original and cleaned text.

    Returns a dict with the following keys:
        original_chars, cleaned_chars, original_words, cleaned_words,
        sentences, chars_removed
    """
    original_chars = len(original)
    cleaned_chars = len(cleaned)
    original_words = len(original.split())
    cleaned_words = len(cleaned.split())
    # Sentence count is estimated from the ORIGINAL text so the user can see
    # how many sentences were in their input before cleaning.
    sentences = len(re.findall(r"[.!?]+", original))
    if sentences == 0 and original.strip():
        sentences = 1
    chars_removed = original_chars - cleaned_chars
    return {
        "original_chars": original_chars,
        "cleaned_chars": cleaned_chars,
        "original_words": original_words,
        "cleaned_words": cleaned_words,
        "sentences": sentences,
        "chars_removed": chars_removed,
    }


# ---------------------------------------------------------------------------
# Sample text used by the "Load Sample Text" button
# ---------------------------------------------------------------------------
SAMPLE_TEXT = (
    "Natural Language Processing (NLP) is a fascinating field of Artificial "
    "Intelligence! It helps computers understand, interpret, and generate "
    "human language. Visit https://www.example.com or email me at "
    "test@example.com for more details. The year 2024 saw amazing advances.  "
    "Some special symbols are: @, #, $, %, & and *.\n\n"
    "The   quick    brown fox   jumps over the lazy dog. Is this working? "
    "Yes, it is working perfectly!!!"
)


# ---------------------------------------------------------------------------
# Streamlit UI
# ---------------------------------------------------------------------------
def main() -> None:
    st.set_page_config(
        page_title="Text Preprocessing & Cleaning",
        page_icon="🧹",
        layout="wide",
    )

    # ---- Title & description ----------------------------------------------
    st.title("🧹 Text Preprocessing and Cleaning Application")
    st.markdown(
        """
        A simple yet powerful tool to clean and preprocess raw text for
        **Natural Language Processing (NLP)** tasks. Enter your text, choose
        the cleaning operations from the sidebar, and click **Preprocess Text**.
        """
    )
    st.divider()

    # ---- Sidebar ----------------------------------------------------------
    st.sidebar.title("⚙️ Preprocessing Options")
    st.sidebar.markdown("Select the operations to apply:")

    # "Select All" / "Clear All" persist their intent in session state so the
    # checkbox defaults read from it on the next rerun.
    if "select_all" not in st.session_state:
        st.session_state["select_all"] = True

    default_val = st.session_state["select_all"]

    st.sidebar.divider()
    col_sa1, col_sa2 = st.sidebar.columns(2)
    with col_sa1:
        if st.button("✅ Select All", use_container_width=True):
            st.session_state["select_all"] = True
            st.rerun()
    with col_sa2:
        if st.button("🗑️ Clear All", use_container_width=True):
            st.session_state["select_all"] = False
            st.rerun()
    st.sidebar.divider()

    lowercase = st.sidebar.checkbox("Convert to lowercase", value=default_val)
    urls = st.sidebar.checkbox("Remove URLs", value=default_val)
    emails = st.sidebar.checkbox("Remove email addresses", value=default_val)
    punctuation = st.sidebar.checkbox("Remove punctuation", value=default_val)
    numbers = st.sidebar.checkbox("Remove numbers", value=default_val)
    special = st.sidebar.checkbox("Remove special characters", value=default_val)
    spaces = st.sidebar.checkbox("Remove extra spaces", value=default_val)
    stopwords_flag = st.sidebar.checkbox("Remove English stopwords", value=default_val)

    # ---- Buttons ----------------------------------------------------------
    col_btn1, col_btn2, col_btn3 = st.columns([1, 1, 1])
    with col_btn1:
        preprocess_clicked = st.button("🚀 Preprocess Text", type="primary")
    with col_btn2:
        clear_clicked = st.button("🧹 Clear")
    with col_btn3:
        sample_clicked = st.button("📄 Load Sample Text")

    # ---- Text input -------------------------------------------------------
    st.subheader("📝 Input Text")
    user_text = st.text_area(
        "Enter or paste your text below:",
        height=200,
        key="input_text",
        placeholder="Type or paste text here...",
    )

    # ---- How it works -----------------------------------------------------
    with st.expander("📖 How It Works"):
        st.markdown(
            """
            1. **Enter text** in the text area above (or load the sample).
            2. **Select operations** from the sidebar on the left.
            3. Click **Preprocess Text** to clean the text.
            4. View the **cleaned text**, **statistics**, and **download** the
               result as a `.txt` file.

            ### Preprocessing Techniques Explained

            | Technique | Description |
            |---|---|
            | **Lowercase** | Converts all characters to lowercase so that "The" and "the" are treated as the same word. |
            | **Remove URLs** | Strips web links such as `https://example.com` or `www.example.com`. |
            | **Remove Emails** | Removes e-mail addresses like `user@domain.com`. |
            | **Remove Punctuation** | Removes characters such as `. , ! ? : ; " '` using Python's `string.punctuation`. |
            | **Remove Numbers** | Removes all digit characters (0-9). |
            | **Remove Special Characters** | Removes non-alphanumeric symbols (©, ★, emojis, etc.). |
            | **Remove Extra Spaces** | Collapses multiple spaces / tabs / newlines into a single space and trims the ends. |
            | **Remove Stopwords** | Removes common English words (the, is, in, at, …) that add little meaning, using NLTK's stopword list. |
            """
        )

    # ---- Pipeline visual --------------------------------------------------
    st.subheader("🔗 Preprocessing Pipeline")
    pipeline_steps = [
        "Raw Text",
        "Lowercase",
        "Remove URLs",
        "Remove Emails",
        "Remove Punctuation",
        "Remove Numbers",
        "Remove Special Characters",
        "Remove Extra Spaces",
        "Remove Stopwords",
        "Clean Text",
    ]
    # Build a responsive horizontal flow (wraps on small screens) using CSS flex.
    step_html = ""
    for i, step in enumerate(pipeline_steps):
        bg = "#1f77b4" if i in (0, len(pipeline_steps) - 1) else "#2ca02c"
        step_html += (
            f"<div style='background:{bg};color:white;padding:8px 14px;"
            f"border-radius:8px;font-size:0.72rem;font-weight:bold;"
            f"white-space:nowrap;margin:4px 0;'>{step}</div>"
        )
        if i < len(pipeline_steps) - 1:
            step_html += (
                "<div style='color:#555;font-size:1rem;padding:0 2px;'>→</div>"
            )
    st.markdown(
        f"<div style='display:flex;flex-wrap:wrap;align-items:center;"
        f"gap:2px;'>{step_html}</div>",
        unsafe_allow_html=True,
    )

    st.divider()

    # ---- Handle button clicks --------------------------------------------
    if sample_clicked:
        st.session_state["input_text"] = SAMPLE_TEXT
        st.rerun()

    if clear_clicked:
        st.session_state["input_text"] = ""
        st.rerun()

    if preprocess_clicked:
        if not user_text or not user_text.strip():
            st.error("⚠️ Please enter some text before preprocessing.")
        else:
            try:
                cleaned = preprocess_text(
                    user_text,
                    lowercase=lowercase,
                    urls=urls,
                    emails=emails,
                    punctuation=punctuation,
                    numbers=numbers,
                    special=special,
                    spaces=spaces,
                    stopwords_flag=stopwords_flag,
                )
                stats = get_statistics(user_text, cleaned)

                # -- Original text ---
                st.subheader("📄 Original Text")
                st.text_area(
                    "Original:",
                    value=user_text,
                    height=150,
                    key="original_display",
                )

                # -- Cleaned text ---
                st.subheader("✅ Cleaned Text")
                st.text_area(
                    "Cleaned:",
                    value=cleaned,
                    height=150,
                    key="cleaned_display",
                )

                # -- Download ---
                st.download_button(
                    label="⬇️ Download Cleaned Text (.txt)",
                    data=cleaned,
                    file_name="cleaned_text.txt",
                    mime="text/plain",
                )

                # -- Statistics ---
                st.subheader("📊 Text Statistics")
                m1, m2, m3 = st.columns(3)
                m1.metric("Original Characters", stats["original_chars"])
                m2.metric("Cleaned Characters", stats["cleaned_chars"])
                m3.metric("Characters Removed", stats["chars_removed"])

                m4, m5, m6 = st.columns(3)
                m4.metric("Original Words", stats["original_words"])
                m5.metric("Cleaned Words", stats["cleaned_words"])
                m6.metric("Sentences", stats["sentences"])

                if not cleaned.strip():
                    st.warning(
                        "The cleaned text is empty — try enabling fewer "
                        "options or different input text."
                    )
                else:
                    st.success("Text preprocessed successfully! ✅")

            except Exception as exc:
                st.error(f"An error occurred during preprocessing: {exc}")


if __name__ == "__main__":
    main()
