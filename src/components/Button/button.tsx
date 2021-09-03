import {ButtonProps} from './button.props'
import styles from './button.module.css'
import cn from 'classnames'

export const Button =
  ({
    children,
    color = 'primary',
    variant = 'filled',
    className,
    ...props
  }: ButtonProps) => {
    return (
      <button
        className={cn(styles.btn, className, {
          [styles.primary]: color === 'primary',
          [styles.secondary]: color === 'secondary',
          [styles.filled]: variant === 'filled',
          [styles.outlined]: variant === 'outlined',
        })}
        {...props}
      >
        {children}
      </button>
    )
  }
