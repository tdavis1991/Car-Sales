import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* {props.delete(props.feature)} */}
      <button className="button" onClick={() => props.delete(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
