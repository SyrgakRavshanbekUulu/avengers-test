import {WithLayout} from '../components/Layout/layout'
import styles from './pages.module.css'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Добро пожаловать, <br />это тестовый проект для Avangers</h1>
    </div>
  )
}

export default WithLayout(Home)

