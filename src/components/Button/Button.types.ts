import {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'

export interface ButtonProps extends DetailedHTMLProps
  <ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode
    color?: 'primary' | 'secondary'
    variant?: 'filled' | 'outlined'
}
