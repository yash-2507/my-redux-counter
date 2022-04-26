import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

const Shop = () => {
    const dispatch = useDispatch();
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 30,
            }}
        >
            <div style={{ display: "flex", alignItems: "center" }}>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => dispatch(actionCreators.decrement(1))}
                >
                    -
                </button>
                <span>Toggle your counter</span>
                <button
                    className="btn btn-primary mx-2"
                    onClick={() => dispatch(actionCreators.increment(1))}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Shop;
