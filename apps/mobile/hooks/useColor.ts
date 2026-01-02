import { useContext } from 'react';
import { ColorContext } from '../provider';
import { ErrorCode, ErrorMessages } from '@acme/errors';

export const useColors = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error(ErrorMessages[ErrorCode.NOT_FOUND_CONTEXT]);
  }
  return context;
};
