import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipes, setLoading } from "../../actions/recipesAction";
import CardsRecipes from "../../components/CardsRecipes";
import styles from "../../styles/Menu.module.css";
import Snipper from "../../components/Snipper";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

const initialPage = 0;

const Menu = () => {
  const dispatch = useDispatch();
  const { recipes, loading } = useSelector((state) => state.RecipesReducer);
  const [page, setPage] = useState(initialPage);

  // console.log(recipes);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getRecipes(page));
  }, [dispatch, page]);

  if (loading) return <Snipper />;

  const nextPage = () => setPage((prevPage) => prevPage + 1);

  const previousPage = () => setPage((prevPage) => prevPage - 1);

  return (
    <Layout id={styles.container}>
      <h1 className="text-center">Menu</h1>
      <div>
        {page > 0 && (
          <Button text="Prev Page" color="secondary" action={previousPage} />
        )}
        <Button text="Next Page" color="secondary" action={nextPage} />
      </div>
      <div className="row g-3">
        {recipes && recipes.map((el) => <CardsRecipes key={el.id} el={el} />)}
      </div>
      {page > 0 && (
        <Button text="Prev Page" color="secondary" action={previousPage} />
      )}
      <Button text="Next Page" color="secondary" action={nextPage} />
    </Layout>
  );
};

export default Menu;
