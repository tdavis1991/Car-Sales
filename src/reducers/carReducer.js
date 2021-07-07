const intialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const carReducer = (state = intialState, action) => {
    switch(action.type) {
        case 'ADD_ITEM': 
            const newFeature = action.payload
            return {
                ...state,
                additionalPrice: state.additionalPrice + newFeature.price,
                car: {...state.car, features: [...state.car.features, newFeature]},
                additionalFeatures: state.additionalFeatures.filter(list => list.id !== newFeature.id)
            }
        case 'DELETE_ITEM': 
            const feature = action.payload
            return {
                ...state,
                additionalPrice: state.additionalPrice - feature.price,
                car: {...state.car, features: state.car.features.filter(list => list.id !== feature.id)}
            }
        default:
            return state
    }
}