import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArticleTextToggleButton from '../ArticleTextToggleButton/ArticleTextToggleButton';
import './ArticleListItem.module.css';

const ArticleListItem = (props) => {
  const { item } = props;
  const dateTime = item.timeStamp;
  const displayDate = item.displayDate;
  const shortText = item.shortText;

  const [hidden, setHidden] = useState(true);

  const handleClick = () => {
    setHidden(!hidden);
  };

  const handler = {
    dateTime: dateTime,
    displayDate: displayDate,
    shortText: shortText,
    handleClick: handleClick,
    hidden: hidden,
  };
  return (
    <section className="smallSection">
      <h2>
        {' '}
        <Link to={'articlelist/' + item.slug}>{item.title} </Link>
      </h2>
      <ArticleTextToggleButton handler={handler} />
    </section>
  );
};

export default ArticleListItem;
