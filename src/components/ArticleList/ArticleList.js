import React, { Fragment, memo } from 'react';

import { Article } from '../Article/Article';
import { NotFound } from '../common/NotFound';

export const ArticleList = memo(function ArticleList({ articles }) {
  
  if (!Array.isArray(articles) || articles.length === 0) {
    return (<NotFound />)
  }
  return (<Fragment>
    {articles.map(article => (<div key={article.id}>
      <Article { ...article } />
    </div>))}
  </Fragment>);
});
