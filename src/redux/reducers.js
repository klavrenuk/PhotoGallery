const initState = {
    photoCarousel: {
        isShow: false,
        photos: []
    }
};

const reducers = (state = initState, action) => {
    switch(action.type) {
        case 'photoCarousel':
            return {
                ...state,
                photoCarousel: action.value
            }

        default:
            return state;
    }
}

export default reducers;