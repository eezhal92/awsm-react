import React, { Component } from 'react';
import moment from 'moment';

class ArticleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleTitle: props.title,
    };
  }

  changeTitleToUppercase() {
    const { articleTitle } = this.state;

    this.setState({
        // Lari Pagi -> LARI PAGE
        articleTitle: articleTitle.toUpperCase(),
    });
  }

  render() {
    const { articleTitle } = this.state;
    const { summary, date } = this.props;

    return (
      <div className="article-item" style={{ overflow: 'hidden', marginBottom: 10, background: '#eee' }}>
        <img role="presentation" src="http://placehold.it/140x140" style={{ float: 'left' }} />
        <div className="meta" style={{ float: 'left', padding: '0px 10px' }}>
          <h2 className="article-item__title">{articleTitle}</h2>
          <p className="article-item__summary">{summary}</p>
          <p className="article-item__date">Date: {moment(date).format('DD MMM YY')}</p>
          <button onClick={() => this.changeTitleToUppercase()} className="article-item__title-to-uppercase">
            Change Title To Uppercase
          </button>
        </div>
      </div>
    );
  }
}

export default ArticleItem;