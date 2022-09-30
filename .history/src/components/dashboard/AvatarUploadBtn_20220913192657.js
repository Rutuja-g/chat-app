import React from 'react';

const AvatarUploadBtn = () => {
  return (
    <div className="mt-3 text-center">
      <div>
        <label>
          Select new avatar
          <input type="file" className="d-none" />
        </label>
      </div>
    </div>
  );
};

export default AvatarUploadBtn;
