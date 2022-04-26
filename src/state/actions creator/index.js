const increment = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "increment",
            payload: amount,
        });
    };
};

const decrement = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "decrement",
            payload: amount,
        });
    };
};

export { increment, decrement };
