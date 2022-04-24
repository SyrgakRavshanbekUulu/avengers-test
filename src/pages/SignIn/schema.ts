import { TYPERROR } from 'utils/schemas/constants';
import { stringRequired } from 'utils/schemas/schema';
import * as yup from 'yup';
const signInSchema = yup.object({
  login: stringRequired.email(TYPERROR),
  password: stringRequired,
});

export {
  signInSchema,
}
