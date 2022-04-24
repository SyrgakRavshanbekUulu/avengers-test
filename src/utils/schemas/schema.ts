import * as yup from 'yup';
import { REQUIRED, TYPERROR } from './constants';

const stringRequired = yup
  .string()
  .typeError(TYPERROR)
  .required(REQUIRED);

const numberRequired = yup
  .number()
  .typeError(TYPERROR)
  .required(REQUIRED);

export {
  stringRequired,
  numberRequired,
}
