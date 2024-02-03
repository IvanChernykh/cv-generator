import React, { HTMLProps } from 'react';
import DragHandleIcon from '@mui/icons-material/DragHandle';

interface DragHandleProps extends HTMLProps<HTMLDivElement> {}

export const DragHandle: React.FC<DragHandleProps> = (props) => {
  return (
    <div {...props}>
      <DragHandleIcon sx={{ opacity: 0.4 }} />
    </div>
  );
};
