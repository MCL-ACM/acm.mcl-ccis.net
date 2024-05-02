import { Button } from 'semantic-ui-react';
import React, { useState, useRef } from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';
import { API_ADD_BATCH_CONTRIBUTIONS } from '../api';

export default function BatchUploadForm() {
  const [fileData, setFileData] = useState(null); // State to store file data
  const batchFile = useRef(null);

  const [batchUploadMessage, setBatchUploadMessage] = useState(null);
  const [responseStatus, setResponseStatus] = useState(null);

  const [buttonInteractable, setButtonInteractable] = useState(false);

  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data);
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(sheet);
      setButtonInteractable(true);
      setFileData(jsonData);
    };
    if (file) reader.readAsArrayBuffer(file); // This line is missing in your code
  }

  async function batchFileUpload() {
    if (!fileData) return;

    const response = await fetch(API_ADD_BATCH_CONTRIBUTIONS, {
      method: 'POST',
      body: JSON.stringify(fileData),
    });

    batchFile.current.value = null;
    setButtonInteractable(false);

    const jsonResponse = await response.json();
    setBatchUploadMessage(jsonResponse.message);
    setResponseStatus(response.status);
  }

  return (
    <div className='w-1/2 space-y-5' style={{ backgroundColor: '#00FFF' }}>
      <h2 className='font-bold' style={{ color: '#000080' }}>
        Batch Upload
      </h2>
      <input
        type='file'
        ref={batchFile}
        className='p-2 bg-gray-100'
        onChange={handleFileUpload}
      />
      <div>
        <Button
          className={`${
            buttonInteractable
              ? 'bg-green-500 hover:bg-green-700'
              : 'bg-gray-400'
          } text-white font-bold py-2 px-4 rounded`}
          onClick={() => batchFileUpload()}
          disabled={!buttonInteractable}
        >
          Upload File
        </Button>
      </div>
      <h3
        className={`text-1xl break-all container ${
          responseStatus === 200 ? 'text-green-500' : 'text-red-500'
        }`}
      >
        {batchUploadMessage}
      </h3>
    </div>
  );
}
