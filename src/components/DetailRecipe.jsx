import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  addToMenu,
  getRecipeGetById,
  setLoading,
} from "../actions/recipesAction";
import Button from "./Button";
import Swal from "sweetalert2";
import Snipper from "./Snipper";

const DetailRecipe = () => {
  let { id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const { recipeSelect, loading, myMenu } = useSelector(
    (state) => state.RecipesReducer
  );

  const { readyInMinutes, image, title, pricePerServing, healthScore } =
    recipeSelect;

  console.log(recipeSelect);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getRecipeGetById(id));
  }, [dispatch, id]);

  const validateType = () => {
    const notVeganMenues = myMenu.filter((menu) => !menu.vegan);
    const veganMenues = myMenu.filter((menu) => menu.vegan);

    let quantityVegan =
      veganMenues.length === 1 ? veganMenues[0].quantity : veganMenues.length;

    let quantityNotVeganMenues =
      notVeganMenues.length === 1
        ? notVeganMenues[0].quantity
        : notVeganMenues.length;

    if (quantityVegan < 2 && recipeSelect.vegan) {
      return addItem();
    }

    if (quantityNotVeganMenues < 2 && !recipeSelect.vegan) {
      return addItem();
    }

    Swal.fire({
      title: "ya contiene dos tipos ",
      icon: "error",
      timer: 3000,
      button: "Acept",
    });
  };

  const addItem = () => {
    const array = [];

    let x = { ...recipeSelect, quantity: 1 };
    array.push(x);
    let isExist = myMenu.some((elem) => elem.id === recipeSelect.id);

    if (isExist) {
      let recipe = myMenu.filter((elem) => elem.id === recipeSelect.id)[0];
      recipe.quantity = recipe?.quantity + 1;

      dispatch(addToMenu(myMenu));
    }
    Swal.fire({
      title: `${title}`,
      text: "Successfully added to the menu",
      icon: "success",
      timer: 3000,
      button: "Acept",
    });
    !isExist && dispatch(addToMenu([...myMenu, ...array]));
  };

  const validate = () => {
    return myMenu.reduce((total, item) => {
      return (total += item.quantity);
    }, 0) === 4
      ? Swal.fire({
          title: "Your menu contains enough",
          icon: "error",
          timer: 3000,
          button: "Acept",
        })
      : validateType();
  };

  if (loading) return <Snipper />;

  return (
    <div className="container">
      <h3 className="text-center text-white">{title}</h3>
      <div className="row">
        <div className="col-12 card col-md-12 col-lg-6">
          <div className="card">
            <img src={image} alt={title} />
          </div>
        </div>
        <div className="col-12 card col-md-12 col-lg-6">
          <div className="card">
            <ul>
              <li>Dish preparation time: {readyInMinutes} min</li>
              <li>Health score: {healthScore}</li>
              <li>
                Price: <strong>${pricePerServing}</strong>
              </li>
            </ul>
            <Button text={"Add recipe"} color={"secondary"} action={validate} />
            <Button
              text={"Go to back!!"}
              color={"primary"}
              action={history.goBack}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailRecipe;
