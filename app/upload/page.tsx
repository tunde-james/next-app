'use client';

import { CldUploadWidget } from 'next-cloudinary';

function UploadPage() {
  return (
    <CldUploadWidget uploadPreset="hk4vmazn">
      {({ open }) => (
        <button className="btn btn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
}

export default UploadPage;
