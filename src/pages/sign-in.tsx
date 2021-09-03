import {useForm} from 'react-hook-form'
import {useHistory} from 'react-router'
import {Button, Input} from '../components'
import {WithLayout} from '../components/Layout/layout'
import styles from './pages.module.css'

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ISignIn>()
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
          type='email'
          error={errors.login}
          {...register(
              'login',
              {required: {value: true, message: 'Заполните поле'}},
          )}
        />
        <Input
          label="Пароль"
          type='password'
          error={errors.password}
          {...register(
              'password',
              {required: {value: true, message: 'Заполните поле'}},
          )}
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

interface ISignIn {
  login: string
  password: string
}
