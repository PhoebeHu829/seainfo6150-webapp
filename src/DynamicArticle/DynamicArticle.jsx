import React from 'react';
import { Link } from 'react-router-dom';
import HTMLText from '../HTMLText/HTMLText';
import './DynamicArticle.css';

const DynamicArticle = (props) => {
  const {
    title,
    author,
    authorEmail,
    displayDate,
    timeStamp,
    text,
  } = props.article;
  return (
    <article>
      <Link to={'/articlelist'}> Back </Link>
      <div>
        <header>
          <h1>{title}</h1>
          <address>
            by {author} (<a href={authorEmail}>{authorEmail}</a>
            )
            <br />
          </address>
          <time dateTime={timeStamp}>{displayDate}</time>
        </header>

        <HTMLText text={text} />
      </div>
    </article>
  );
};

export default DynamicArticle;
