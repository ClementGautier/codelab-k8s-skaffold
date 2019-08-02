import React, { useState, useEffect } from 'react';
import env from "@beam-australia/react-env";

function Home() {
  const [data, setData] = useState({});

  async function fetchData() {
    const result = await fetch(env("BACKEND_URL"));

    result
      .json()
      .then(result => setData(result));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>
        {JSON.stringify(data)}
      </p>
    </div>
  );
}

export default Home;
