import {useEffect, useState} from 'react'
import {WithLayout} from '../components/Layout/layout'
import {getActions, getBanks} from '../service/api'
import {IBanks} from './add-tranzaction'
import styles from './pages.module.css'


const ShowTable = () => {
  const [banks, setBanks] = useState<IBanks[]>([])
  const [action, setAction] = useState<IShowTable[]>([])
  const [load, setLoad] = useState<boolean>(false)

  useEffect(() => {
    getActions().then((res) => setAction(res)).then(() => setLoad(true))
    if (load) {
      getBanks().then((res) => setBanks(res))
    }
  }, [])
  const titleBank = (n: number | string) => {
    const bank = banks.find((el) => el.bankId === n)
    return bank?.title
  }
  return (
    <div className={styles.wrapper}>
      <h1>Таблица</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Количество</th>
            <th>Банк</th>
          </tr>
        </thead>
        <tbody>
          {load && action.map((t) => (
            <tr key={t.id}>
              <td>{t.id}</td>
              <td>{t.amount}</td>
              <td>{titleBank(t.bankId)}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>

  )
}

export default WithLayout(ShowTable)

interface IShowTable {
  id: string | number
  amount: number
  bankId: string | number
}
