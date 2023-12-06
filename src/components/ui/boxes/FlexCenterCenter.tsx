import React from 'react';

interface IFlexCenterCenterProps {
  children: React.ReactNode;
}

export const FlexCenterCenter: React.FC<IFlexCenterCenterProps> = ({
  children,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </div>
  );
};
