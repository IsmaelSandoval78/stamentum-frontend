import { useState, useEffect } from 'react';

const BibleApiSearch = () => {
  const [versions, setVersions] = useState([]);
  const [selectedVersion, setSelectedVersion] = useState('');
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState('');
  const [chapter, setChapter] = useState('');
  const [verse, setVerse] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    // Fetch available versions from API
    fetch('https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/bibles.json')
      .then((res) => res.json())
      .then((data) => setVersions(data));
  }, []);

  const loadBooks = (version) => {
    fetch(`https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${version}/books/books.json`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  };

  const handleVersionChange = (e) => {
    const version = e.target.value;
    setSelectedVersion(version);
    loadBooks(version);
    setSelectedBook('');
    setResult('');
  };

  const handleSearch = async () => {
    if (selectedVersion && selectedBook && chapter) {
      let url = '';
      if (verse) {
        url = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${selectedVersion}/books/${selectedBook}/chapters/${chapter}/verses/${verse}.json`;
      } else {
        url = `https://cdn.jsdelivr.net/gh/wldeh/bible-api/bibles/${selectedVersion}/books/${selectedBook}/chapters/${chapter}.json`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (verse) {
        setResult(data.text || 'Versículo no encontrado');
      } else {
        const chapterVerses = Object.values(data).map((v, i) => `${i + 1}: ${v.text}`).join('\n');
        setResult(chapterVerses || 'Capítulo no encontrado');
      }
    } else {
      alert('Por favor, selecciona versión, libro y capítulo.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      <h2>Buscar Versículo o Capítulo (Fuente: API Pública)</h2>

      <div style={{ marginBottom: '1rem' }}>
        <label>Versión: </label>
        <select value={selectedVersion} onChange={handleVersionChange}>
          <option value="">Selecciona versión</option>
          {versions.map((v, i) => (
            <option key={i} value={v.id}>{v.name}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Libro: </label>
        <select value={selectedBook} onChange={(e) => setSelectedBook(e.target.value)}>
          <option value="">Selecciona libro</option>
          {books.map((b, i) => (
            <option key={i} value={b.slug}>{b.name}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Capítulo: </label>
        <input
          type="number"
          value={chapter}
          onChange={(e) => setChapter(e.target.value)}
          placeholder="Ejemplo: 3"
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Versículo (opcional): </label>
        <input
          type="number"
          value={verse}
          onChange={(e) => setVerse(e.target.value)}
          placeholder="Ejemplo: 16"
        />
      </div>

      <button onClick={handleSearch}>Buscar</button>

      {result && (
        <div style={{ marginTop: '2rem', whiteSpace: 'pre-line', backgroundColor: '#f9f9f9', padding: '1rem', borderRadius: '5px' }}>
          <strong>Resultado:</strong>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
};

export default BibleApiSearch;
