import type { NextPage } from 'next';
import React, { useState } from 'react';
import {
  Button,
  CircularProgress,
  Alert,
  AlertTitle,
  Divider,
} from '@mui/material';

import styles from '../styles/page.module.scss';
import uploadStyles from './styles/upload.module.scss';

interface IBatchUploadResult {
  newHouses: string[];
  newScents: string[];
}

const StashUpload: NextPage = () => {
  const [results, setResults] = useState<IBatchUploadResult>();
  const [filename, setFilename] = useState('');
  const [submitted, setSubmitted] = useState<Boolean>(false);
  const [error, setError] = useState('');

  const getFileInputElement = () => {
    return document.querySelector('#upload') as HTMLInputElement;
  };
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setError('');
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
        if (Object.keys(serverRes).includes('error')) {
          setError(serverRes['error']);
          return;
        }
        setResults(serverRes);
      })
      .catch((err) => {
        console.error(err);
        setError(err);
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
    setFilename(input.files[0] ? input.files[0].name : '');
    setResults(undefined);
  };

  return (
    <div className={`${styles.page}`}>
      <div className={`${styles.container}`}>
        <h2 className={`${styles.pageTitle}`}>Batch Upload</h2>

        <div className={`${styles.subtitle} `}>
          Export your stash in CSV format and upload it here!
        </div>
        {filename && (
          <div className={`${uploadStyles.file}`}>
            <span>{filename}</span>
            <span
              className={`${uploadStyles.close}`}
              onClick={() => {
                setFilename('');
              }}
            >
              &#10006;
            </span>
          </div>
        )}
        <div
          className={` ${styles.centerInParent} ${styles.horizontal} ${uploadStyles.buttonBank}`}
        >
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

          <Button
            variant="contained"
            disabled={!filename || (submitted && !results)}
            onClick={submit}
          >
            Submit
          </Button>
        </div>
        {submitted && !results && !error && (
          <div className={`${uploadStyles.pending} ${styles.centerInParent}`}>
            <div>This could take a minute! Hold tight.</div>
            <CircularProgress />
          </div>
        )}
        {error && (
          <Alert
            severity="error"
            onClose={() => {
              setError('');
              setResults(undefined);
              setSubmitted(false);
            }}
          >
            <AlertTitle>Error</AlertTitle>
            {error}
          </Alert>
        )}
        {results && (
          <div className={`${uploadStyles.results}`}>
            <Divider />
            <section className={`${uploadStyles.resultsSection}`}>
              {' '}
              <h2 className={`${styles.sectionHeader}`}>Houses</h2>
              {results.newHouses.length == 0 ? (
                <div>No new houses created</div>
              ) : (
                results.newHouses.map((house, index) => {
                  return (
                    <div key={`house-${index}`} className="house">
                      {`Added ${house}`}
                    </div>
                  );
                })
              )}
            </section>
            <Divider light />
            <section className={`${uploadStyles.resultsSection}`}>
              <h2 className={`${styles.sectionHeader}`}>Scents</h2>
              {results.newScents.length == 0 ? (
                <div>No new scents created</div>
              ) : (
                results.newScents.map((scent, index) => {
                  return (
                    <div key={`scent-${index}`} className="scent">
                      {`Added ${scent}`}
                    </div>
                  );
                })
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default StashUpload;
