'use client';

import { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

interface CloudinaryResult {
  public_id: string;
}

function UploadPage() {
  const [publicId, setPublicId] = useState('');

  return (
    <>
      {publicId && (
        <CldImage src={publicId} alt="A painting" width={270} height={180} />
      )}
      <CldUploadWidget
        uploadPreset="hk4vmazn"
        options={{
          sources: ['local'],
          multiple: false,
          maxFiles: 5,
        }}
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
}

export default UploadPage;
