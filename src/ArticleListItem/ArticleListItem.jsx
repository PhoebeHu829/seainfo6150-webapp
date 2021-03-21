import React from 'react';
import { Link } from 'react-router-dom';

const ArticleListItem = (props) => {
  const { item } = props;
  return (
    <section>
      <h2>
        {' '}
        <Link to={'articlelist/' + item.slug}>{item.title} </Link>
      </h2>
      <time dateTime={item.timeStamp}> {item.displayDate} </time>
      <p>{item.shortText}</p>
    </section>
  );
};

export default ArticleListItem;
