import { numberRequired, stringRequired } from 'utils/schemas/schema';
import * as yup from 'yup';
import { MINSUMMVALUE } from './constants';

export const addTranzactionSchema = yup.object({
  summa: numberRequired.min(0, MINSUMMVALUE),
  bank: stringRequired,
});
