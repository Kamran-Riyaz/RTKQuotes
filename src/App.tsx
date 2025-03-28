import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import QuoteList from './app/components/QuoteList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container py-5">
        <h1 className="text-center text-secondary">RTKQuotes</h1>
        <QuoteList />
      </div>
    </Provider>
  );
};

export default App;