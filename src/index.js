import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './context/themeContext'
import { LangProvider } from './context/langContext'

ReactDOM.render(
  <React.StrictMode>
  <Provider>
     <LangProvider>
        <App />
     </LangProvider>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );