import {DetailedHTMLProps, SelectHTMLAttributes} from 'react';
import {FieldError} from 'react-hook-form';
import {IBanks} from '../../pages/add-tranzaction';

export interface DropDownProps extends DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    menu: IBanks[]
    label?: string
    error?: FieldError
  }
