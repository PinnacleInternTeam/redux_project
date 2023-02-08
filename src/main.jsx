import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { legacy_createStore as createStore} from 'redux'
import allReducer from './reducer/IndexReducer'
import { Provider } from 'react-redux'
const mystore = createStore(allReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={mystore}>
    <App />
    </Provider>
  </React.StrictMode>,
)
