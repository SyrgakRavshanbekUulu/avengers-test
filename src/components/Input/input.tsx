import {InputProps} from './input.props';
import styles from './input.module.css'
import {ForwardedRef, forwardRef} from 'react';
import cn from 'classnames';

export const Input = forwardRef(({
  label,
  error,
  className,
  ...props
}: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        className={cn(styles.input, className, {
          [styles.error]: error,
        })}
        {...props}
        ref={ref}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  )
})
