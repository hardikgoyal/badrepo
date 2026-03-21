import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();
  const { query } = router.query;

  // WARNING: This is intentionally vulnerable to XSS.
  // Do not use dangerouslySetInnerHTML with unsanitized user input in production.
  const searchResult = query
    ? `<h1>Search results for: ${query}</h1><div dangerouslySetInnerHTML={{ __html: query }} />`
    : '<h1>Please enter a search term.</h1>';

  return (
    <div>
      <form action="/search" method="get">
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      
      <div className="search-output" dangerouslySetInnerHTML={{ __html: searchResult }} />
    </div>
  );
}

  // display results
  // v6
