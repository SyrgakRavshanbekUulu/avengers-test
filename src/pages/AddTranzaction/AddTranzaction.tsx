import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { Button, DropDown, Input } from '../../components'
import { WithLayout } from '../../components/Layout/Layout'
import { getBanks } from '../../service/api'
import { IAddTranzaction, IBanks } from './AddTranzaction.types'
import styles from '../pages.module.css'

const AddTranzaction = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAddTranzaction>()
  const [banks, setBanks] = useState<IBanks[]>([])
  useEffect(() => {
    getBanks().then((res) => setBanks(res))
  }, [])

  const history = useHistory()
  const onSubmit = (data: IAddTranzaction) => {
    console.log(data)
    history.push('/')
  }
  return (
    <div className={styles.wrapper}>
      <h1>Форма отрправки траезикции</h1>
      <form
        className={styles.addform}
        onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Сумма"
          type='number'
          placeholder="Сумма"
          error={errors.summa}
          {...register(
            'summa',
            { required: { value: true, message: 'Заполните поле' } },
          )}
        />
        <Controller
          control={control}
          name='bank'
          rules={{ required: { value: true, message: 'Выберите банк' } }}
          render={({ field }) => (
            <DropDown
              {...field}
              menu={banks}
              label='Ваш банк'
              error={errors.bank}
            />
          )}
        />

        <Button
          color='primary'
          variant='outlined'
        >Отправит</Button>
      </form>
    </div>

  )
}

export default WithLayout(AddTranzaction)
