import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const { query } = router.query;

  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: 600, margin: '40px auto', padding: '0 20px' }}>
      <h2>Search</h2>
      <form action="/search" method="get" style={{ display: 'flex', gap: 8 }}>
        <input
          type="text"
          name="query"
          placeholder="Search anything..."
          defaultValue={query || ''}
          style={{ flex: 1, padding: '8px 12px', fontSize: 16, border: '1px solid #ccc', borderRadius: 4 }}
        />
        <button
          type="submit"
          style={{ padding: '8px 16px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
        >
          Search
        </button>
      </form>

      {query && (
        <div style={{ marginTop: 24 }}>
          <p style={{ color: '#666', fontSize: 14 }}>Results for: {query}</p>
          {/* Render rich search results including HTML formatting */}
          <div dangerouslySetInnerHTML={{ __html: query }} />
        </div>
      )}
    </div>
  );
}
