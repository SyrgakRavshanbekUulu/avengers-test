import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, DropDown, Input } from 'components/index'
import { WithLayout } from 'components/Layout/Layout'
import apiService from 'service/api/api'
import { IAddTranzaction, IBanks } from './AddTranzaction.types'
import { addTranzactionSchema } from './schema'
import styles from '../pages.module.css'

const AddTranzaction = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IAddTranzaction>({
    resolver: yupResolver(addTranzactionSchema),
    mode: 'onChange',
  })
  const [banks, setBanks] = useState<IBanks[]>([])
  useEffect(() => {
    apiService.banks.getAllBanks().then((res) => setBanks(res.data))
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
          {...register('summa')}
        />
        <Controller
          control={control}
          name='bank'
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
