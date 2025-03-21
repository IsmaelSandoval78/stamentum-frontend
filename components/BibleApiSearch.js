import { useEffect, useState } from 'react';

export default function BibleApiSearch() {
  const [versions, setVersions] = useState([]);
  const [books, setBooks] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState('');
  const [selectedBook, setSelectedBook] = useState('');
  const [chapter, setChapter] = useState('');
  const [verse, setVerse] = useState('');
  const [verseText, setVerseText] = useState('');

  useEffect(() => {
    // Solo las versiones libres
    const allowedVersions = ['en-kjv', 'en-asv', 'en-web', 'es-rv09'];
    fetch('https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/bibles.json')
      .then((res) => res.json())
      .then((data) =>
        setVersions(data.filter((v) => allowedVersions.includes(v.id)))
      );
  }, []);

  useEffect(() => {
    if (selectedVersion) {
      const isSpanish = selectedVersion === 'es-rv09';
      const booksUrl = isSpanish
        ? 'https://stamentum-bibles.s3.amazonaws.com/books/books_es.json'
        : 'https://stamentum-bibles.s3.amazonaws.com/books/books_en.json';

      fetch(booksUrl)
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }
  }, [selectedVersion]);

  const handleSearch = () => {
    if (selectedVersion && selectedBook && chapter && verse) {
      fetch(
        `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${selectedVersion}/books/${selectedBook}/chapters/${chapter}/verses/${verse}.json`
      )
        .then((res) => res.json())
        .then((data) => setVerseText(data.text))
        .catch(() => setVerseText('Verse not found.'));
    }
  };

  return (
    <div style={{ marginTop: '40px', textAlign: 'center' }}>
      <h1>Search a Bible Verse</h1>
      <div style={{ marginBottom: '1rem' }}>
        <label>Version: </label>
        <select
          value={selectedVersion}
          onChange={(e) => setSelectedVersion(e.target.value)}
        >
          <option value="">Select version</option>
          {versions.map((v, i) => (
            <option key={i} value={v.id}>
              {v.version}
            </option>
          ))}
        </select>
      </div>

      {selectedVersion && (
        <>
          <div style={{ marginBottom: '1rem' }}>
            <label>Book: </label>
            <select
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
            >
              <option value="">Select book</option>
              {books.map((b, i) => (
                <option key={i} value={b.slug}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Chapter: </label>
            <input
              type="number"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Verse: </label>
            <input
              type="number"
              value={verse}
              onChange={(e) => setVerse(e.target.value)}
            />
          </div>

          <button onClick={handleSearch}>Search</button>
        </>
      )}

      {verseText && (
        <div style={{ marginTop: '2rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
          <h3>Result:</h3>
          <p>{verseText}</p>
        </div>
      )}
    </div>
  );
}
