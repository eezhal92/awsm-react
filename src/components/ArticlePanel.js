import React from 'react';
import ArticleItem from './ArticleItem';

const ArticlePanel = ({ title, articles }) => (  
  <div className="article-panel">
    <h1>{title}</h1>
    {articles.map((article, i) => (
      <ArticleItem 
        key={i} 
        title={article.title} 
        summary={article.summary}
        date={article.date}
      />
    ))}
  </div>
);

export default ArticlePanel;