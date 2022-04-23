import { LayoutProps } from './Layout.types';
import styles from './Layout.module.css'
import { Navbar } from '..';
import { FunctionComponent } from 'react';

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      {children}
    </div>
  )
}

export const WithLayout = <T extends Record<
  string, unknown>
>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>

    )
  }
}
