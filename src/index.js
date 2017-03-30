import React from 'react';
import { Provider,Router ,Route , IndexRoute , browserHistory } from 'react-redux';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { App,Login, Signup } from './components';
import './index.css';


import configureStore from './store/configureStore';


const store = configureStore();

injectTapEventPlugin();


ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>

     

      <Router history={browserHistory}>
        <Route path="/" component={Login} >
          {/*<IndexRoute component={Login} />*/}
          {/*<Route path="/main" component={Main} />
          <Route path="/Signup" component={Signup} />*/}
        </Route>

      </Router>

    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
