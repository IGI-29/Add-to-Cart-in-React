import React from "react";

export default function Product(props) {
  return (
    <div className="container row mt-4">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary btn-sm">
            ₹{props.product.price}
          </span>
        </h2>
      </div>
      <div className="col-2">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.DecQua(props.index);
            }}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.IncQua(props.index);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        {props.product.price * props.product.quantity}
      </div>
      <button
        type="button"
        className="btn btn-danger btn-sm col-1 mb-4"
        onClick={() => {
          props.removeItem(props.index);
        }}
      >
        Remove
      </button>
    </div>
  );
}
