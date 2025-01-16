// file-input.tsx
import React from 'react';

interface FileInputProps {
  label: string;
  accept: string;
  onChange: (file: File | null) => void;
  disabled?: boolean;
}

const FileInput: React.FC<FileInputProps> = ({ label, accept, onChange, disabled }) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onChange(file);
  };

  return (
    <div className="col-span-12 lg:col-span-10">
      <label className="m-0 p-0">
        {label}
        <input
          type="file"
          accept={accept}
          onChange={handleFileChange}
          disabled={disabled}
          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
        />
      </label>
    </div>
  );
};

export { FileInput };
