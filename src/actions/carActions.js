export const addFeature = newFeature => {
    console.log(`${newFeature} added to car!`)

    return {
        type: 'ADD_ITEM',
        payload: newFeature
    }
};

export const deleteFeature = feature => {
    console.log(`${feature} deleted from features`)

    return {
        type: 'DELETE_ITEM',
        payload: feature
    }
}