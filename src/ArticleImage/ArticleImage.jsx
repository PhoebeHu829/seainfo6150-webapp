import React from 'react';
import './ArticleImage.css';

const ArticleImage = (props) => {
  //console.log(props);
  const { image, title } = props;
  console.log(image, title);
  return (
    <div className="image">
      <img src={image} alt={title}></img>
    </div>
  );
};

export default ArticleImage;
