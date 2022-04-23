import { WithLayout } from 'components/Layout/Layout'
import { IBanks } from 'pages/AddTranzaction/AddTranzaction.types'
import { useEffect, useState } from 'react'
import { getActions, getBanks } from 'service/api'
import styles from '../pages.module.css'
import { IShowTable } from './ShowTable.types'


const ShowTable = () => {
  const [banks, setBanks] = useState<IBanks[]>([])
  const [action, setAction] = useState<IShowTable[]>([])
  const [load, setLoad] = useState<boolean>(false)

  useEffect(() => {
    getActions().then((res) => setAction(res)).then(() => setLoad(true))
    getBanks().then((res) => setBanks(res))
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
