# 🧹 Text Preprocessing and Cleaning Application

A **Python + Streamlit** web application that cleans and preprocesses raw text for **Natural Language Processing (NLP)** tasks. Built as an individual college project for the subject **Text and Speech Analysis**.

---

## 📋 Project Overview

Text preprocessing is the first and most important step in any NLP pipeline. Raw text collected from websites, emails, or user input often contains URLs, email addresses, punctuation, numbers, special characters, extra whitespace, and common stop-words that do not contribute meaningful information.

This application provides a clean, interactive interface where a user can paste any text, choose which cleaning operations to apply, and instantly see the cleaned output along with detailed statistics.

---

## 🎯 Aim

To build a beginner-friendly, fully functional web application that performs standard text preprocessing operations on raw input text and displays useful statistics comparing the original and cleaned text.

---

## ❓ Problem Statement

Raw text gathered from websites, social media, emails, or user input is noisy and unstructured. It contains URLs, email addresses, punctuation marks, numbers, special symbols, irregular spacing, and high-frequency stop-words that add little semantic value. Feeding such raw text directly into NLP models — for tasks like sentiment analysis, text classification, or machine translation — degrades accuracy and increases computational cost because the model treats noise as meaningful tokens.

There is therefore a need for a simple, accessible tool that lets a user clean text through a configurable pipeline of standard preprocessing operations, inspect the before/after results, and obtain statistics that quantify how much noise was removed — all without writing code, installing complex ML frameworks, or relying on paid APIs.

---

## ✨ Features

- **Convert text to lowercase**
- **Remove URLs** (`https://`, `www.`, `ftp://`)
- **Remove email addresses**
- **Remove punctuation** (using Python's `string.punctuation`)
- **Remove numbers / digits**
- **Remove special characters** (symbols, emojis, etc.)
- **Remove extra spaces** (collapse multiple spaces, tabs, newlines)
- **Remove English stopwords** (using NLTK)
- **Sidebar checkboxes** to select which operations to apply
- **Preprocess Text** and **Clear** buttons
- **Load Sample Text** button
- **Download cleaned text** as a `.txt` file
- **Empty-input validation** with user-friendly error messages
- **Text statistics** displayed as Streamlit metric cards:
  - Original character count
  - Cleaned character count
  - Original word count
  - Cleaned word count
  - Sentence count
  - Number of characters removed
- **"How It Works"** expandable section with explanation of each technique
- **Visual preprocessing pipeline** diagram

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Python 3.12+** | Programming language |
| **Streamlit** | Web framework for the interactive UI |
| **NLTK** | Stopword list for English language |
| **re** | Regular expressions for pattern matching (URLs, emails, numbers, etc.) |
| **string** | Punctuation character set |

---

## 📚 NLP Concepts

- **Text Normalization** – Converting text to a standard format (lowercasing).
- **Tokenization** – Splitting text into words (implicit in stopword removal).
- **Stopword Removal** – Removing high-frequency, low-information words.
- **Noise Removal** – Removing URLs, emails, punctuation, numbers, and special characters.
- **Whitespace Normalization** – Collapsing multiple spaces into single spaces.

---

## 📥 Installation

### Prerequisites

- **Python 3.12 or higher** – [Download from python.org](https://www.python.org/downloads/)
- **pip** (comes bundled with Python)

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/<your-username>/Text-Preprocessing-and-Cleaning.git
   cd Text-Preprocessing-and-Cleaning
   ```

2. **(Recommended) Create a virtual environment:**

   ```bash
   python -m venv venv
   venv\Scripts\activate          # Windows
   # source venv/bin/activate     # macOS / Linux
   ```

3. **Install the required packages:**

   ```bash
   pip install -r requirements.txt
   ```

---

## ▶️ How to Run

```bash
streamlit run app.py
```

The app will open automatically in your default web browser at `http://localhost:8501`.

> On first run, NLTK will automatically download the stopwords corpus (requires internet). After that, the app works offline.

---

## 🔤 Sample Input

```
Natural Language Processing (NLP) is a fascinating field of Artificial Intelligence! It helps computers understand, interpret, and generate human language. Visit https://www.example.com or email me at test@example.com for more details. The year 2024 saw amazing advances.  Some special symbols are: @, #, $, %, & and *.

The   quick    brown fox   jumps over the lazy dog. Is this working? Yes, it is working perfectly!!!
```

*(You can load this instantly by clicking the **Load Sample Text** button.)*

---

## ✅ Sample Output (all options enabled)

```
natural language processing nlp fascinating field artificial intelligence helps computers understand interpret generate human language visit email details year saw amazing advances special symbols quick brown fox jumps lazy dog working yes working perfectly
```

### Statistics

| Metric | Value |
|---|---|
| Original Characters | ~340 |
| Cleaned Characters | ~250 |
| Characters Removed | ~90 |
| Original Words | ~50 |
| Cleaned Words | ~30 |
| Sentences | 6 |

*(Exact values depend on the input text.)*

---

## 📁 Project Structure

```text
Text-Preprocessing-and-Cleaning/
│
├── app.py                # Main Streamlit application
├── requirements.txt      # Python dependencies
├── README.md             # Project documentation
├── .gitignore            # Files to ignore in Git
└── screenshots/          # App screenshots
```

---

## 🔗 Preprocessing Pipeline

```text
Raw Text
   ↓
Lowercase
   ↓
Remove URLs
   ↓
Remove Emails
   ↓
Remove Punctuation
   ↓
Remove Numbers
   ↓
Remove Special Characters
   ↓
Remove Extra Spaces
   ↓
Remove Stopwords
   ↓
Clean Text
```

---

## 🎓 Learning Outcomes

- Understanding the importance of text preprocessing in NLP.
- Implementing regex-based cleaning for URLs, emails, numbers, and special characters.
- Working with Python's `string` and `re` modules.
- Using NLTK for stopword removal.
- Building an interactive web UI with Streamlit.
- Writing clean, modular, and well-documented Python code.
- Handling user input validation and error messages gracefully.

---

## 🚀 Future Enhancements

- **Stemming and Lemmatization** using NLTK's PorterStemmer / WordNetLemmatizer.
- **Multi-language stopword** support.
- **CSV / file upload** for batch preprocessing.
- **Tokenization visualization** (word clouds, frequency charts).
- **Spell checking** and correction.
- **Encoding detection** and conversion for messy input files.
- **Export cleaned data** to CSV or JSON format.

---

## 👤 Author

**Your Name**  
Subject: Text and Speech Analysis  
Individual College Project
