import {DropDownProps} from './drop-down.props';
import styles from './drop-down.module.css'
import cn from 'classnames'
import {ForwardedRef, forwardRef} from 'react';
export const DropDown = forwardRef(({
  menu,
  label,
  error,
  className,
  ...props
}: DropDownProps, ref: ForwardedRef<HTMLSelectElement>) => {
  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <select {...props} className={cn(styles.select, className, {
        [styles.error]: error,
      })}>
        {menu.map((m) =>
          <option key={m.title} value={m.title}>{m.title}</option>)}
      </select>
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>

  )
})
