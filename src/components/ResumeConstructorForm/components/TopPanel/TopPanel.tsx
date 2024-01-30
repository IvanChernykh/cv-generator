import { Box, Tooltip } from '@mui/material';
import React, { useRef } from 'react';
import { IResumeState } from '../../../../redux/resume/types';
import { ButtonUi } from '../../../ui/button/button';
import { clearFileInputRef } from '../../../../utils/helpers/clearFileInputRef';
import { IResume } from '../../../../utils/types/resume';
import { isCorrectType } from '../../../../utils/helpers/isResumeType';

interface ITopPanelProps {
  resume: IResumeState;
  updateResume: (payload: IResume) => void;
}

export const TopPanel: React.FC<ITopPanelProps> = ({
  resume,
  updateResume,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDownload = () => {
    const jsonData = JSON.stringify(resume);
    const blob = new Blob([jsonData], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `${resume.cvName}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) {
      return;
    }

    const selectedFile = files[0];

    const reader = new FileReader();
    reader.readAsText(selectedFile);
    reader.onload = (ev) => {
      if (!ev.target?.result) {
        return;
      }
      const jsonData = ev.target.result;

      try {
        const data = JSON.parse(jsonData as string);

        if (isCorrectType(data)) {
          updateResume(data);
        } else {
          throw new Error('Wrong object format');
        }
      } catch (error) {
        alert(error);
      }
    };

    clearFileInputRef(inputRef);
  };

  return (
    <Box
      sx={{
        mb: 4,
        paddingTop: '20px',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <ButtonUi variant="contained" onClick={handleDownload}>
        Download as JSON
      </ButtonUi>
      <Tooltip
        title="Upload your resume from previously generated json file"
        placement="bottom"
        arrow
      >
        <div>
          <ButtonUi variant="contained" onClick={handleUploadClick}>
            Upload from JSON
          </ButtonUi>
        </div>
      </Tooltip>
      <input
        ref={inputRef}
        type="file"
        accept=".json"
        style={{ display: 'none' }}
        onChange={handleInputChange}
      />
    </Box>
  );
};
