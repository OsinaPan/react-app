import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './components/redux/store.js';
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

const container = document.querySelector('#root')
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App tab="home"/>
  </Provider>
);