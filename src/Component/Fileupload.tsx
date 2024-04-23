import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const { VITE_BACKEND_URL: Backend_URL } = import.meta.env;
  const [genre, setGenre] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
     if(Backend_URL){
      const response = await fetch(Backend_URL, {
        method: 'POST',
        body: formData,
      });
    
      const data = await response.json();
    

      setGenre(data.genre);
    }
    } catch (err) {
      setError('File upload failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'audio/mp3': ['.mp3'],
      'audio/wav': ['.wav'],
    },
    maxFiles: 1,
    onDrop,
  });

  return (
    <div className="container mx-auto p-4">
      <div
        {...getRootProps()}
        className={`dropzone border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
          isDragActive ? 'bg-blue-100 border-blue-500' : 'bg-gray-50 border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          {isDragActive
            ? 'Drop the MP3 file here...'
            : 'Drag \'n\' drop an MP3 file here, or click to select one'}
        </p>
      </div>
      {loading && <div className="text-center"><p>Loading...</p></div>}
      {genre && <div className="text-green-500 text-center"><p>Detected Genre: {genre}</p></div>}
      {error && <div className="text-red-500 text-center"><p>{error}</p></div>}
    </div>
  );
};

export default FileUpload;
