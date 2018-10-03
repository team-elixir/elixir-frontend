import axios from "axios";
// get data from sub category 1 , 2 , 3
export const sliderAction = () => dispatch => {
    axios
        .post('https://api.elixir.ausgrads.academy/products_micro/products/getBySubCategory/', ['1','2'])
        .catch(error => console.log(error.status))
        .then(category => dispatch(
        {
            type: 'GET',
            payload: deStructureJson(category.data),
        }));
};
// Extract elements from JSON
function deStructureJson(dataSource) {
    return dataSource.map((dataSource) => dataSource.list[0]);
}