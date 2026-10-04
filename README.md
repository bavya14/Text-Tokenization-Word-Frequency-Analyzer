# Text Tokenization & Word Frequency Analyzer

A web-based Text and Speech Analysis application that performs **sentence tokenization, word tokenization, word frequency analysis, text statistics, and vocabulary analysis** through an interactive and user-friendly interface.

## 📌 Project Overview

**Text Tokenization & Word Frequency Analyzer** is designed to demonstrate fundamental Natural Language Processing (NLP) techniques used for analyzing textual data.

The application accepts user-provided text and processes it to identify sentences, individual words, word frequencies, sentence lengths, and vocabulary richness. Results are presented through interactive statistics, frequency rankings, and visualizations.

This project was developed as part of the **Text and Speech Analysis** coursework.

## ✨ Features

* 🔤 Sentence Tokenization
* 📝 Word Tokenization
* 📊 Word Frequency Analysis
* 📈 Frequency Visualization
* 🔎 Token Search and Frequency Lookup
* 📋 Top 5 / 10 / 15 / 20 Most Frequent Words
* 📏 Sentence Length Analysis
* 📚 Vocabulary Richness Calculation
* 📊 Total Word and Unique Word Statistics
* 📋 Copy Analysis Results
* 💾 Download Analysis Report
* 🧪 Sample Text for Testing
* 🧹 Clear Input and Results
* 🌙 Dark Mode
* 📱 Responsive Design

## 🧠 NLP Concepts Demonstrated

### 1. Sentence Tokenization

The input text is divided into individual sentences using punctuation-based sentence boundaries.

**Example:**

```text
Natural Language Processing is useful. It helps computers understand text.
```

Result:

```text
Sentence 1 → Natural Language Processing is useful.
Sentence 2 → It helps computers understand text.
```

### 2. Word Tokenization

Each sentence is further divided into individual word tokens.

**Example:**

```text
Natural Language Processing
```

Result:

```text
Natural
Language
Processing
```

### 3. Word Frequency Analysis

The application counts how frequently each word appears in the input text and ranks the words according to their occurrence.

### 4. Sentence Length Analysis

The application calculates:

* Shortest sentence
* Longest sentence
* Average sentence length

### 5. Vocabulary Richness

Vocabulary richness is calculated using the relationship between unique words and total words:

```text
Vocabulary Richness = Unique Words / Total Words
```

A higher value generally indicates greater lexical diversity within the analyzed text.

## 🔄 Processing Pipeline

```text
Input Text
    ↓
Sentence Tokenization
    ↓
Word Tokenization
    ↓
Text Normalization
    ↓
Word Frequency Calculation
    ↓
Statistical Analysis
    ↓
Visualization & Results
```

## 🛠️ Technologies Used

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **Lucide Icons**
* **JavaScript / TypeScript NLP Processing**
* **HTML5**
* **CSS3**

## 🖥️ Application Workflow

1. Enter or paste text into the input area.
2. Click **Analyze Text**.
3. The application tokenizes the text into sentences and words.
4. Word frequencies are calculated.
5. Statistical information is generated.
6. Frequent words are displayed in ranked form.
7. Frequency visualization is generated.
8. Sentence and vocabulary statistics are displayed.
9. Individual tokens can be searched for their frequency.

## 📊 Example Analysis

For the input:

```text
Natural language processing is a branch of artificial intelligence.
Natural language processing helps computers understand human language.
```

The application identifies:

* Total sentences
* Total words
* Unique words
* Most frequent words
* Sentence lengths
* Vocabulary richness
* Individual word frequencies

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your computer.

### Clone the Repository

```bash
git clone https://github.com/bavya14/Text-Tokenization-Word-Frequency-Analyzer.git
```

### Navigate to the Project

```bash
cd Text-Tokenization-Word-Frequency-Analyzer
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite, usually:

```text
http://localhost:5173
```

## 📁 Project Structure

```text
Text-Tokenization-Word-Frequency-Analyzer/
│
├── public/
│
├── src/
│   ├── components/
│   ├── utils/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
│
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── vite.config.ts
└── .gitignore
```

## 🔐 Privacy

The application performs text analysis locally in the browser.

User-entered text is not intentionally sent to an external server or stored in a database.

## 🎓 Academic Purpose

This project demonstrates practical implementation of basic NLP techniques including:

* Text segmentation
* Tokenization
* Frequency distribution
* Statistical text analysis
* Lexical diversity analysis
* Data visualization

It can be used as a learning tool for understanding how raw text can be transformed into structured linguistic information.

## 🔮 Future Enhancements

Possible future improvements include:

* Support for multiple languages
* Advanced NLP tokenization
* Stopword filtering
* Stemming and lemmatization
* Part-of-Speech tagging
* Named Entity Recognition
* TF-IDF analysis
* Export to CSV and PDF
* Advanced text visualization

## 👩‍💻 Author

**Bavyashree S**

Computer Science and Engineering
Prathyusha Engineering College

## 📄 License

This project is developed for educational and academic purposes.
