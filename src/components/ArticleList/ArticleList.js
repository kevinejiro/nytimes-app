import React, { Fragment, memo } from 'react';
import { Article } from '../Article/Article';

export const ArticleList = memo(function ArticleList({ articles }) {
  
  if (!Array.isArray(articles) || articles.length === 0) {
    return (<div className="text-center spinner-dark">
			No Article found
    </div>);
  }
  return (<Fragment>
    {articles.map(article => (<div key={article.id}>
      <Article { ...article } />
    </div>))}
  </Fragment>);
});
