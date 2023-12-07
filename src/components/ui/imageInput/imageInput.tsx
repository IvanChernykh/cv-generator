import { Box } from '@mui/material';
import React, { useRef, useState } from 'react';

import PersonIcon from '@mui/icons-material/Person';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { ButtonUi } from '../button/button';
import { FlexStartCenter } from '../boxes/FlexStartCenter';

interface IImageInputProps {}

export const ImageInput: React.FC<IImageInputProps> = ({}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFile(e.target.files[0]);
      if (inputRef.current) {
        inputRef.current.files = null;
        inputRef.current.value = '';
      }
    }
  };

  const handleDeleteImg = () => {
    setFile(null);
  };

  return (
    <Box>
      <FlexStartCenter>
        <Box
          sx={{
            height: '56px',
            width: '56px',
            borderRadius: '4px',
            background: 'rgba(0,0,0,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          mr={2}
        >
          {file ? (
            <img
              src={URL.createObjectURL(file)}
              alt="img"
              width={56}
              height={56}
              style={{ objectFit: 'cover' }}
            />
          ) : (
            <PersonIcon
              sx={{ opacity: 0.5 }}
              style={{ width: '35px', height: '35px' }}
            />
          )}
        </Box>
        <ButtonUi onClick={handleUploadClick}>
          {file ? 'Change ' : 'Upload '} photo
        </ButtonUi>
        {file && (
          <ButtonUi
            onClick={handleDeleteImg}
            sx={{ ml: 2 }}
            color="error"
            startIcon={<DeleteOutlineIcon />}
          >
            Delete photo
          </ButtonUi>
        )}
        <input
          ref={inputRef}
          type="file"
          onChange={handleInputChange}
          style={{ display: 'none' }}
          accept=".jpg, .jpeg, .png"
        />
      </FlexStartCenter>
    </Box>
  );
};
