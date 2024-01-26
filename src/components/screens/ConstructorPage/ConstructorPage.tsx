import React, { useEffect, useState } from 'react';
import { Container } from './ConstructorPage.styled';
import ResumeConstructorForm from '../../ResumeConstructorForm';
import CvPreview from '../../CvPreview';
import { Button } from '@mui/material';
import { BreakPoints } from '../../../utils/constants/breakPoints';

const btnStyle = {
  position: 'absolute',
  bottom: 40,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
};

export const ConstructorPage: React.FC = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [previewPdf, setPreviewPdf] = useState(false);

  const onResize = () => {
    const w = window.innerWidth;
    setScreenWidth(w);
    if (w <= 960 && previewPdf) {
      setPreviewPdf(false);
    }
  };

  const onPreviewClick = () => {
    setPreviewPdf((prev) => !prev);
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <Container>
      {(screenWidth > BreakPoints.POINT_960 || !previewPdf) && (
        <ResumeConstructorForm />
      )}
      {(screenWidth > BreakPoints.POINT_960 || previewPdf) && <CvPreview />}
      {screenWidth <= BreakPoints.POINT_960 && (
        <Button
          variant="contained"
          size="large"
          sx={btnStyle}
          onClick={onPreviewClick}
        >
          {previewPdf ? 'Back to Editor' : 'Preview Pdf'}
        </Button>
      )}
    </Container>
  );
};
