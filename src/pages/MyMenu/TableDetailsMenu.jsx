import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2";
import { cleanMenu } from "../../actions/recipesAction";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import { useTotals } from "../../hooks/useTotals";
import RowDetail from "./RowDetail";

const TableDetailsMenu = () => {
  const { myMenu } = useSelector((state) => state.RecipesReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const { totalMenu, averageHealthScore, averageReadyInMinutesa } =
    useTotals(myMenu);

  const goToMenu = history.goBack;

  return (
    <Layout>
      <h1>My Order: </h1>
      {myMenu.length > 0 ? (
        <div>
          <h4 className="text-white">
            Average Health Score : {averageHealthScore}
          </h4>
          <h4 className="text-white">
            Average Ready In Minutes : {averageReadyInMinutesa} minutes
          </h4>
          <h3 className="text-white">Total:$ {totalMenu}</h3>
        </div>
      ) : (
        <div className="alert alert-warning mt-5 p-5 text-center" role="alert">
          <p> You have no recipe selected!!!</p>
        </div>
      )}
      <div className="table-responsive col-lg-12 ">
        <table className="table table-success table-striped">
          {myMenu.length > 0 && (
            <thead>
              <tr>
                <th className="text-center" scope="col">
                  N° Order
                </th>
                <th className="text-center" scope="col">
                  Recipe
                </th>
                <th className="text-center" scope="col">
                  Name
                </th>
                <th className="text-center" scope="col">
                  Cantidad
                </th>
                <th className="text-center" scope="col">
                  Preparation time
                </th>
                <th className="text-center" scope="col">
                  Health score
                </th>
                <th className="text-center" scope="col">
                  Precio
                </th>
                <th className="text-center" scope="col">
                  Action
                </th>
              </tr>
            </thead>
          )}
          <tbody>
            {myMenu.length > 0 &&
              myMenu.map((item) => <RowDetail key={item.id} myMenu={item} />)}
          </tbody>
        </table>
        {myMenu.length > 0 && (
          <div>
            <Button
              text="Confirm Menu"
              color="secondary"
              action={() =>
                Swal.fire({
                  title: "Order in process",
                  icon: "success",
                  timer: "3000",
                })
              }
            />
            <Button
              text="Delete Menu"
              color="secondary"
              action={() => {
                dispatch(cleanMenu());
              }}
            />
            <Button
              text={"Go to Back!!"}
              color={"secondary"}
              action={goToMenu}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default TableDetailsMenu;
