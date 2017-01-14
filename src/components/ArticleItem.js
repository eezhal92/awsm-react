import React from 'react';

const ArticleItem = ({ title, summary, date }) => (
  <div className="article-item" style={{ overflow: 'hidden', marginBottom: 10, background: '#eee' }}>
    <img role="presentation" src="http://placehold.it/140x140" style={{ float: 'left' }} />
    <div className="meta" style={{ float: 'left', padding: '0px 10px' }}>
      <h2>{title}</h2>
      <p>{summary}</p>
      <p>Date: {date}</p>
    </div>
  </div>
);

export default ArticleItem;