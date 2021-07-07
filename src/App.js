import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import { addFeature, deleteFeature } from './actions/carActions';
import Total from './components/Total';

const App = (props) => {


  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.deleteFeature(item)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} delete={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.features} add={buyItem}/>
        {console.log('app state features:', props.features)}
        <Total car={props.car} additionalPrice={props.price} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log('mapStateToProps state:', state)
  
  return {
    car: state.car,
    price: state.additionalPrice,
    features: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  { addFeature, deleteFeature }
)(App);
