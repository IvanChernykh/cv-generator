import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { DragHandle } from './dragHandle';

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
          ref={draggable.innerRef}
          style={{
            ...draggable.draggableProps.style,
            marginBottom: '16px',
            display: 'flex',
          }}
        >
          <DragHandle
            {...draggable.dragHandleProps}
            style={{ marginTop: 10, marginLeft: -24 }}
          />
          {children}
        </div>
      )}
    </Draggable>
  );
};
