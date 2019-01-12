import React from 'react';

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

  console.log(seasonConfig);

  return (
    <div>
      {/* <i className={`${icon} icon`} />
      <h3>{text}</h3>
      <i className={`${icon} icon`} /> */}
    </div>
  );
};

export default SeasonDisplay;
