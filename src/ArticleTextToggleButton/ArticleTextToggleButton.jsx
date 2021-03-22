import React from 'react';
import './ArticleTextToggleButton.css';

const ArticleTextToggleButton = (props) => {
  const {
    dateTime,
    displayDate,
    shortText,
    handleClick,
    hidden,
  } = props.handler;
  const hide = hidden ? 'hidden' : '';
  const classes = `info ${hide}`;
  const buttonName = hidden ? 'Show more' : 'Show less';

  const info = (
    <div className={classes}>
      <time dateTime={dateTime}> {displayDate} </time>
      <p>{shortText}</p>
    </div>
  );
  return (
    <div>
      {' '}
      {info}
      <button onClick={handleClick}> {buttonName}</button>
    </div>
  );
};

export default ArticleTextToggleButton;
