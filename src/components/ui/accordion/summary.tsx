import { Typography } from '@mui/material';
import React from 'react';
import { Colors } from '../../../utils/constants/colors';
import { DragHandle } from '../dragAndDrop/dragHandle';

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
      {/* <div style={{ display: 'flex', alignItems: 'center' }}>
        <DragHandle style={{ marginRight: '10px', marginTop: '3px' }} /> */}
      <Typography fontWeight={600} fontSize=".875rem">
        {title || '(Empty)'}
      </Typography>
      {/* </div> */}
      {(subtitle || showSubtitle) && (
        <Typography fontSize=".75rem" color={Colors.grayText}>
          {subtitle}
        </Typography>
      )}
    </div>
  );
};
