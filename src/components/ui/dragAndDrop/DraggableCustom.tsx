import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface IDraggableCustomProps extends React.PropsWithChildren {
  key: string;
  draggableId: string;
  index: number;
}

export const DraggableCustom: React.FC<IDraggableCustomProps> = ({
  key,
  draggableId,
  index,
  children,
}) => {
  return (
    <Draggable key={key} draggableId={draggableId} index={index}>
      {(draggable) => (
        <div
          {...draggable.draggableProps}
          {...draggable.dragHandleProps}
          ref={draggable.innerRef}
          draggable
          style={{
            ...draggable.draggableProps.style,
            marginBottom: '16px',
          }}
        >
          {children}
        </div>
      )}
    </Draggable>
  );
};
