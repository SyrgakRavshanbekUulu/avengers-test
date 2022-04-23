import styles from './App.module.css';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddTranzaction from './pages/AddTranzaction/AddTranzaction';
import ShowTable from './pages/ShowTable/ShowTable';
import SignIn from './pages/SignIn/SignIn';
function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add' exact component={AddTranzaction} />
        <Route path='/show' exact component={ShowTable} />
        <Route path='/sign-in' exact component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
