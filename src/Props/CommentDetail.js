import React from 'react';

let style = {
  card: {
    padding: '20px',
    width: '400px',
    height: '100px',
    border: 'solid lightgrey'
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '100%'
  },
  content: {
    marginLeft: '60px'
  }
};

const CommentDetail = props => {
  // console.log(props);
  return (
    <div className="ui comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img style={style.avatar} src={props.avatar} alt="avatar" />
        </a>
        <div style={style.content} className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata">
            <span className="date">{props.time}</span>
          </div>
          <div className="text">{props.text}</div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
