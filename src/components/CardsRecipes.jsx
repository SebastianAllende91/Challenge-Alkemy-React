import React from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/CardsRecipes.module.css";
import Button from "./Button";

const CardsRecipes = ({ el }) => {
  const { id, image, title } = el;

  const newtitle = title.substring(0, 48);

  const history = useHistory();

  const viewRepice = useCallback(() => {
    history.push(`/App/view/${id}`);
  }, [history, id]);

  return (
    <div className="col-12 col-md-6 col-lg-4" id={styles.container}>
      <div className="card">
        <img src={image} alt={title} width={"100%"} className="p-2" />
        <div className="card-body">
          <h6 className="card-title text-center">
            <i>{title.length > 48 ? newtitle : title}</i>
          </h6>
          <Button
            text={"View recipe"}
            color={"secondary"}
            action={viewRepice}
          />
        </div>
      </div>
    </div>
  );
};

export default CardsRecipes;
