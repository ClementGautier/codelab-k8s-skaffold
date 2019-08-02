import React, { useState, useEffect } from 'react';
import env from "@beam-australia/react-env";
import axios from 'axios';

function Version() {
  const [version, setVersion] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await axios(`${env("BACKEND_URL")}/vesrion`);

      setVersion(result.data.version);
    }

    fetchData();
  }, []);

  return (
    <div>
      <p>
        Backend version: {version}
      </p>
    </div>
  );
}

export default Version;
