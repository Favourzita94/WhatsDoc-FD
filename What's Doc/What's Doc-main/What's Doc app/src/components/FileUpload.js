import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Placeholder code for server-side integration
      // Modify this code to match your actual server-side implementation
      // Once you have the server-side URL, update the fetch request accordingly
      const uploadUrl = '/upload-url';
      
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Perform the upload using the FormData
      fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setUploadedFile(data.imageUrl);
            setUploadError(null);
          } else {
            setUploadError(data.error);
            setUploadedFile(null);
          }
        })
        .catch((error) => {
          console.error('Upload error:', error);
          setUploadError('An error occurred during the upload.');
          setUploadedFile(null);
        });
    }
  };

  return (
    <div>
      <h2>File and Image Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadedFile ? (
        <img src={uploadedFile} alt="Uploaded file" />
      ) : (
        <p>Select a file and click Upload to see the result.</p>
      )}
      {uploadError && <p>Error: {uploadError}</p>}
    </div>
  );
};

export default FileUpload;
