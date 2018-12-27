import React from 'react';
import faker from 'faker';

const PostCard = props => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={faker.image.animals()} alt="card" />
      </div>
      <div className="content">
        <a href="/" className="header">
          {props.name}
        </a>
        <div className="meta">
          <span className="date">Joined in 2018</span>
        </div>
        <div className="description">
          {props.name} is an art director living in New York.
        </div>
      </div>
      <div className="extra content">
        <a href="/">
          <i className="user icon">33 Friends</i>
        </a>
      </div>
    </div>
  );
};

export default PostCard;
