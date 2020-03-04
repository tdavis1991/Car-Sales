import React from 'react';

const AdditionalFeature = props => {
  return (
    <li>
      {/* {props.add(props.feature)} */}
      {console.log('additional feature', props.feature.name)}
      <button className="button" onClick={() => props.add(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
