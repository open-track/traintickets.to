import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import 'react-dates/initialize';
import {App} from './Page/Index/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
