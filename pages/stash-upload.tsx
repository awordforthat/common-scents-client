import type { NextPage } from 'next';
import React, { useState } from 'react';
import { Button, CircularProgress } from '@mui/material';

const StashUpload: NextPage = () => {
  const [results, setResults] = useState<any>();
  const [filename, setFilename] = useState('');
  const [submitted, setSubmitted] = useState<Boolean>(false);

  const getFileInputElement = () => {
    return document.querySelector('#upload') as HTMLInputElement;
  };
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setResults(undefined);
    const f = getFileInputElement();
    if (!f.files) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', f.files[0]);

    await fetch('/api/upload', {
      body: formData,
      method: 'POST',
    })
      .then(async (res: Response) => {
        const serverRes = await res.json();
        setResults(serverRes);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleFileChange = () => {
    setSubmitted(false);
    const input = getFileInputElement();
    if (!input) {
      console.warn(`No file upload element found!`);
      return;
    }
    if (!input.files) {
      console.warn('No file selected');
      return;
    }
    setFilename(input.files[0].name);
    setResults(undefined);
  };

  return (
    <div>
      <div className="page-title">Batch Upload</div>

      <div className="de-emphasize">
        Export your stash in CSV format and upload it here!
      </div>
      <div>
        <Button
          variant="outlined"
          component="label"
          onChange={handleFileChange}
          onClick={() => {
            setFilename('');
            setSubmitted(false);
            setResults(undefined);
          }}
        >
          Select File
          <input id="upload" type="file" accept=".csv" hidden />
        </Button>
        {filename && (
          <span>
            {filename}
            <span
              onClick={() => {
                setFilename('');
              }}
            >
              &#10006;
            </span>
          </span>
        )}
      </div>
      <div>
        <Button
          variant="contained"
          disabled={!filename || (submitted && !results)}
          onClick={submit}
        >
          Submit
        </Button>
      </div>
      {submitted && !results && (
        <>
          <div>This could take a minute! Hold tight.</div>
          <CircularProgress />
        </>
      )}
      {results && (
        <div className="results-container">
          <ul>
            {results.map((result: string, index: number) => {
              return <li key={`result-${index}`}>{result}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StashUpload;
