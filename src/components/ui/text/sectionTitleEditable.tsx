import React, { useEffect, useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { FlexStartCenter } from '../boxes/FlexStartCenter';
import { useDispatch } from 'react-redux';
import { updateSectionName } from '../../../redux/resume/actions';
import { SectionNamesFields } from '../../../redux/resume/types';
import { AppDispatch } from '../../../redux/createStore';

interface IProps extends React.PropsWithChildren {
  sectionValue: string;
  section: SectionNamesFields;
}

export const SectionTitleEditable: React.FC<IProps> = ({
  sectionValue,
  section,
}) => {
  const [value, setValue] = useState<string>(sectionValue);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const inputRef = React.useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.trim());
  };

  const handleButton = () => {
    if (isEditing) {
      dispatch(updateSectionName({ value, section }));
    } else {
      setValue(sectionValue);
    }

    setIsEditing(!isEditing);
  };

  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  return (
    <FlexStartCenter mb={1} sx={{ height: '40px' }}>
      {isEditing ? (
        <TextField
          size="small"
          value={value}
          onChange={onChange}
          inputRef={inputRef}
        />
      ) : (
        <Typography variant="h6" fontWeight={700}>
          {sectionValue}
        </Typography>
      )}
      <Button
        size="small"
        sx={{ textTransform: 'none' }}
        onClick={handleButton}
      >
        {isEditing ? 'Save' : 'Edit'}
      </Button>
    </FlexStartCenter>
  );
};
