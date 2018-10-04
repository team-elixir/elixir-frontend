

let initState = {watch: [], phone: []};
const sliderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET-WATCH':
            return {watch: action.payload};
        case 'GET-PHONE':
            return {phone: action.payload};
        default:
            return 'Empty';
    }
}
export default sliderReducer;