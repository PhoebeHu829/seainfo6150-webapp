import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ArticleListItem.module.css';
import ArticleTextToggleButton from '../ArticleTextToggleButton/ArticleTextToggleButton.jsx';
import ArticleImage from '../ArticleImage/ArticleImage.jsx';

const ArticleListItem = (props) => {
  //console.log(props);
  const [isTextShowing, setIsTextShowing] = useState(false);

  function onClick() {
    setIsTextShowing(!isTextShowing);
  }

  return (
    <li className={styles.container}>
      <div className={styles.picTitle}>
        <ArticleImage
          url={props.article.image._url}
          title={props.article.title}
        />

        <div className={styles.wrapper}>
          <h2 className={styles.title}>
            <Link
              className={styles.link}
              to={`/articlelist/${props.article.slug}`}
            >
              {props.article.title}
            </Link>
          </h2>
        </div>
      </div>
      {isTextShowing && (
        <div className={styles.text}>
          <time className={styles.time} dateTime={props.article.timeStamp}>
            {props.article.displayDate}
          </time>
          <p>{props.article.shortText}</p>
        </div>
      )}

      <ArticleTextToggleButton
        buttonText={isTextShowing ? 'Show less' : 'Show more'}
        onClick={onClick}
      />
    </li>
  );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired,
};
export default ArticleListItem;
