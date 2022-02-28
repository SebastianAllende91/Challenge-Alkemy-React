import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipesSearch, setLoading } from "../actions/recipesAction";
import CardsRecipes from "./CardsRecipes";
import Layout from "./Layout";
import Snipper from "./Snipper";

const ContainerSearch = () => {
  const dispatch = useDispatch();
  const { loading, recipesSearch } = useSelector(
    (state) => state.RecipesReducer
  );

  const { querySearch } = useParams();
  console.log(querySearch);

  useEffect(() => {
    dispatch(setLoading());
    dispatch(getRecipesSearch(querySearch));
  }, [dispatch, querySearch]);

  if (loading) <Snipper />;

  return (
    <Layout>
      <h1 className="text-center">Your search</h1>
      <div className="row g-3">
        {recipesSearch &&
          recipesSearch.map((el) => <CardsRecipes key={el.id} el={el} />)}
      </div>
    </Layout>
  );
};

export default ContainerSearch;
