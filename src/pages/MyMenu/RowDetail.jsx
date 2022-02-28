import React from "react";
import { useDispatch } from "react-redux";
import { removeFromMenu } from "../../actions/recipesAction";
import Button from "../../components/Button";

const RowDetail = ({ myMenu }) => {
  console.log(myMenu);
  const dispatch = useDispatch();

  const {
    id,
    image,
    title,
    quantity,
    readyInMinutes,
    pricePerServing,
    healthScore,
  } = myMenu;

  return (
    <tr className="m-2">
      <th scope="row">{id}</th>
      <td>
        <img src={image} alt={title} className="img-fluid" width={250} />
      </td>
      <td>{title} </td>
      <td className="text-center">{quantity} </td>
      <td className="text-center">{readyInMinutes}</td>
      <td className="text-center">{healthScore}</td>
      <td className="text-center">${pricePerServing}</td>
      <td className="text-center">
        {" "}
        <Button
          text="Delete"
          color="primary"
          action={() => {
            dispatch(removeFromMenu(id));
          }}
        />
      </td>
    </tr>
  );
};

export default RowDetail;
