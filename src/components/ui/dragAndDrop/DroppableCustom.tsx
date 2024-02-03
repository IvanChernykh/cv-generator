import React from 'react';
import { Droppable } from 'react-beautiful-dnd';

interface IDroppableCustomProps extends React.PropsWithChildren {
  droppableId: string;
}

export const DroppableCustom: React.FC<IDroppableCustomProps> = ({
  droppableId,
  children,
}) => {
  return (
    <Droppable droppableId={droppableId}>
      {(droppable) => (
        <div {...droppable.droppableProps} ref={droppable.innerRef}>
          {children}
          {droppable.placeholder}
        </div>
      )}
    </Droppable>
  );
};
