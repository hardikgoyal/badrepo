import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const { query } = router.query;

  // WARNING: This is intentionally vulnerable to XSS.
  // Do not use dangerouslySetInnerHTML with unsanitized user input in production.
  return (
    <div>
      <form action="/search" method="get">
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      
      <div className="search-output">
        {query ? <h1>Search results for: {query}</h1> : <h1>Please enter a search term.</h1>}
      </div>
    </div>
  );
}

  // display results
  // v5
