

const initState = {
    searchResult:["1","2"],
    searchResult1:[],
};

const searchReducer = (state = initState, action) => {
    const productName= [];
    switch (action.type) {
        case 'SEARCH-PRODUCT':
            // console.log("hello")
            // console.log(action.payload);
            // console.log("end");
            action.payload.data.map(obj =>{
                productName.push(obj.product.name);
            });
            return {searchResult: productName,
                searchResult1: action.payload.data};
        case 'SEARCH-PRODUCT1':
            return {searchResult1: action.payload};
        case 'SEARCH-SORTING':
            return {searchResult1: action.payload.data};

        default:
            return state;
    }
};

export default searchReducer;