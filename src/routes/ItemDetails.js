import { Button, Card, CardImg } from "react-bootstrap";

import { useParams } from "react-router-dom";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const ItemDetails = () => {
  const params = useParams();
  let datactx = useContext(CartContext);
  let items = datactx.products;

  let index = items.findIndex(
    (item) => Number(item.id) === Number(params.itemId)
  );

  const addToCartHandler = () => {
    return datactx.addItem(items[index]);
  };
  return (
    <div className="d-flex">
      {" "}
      <Card className="bg-dark text-white m-5">
        <CardImg
          src={items[index].imageUrl}
          alt="Card image"
          style={{ height: "500px", width: "500px" }}
        />
      </Card>
      <Card className="bg-dark m-5 border-dark">
        <Card.Title style={{ color: "white",fontSize:'1.5rem'}}>{items[index].title}</Card.Title>
        <Card.Text style={{ color: "white" }}>
          {items[index].description}
        </Card.Text>
        <Card.Text style={{ color: "white",fontSize:'2rem' }}>${items[index].price}</Card.Text>


        <Button
          className="bg-secondary border-dark"
          style={{ color: "white" }}
          onClick={addToCartHandler}
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};
export default ItemDetails;
