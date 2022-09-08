import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.itemList.map((item) =>
      <Item name={item.name}
        price={item.price}
        description={item.description}
        quantity={item.quantity}
        id ={item.id}
        key={item.id}/>
      )}
    </React.Fragment>
  );
}
ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemList;