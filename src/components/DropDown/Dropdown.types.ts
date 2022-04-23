import { IBanks } from 'pages/AddTranzaction/AddTranzaction.types';
import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface DropDownProps extends DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  menu: IBanks[]
  label?: string
  error?: FieldError
}
