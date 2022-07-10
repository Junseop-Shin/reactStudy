import React from 'react';
import NewsPage from './pages/NewsPage';
import { Route } from 'react-router-dom';
const App = () => {
  // ?: category 값이 선택적이라는 의미
  // 없으면 all
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
