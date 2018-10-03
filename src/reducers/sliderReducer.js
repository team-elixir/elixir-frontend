


let initState = {watch: [],};
const sliderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET':
            return action.payload;
         default:
            return 'Empty';
    }
}
export default sliderReducer;