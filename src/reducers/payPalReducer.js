

const initState = {
    payment: '',
};

const payPal = (state = initState, action) => {

    switch (action.type) {
        case 'REQUEST-PAYMENT':
            return  {payment: action.payload}
    default:
        return state;
    }
};

export default payPal;