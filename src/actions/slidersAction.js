import axios from "axios";
// get data from sub category 1 , 2 , 3
export const sliderActionWatch = () => dispatch => {
    axios
        .post('https://api.elixir.ausgrads.academy/products_micro/products/getBySubCategory/', ['1'])
        .catch(error => console.log(error.status))
        .then(category => dispatch(
            {
                type: 'GET-WATCH',
                // payload: deStructureJson(category.data),
                payload: category.data,
            }));
};


export const sliderActionPhone = () => dispatch => {
    axios
        .post('https://api.elixir.ausgrads.academy/products_micro/products/getBySubCategory/', ['2'])
        .catch(error => console.log(error.status))
        .then(category => dispatch(
            {
                type: 'GET-PHONE',
                // payload: deStructureJson(category.data),
                payload: category.data,
            }));
};

export const sliderActionCamera = () => dispatch => {
    axios
        .post('https://api.elixir.ausgrads.academy/products_micro/products/getBySubCategory/', ['3'])
        .catch(error => console.log(error.status))
        .then(category => dispatch(
            {
                type: 'GET-CAMERA',
                // payload: deStructureJson(category.data),
                payload: category.data,
            }));
};



// Extract elements from JSON
function deStructureJson(dataSource) {
    return dataSource.map((dataSource) => dataSource.list[0]);
}