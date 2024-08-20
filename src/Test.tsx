import * as React from 'react';
import { useState } from 'react';

const Test = ({ db }) => {
  const [url, setUrl] = useState('')
  const [downloaded, setDownloaded] = useState<boolean>(false)

  const downloadModule = async () => {
    db.add({ id: 'test', text: "asdfkjba kfjhbas dfjkba sdlkfjba slkdfbasl kjbfalkjsb flkjab" })
  }

  return (
    <>
      <input type="text" src={url} onChange={(e) => setUrl(e.target.value)} />
      <input type="button" onClick={downloadModule} title={downloaded ? 'Downloaded!' : 'Download'} />
    </>
  )
};

export default Test;
