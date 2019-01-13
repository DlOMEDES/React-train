import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "let's hit the beach!",
    iconName: 'sun'
  },
  winter: {
    text: "it's brick outide",
    iconName: 'snowflake'
  }
};

// 0-12 months
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};
// northern hemis start > 0
// southern hemispheres starts at 0

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];
  console.log(seasonConfig);

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`} />
      <h3>{text}</h3>
      <i className={`icon-right ${iconName} icon massive`} />
    </div>
  );
};

export default SeasonDisplay;
