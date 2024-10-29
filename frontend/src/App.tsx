// frontend/src/App.jsx

import { useEffect, useState } from 'react';
import { fetchData } from './api';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then((result) => setData(result));
  }, []);

  return (
    <div>
      <h1>Data from Backend:</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
}

export default App;
