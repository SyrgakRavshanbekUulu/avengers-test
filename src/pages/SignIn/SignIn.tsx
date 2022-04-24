import { yupResolver } from '@hookform/resolvers/yup'
import { Input, Button } from 'components/index'
import { WithLayout } from 'components/Layout/Layout'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import styles from '../pages.module.css'
import { signInSchema } from './schema'
import { ISignIn } from './SignIn.types'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    resolver: yupResolver(signInSchema),
    mode: 'onChange',
  })
  const history = useHistory()
  const onSubmit = (data: ISignIn) => {
    console.log(data)
    history.push('/')
  }
  return (
    <div className={styles.wrapper}>
      <h1>Форма авторизация</h1>
      <form
        className={styles.addform}
        onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Логин"
          type='text'
          error={errors.login}
          {...register('login')}
        />
        <Input
          label="Пароль"
          type='password'
          error={errors.password}
          {...register('password')}
        />
        <Button
          color='primary'
          variant='outlined'
          className={styles.btn}
        >Войти</Button>
      </form>
    </div>

  )
}

export default WithLayout(SignIn)

