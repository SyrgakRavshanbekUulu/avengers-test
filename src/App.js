import styles from './App.module.css';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import AddTranzaction from './pages/add-tranzaction';
import ShowTable from './pages/show-table';
import SignIn from './pages/sign-in';
function App() {
  return (
    <div className={styles.App}>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/add' exact component={AddTranzaction}/>
        <Route path='/show' exact component={ShowTable}/>
        <Route path='/sign-in' exact component={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;
