import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - ${props.price}</h3>
      <p><em>{props.description}</em></p>
      <h4>Quantity-{props.quantity}</h4>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number
};

export default Item;