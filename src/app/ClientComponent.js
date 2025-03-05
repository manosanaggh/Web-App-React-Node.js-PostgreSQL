"use client";
import { useEffect, useState } from 'react';

export default function ClientComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the server-side API route
    fetch('/api/db')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log ("OK");
  return(
    <div>
    <h1>Data from PostgreSQL</h1>
    {data ? (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
}