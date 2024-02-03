import React, { HTMLProps } from 'react';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

interface DragHandleProps extends HTMLProps<HTMLDivElement> {}

export const DragHandle: React.FC<DragHandleProps> = (props) => {
  return (
    <div {...props}>
      <DragIndicatorIcon sx={{ opacity: 0.3 }} />
    </div>
  );
};
