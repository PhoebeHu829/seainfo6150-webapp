import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleImage from '../ArticleImage/ArticleImage';
import './ArticleList.css';

const ArticleList = (props) => {
  const { article } = props;
  //console.log(article);

  let displayContent;
  if (article.length) {
    displayContent = (
      <ul>
        {article.map((item) => (
          <li key={item.slug}>
            <ArticleImage image={item.image._url} title={item.title} />
            <ArticleListItem item={item} />
          </li>
        ))}
      </ul>
    );
  } else {
    displayContent = <h2>You have no data!</h2>;
  }

  return <section>{displayContent}</section>;
};

export default ArticleList;
