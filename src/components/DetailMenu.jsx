import React from "react";
import { useDispatch } from "react-redux";
import { removeFromMenu } from "../actions/recipesAction";
import Button from "./Button";

const DetailMenu = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="col-12 bg-white m-2">
      <div className="row">
        <div className="col-6">
          <img src={item.image} alt={item.tile} width="100%" />
        </div>
        <div className="col-6">
          <h4>Pedido: {item.title}</h4>
          <h4>Cantidad: {item.quantity}</h4>
          <h4>Precio: ${item.pricePerServing}</h4>
          <h5>Dish preparation time:{item.readyInMinutes} min</h5>
          <h5>Health score: {item.healthScore}</h5>

          <Button
            text="Delete Recipe"
            color="primary"
            action={() => {
              dispatch(removeFromMenu(item.id));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailMenu;
