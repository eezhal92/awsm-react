import React from 'react';

import ArticlePanel from './components/ArticlePanel';

const popularArticles = [
  { title: 'Laying on bed', summary: 'laying...', date: '2010-01-01' },
  { title: 'Jogging', summary: 'jogging...', date: '2010-02-01' },
];

const thisWeekArticles = [
  { title: 'Go to somewhere', summary: 'yeah...', date: '2010-03-01' },
  { title: 'Coding etc', summary: 'whut...', date: '2010-04-01' },
];

const App = () => (
  <div className="app" style={{ width: 960, margin: '0 auto' }}>
    <h1>Awesome App</h1>
    <div style={{ display: 'inline-block', width: 400, marginRight: 20 }}>
        <ArticlePanel title="Popular" articles={popularArticles} />
    </div>
    <div  style={{ display: 'inline-block', width: 400, marginRight: 20 }}>
        <ArticlePanel title="This Week" articles={thisWeekArticles} />
    </div>
  </div>
);

export default App;