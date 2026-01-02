// shared-errors/error-messages.en.ts
import { ErrorCode } from './error-codes';

export const ErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.UNKNOWN]: 'Something went wrong.',
  [ErrorCode.NOT_FOUND_CONTEXT]:
    'useColors must be used within a ColorProvider',

  [ErrorCode.AUTH_INVALID_CREDENTIALS]: 'Invalid email or password.',
  [ErrorCode.AUTH_TOKEN_EXPIRED]: 'Session expired. Please log in again.',
  [ErrorCode.AUTH_UNAUTHORIZED]: 'You are not authorized.',

  [ErrorCode.REQUIRED_FIELD]: 'This field is required.',
  [ErrorCode.INVALID_EMAIL]: 'Please enter a valid email address.',
  [ErrorCode.PASSWORD_TOO_SHORT]:
    'Password must be at least 8 characters long.',

  [ErrorCode.NETWORK_ERROR]:
    'Network connection failed. Please check your internet connection and try again.',
  [ErrorCode.SERVER_ERROR]: 'Server error. Please try again later.',
};
