import { Box } from '@mui/material';
import React, { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ITextEditorProps {
  value?: string;
  onChange?: (value: string) => void;
  onChangeDelta?: (value: string) => void;
}

export type DeltaOperation = {
  insert?: string;
  attributes?: {
    bold: boolean;
    list: 'ordered' | 'bullet' | undefined;
  };
};

export const isEmpty = (str: string) => str === '<p><br></p>' || !str.length;

export const TextEditor: React.FC<ITextEditorProps> = ({
  value,
  onChange,
  onChangeDelta,
}) => {
  const quillConfig = useMemo(
    () => ({
      toolbar: {
        container: [/* 'bold', { list: 'ordered' }, */ { list: 'bullet' }],
      },
    }),
    [],
  );

  return (
    <Box
      sx={{
        '.ql-container.ql-snow': {
          height: '130px',
          fontSize: '16px',
        },
      }}
    >
      <ReactQuill
        value={value}
        onChange={(v, __, ___, editor) => {
          const newDelta: DeltaOperation[] = editor
            .getContents()
            .map(({ insert, attributes }) => ({
              insert: insert,
              attributes: {
                bold: !!attributes?.bold,
                italic: !!attributes?.italic,
                list: attributes?.list,
              },
            }));

          onChangeDelta?.(JSON.stringify(newDelta));
          onChange?.(v);
        }}
        modules={quillConfig}
        style={{ border: 'none' }}
      />
    </Box>
  );
};
