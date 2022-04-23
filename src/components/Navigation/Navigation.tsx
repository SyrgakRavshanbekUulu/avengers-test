import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Link to='/'>
          <span className={styles.add}>Home</span>
        </Link>
        <Link to='/add'>
          <span className={styles.add}>Добавить транзакции</span>
        </Link>

        <Link to='/show'>
          <span className={styles.show}>Показать таблица</span>
        </Link>

      </div>
      <Link to='/sign-in'>
        <span className={styles.signIn}>Войти</span>
      </Link>
    </nav>
  )
}
