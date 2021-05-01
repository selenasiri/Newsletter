import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/layout/Layout';
import Newsletter from './pages/Newsletter';
import Confirmation from './pages/Confirmation';
import Alert from './components/Alert';
import { getNewsLetters } from './actions/newsLetter';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewsLetters());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Alert />
        <Switch>
          <Route exact path="/" component={Newsletter} />
          <Route path="/confirmation" component={Confirmation} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
