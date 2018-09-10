import '../styles/app.less';
import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';

import AppContainer from './AppContainer';

render(<Provider store={store}>
  <AppContainer />
</Provider>, document.getElementById('app'));
