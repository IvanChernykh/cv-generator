import { Typography } from '@mui/material';
import React from 'react';
import { Colors } from '../../../helpers/constants/colors';

interface ISummaryProps {
  title?: string;
  subtitle?: string;
  showSubtitle?: boolean;
}

export const SummaryAccordion: React.FC<ISummaryProps> = ({
  title,
  subtitle,
  showSubtitle,
}) => {
  return (
    <div>
      <Typography fontWeight={600} fontSize=".875rem">
        {title || '(Empty)'}
      </Typography>
      {(subtitle || showSubtitle) && (
        <Typography fontSize=".75rem" color={Colors.grayText}>
          {subtitle}
        </Typography>
      )}
    </div>
  );
};
