import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT } from "./Store/constants.js";
import { DELETE_PRODUCT } from "./Store/constants.js";
import { productAction } from "./Store/productAction.js";

export default function Product() {
  const dispatch = useDispatch();

  const productId = useSelector((state) => state.productId);

  const onAddButtonClick = () => {
    console.log("on Add button click");
    dispatch(productAction(ADD_PRODUCT, 12));
    dispatch(productAction(ADD_PRODUCT, 14));
    dispatch(productAction(ADD_PRODUCT, 16));
  };

  const onDeleteButtonClick = () => {
    console.log("on Delete button click");
    dispatch(productAction(DELETE_PRODUCT, 12));
    dispatch(productAction(DELETE_PRODUCT, 16));
  };
  return (
    <div>
      <h1>This is a Product Component</h1>
      <button onClick={onAddButtonClick}>Add Button</button>
      <button onClick={onDeleteButtonClick}>Delete Button</button>
      {productId.map((id) => {
        return (
          <>
            <h1>{id}</h1>
          </>
        );
      })}
    </div>
  );
}
