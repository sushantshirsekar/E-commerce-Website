import { Button, Card, CardImg } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { cartActions } from "../store/cart-slice";

const ItemDetails = (props) => {
  const params = useParams();
  const listData = useSelector((state) => state.admin.itemList);
  const dispatch = useDispatch(); 

  console.log(params.itemId);
  

  const addToCartHandler = (data) => {
    dispatch(cartActions.addItem(data)); 
    
  };
  return (
    <>
      {listData.map((item) => {
        return (
          <div className="d-flex">
            <Card className="bg-dark text-white m-5">
              <CardImg
                src={item.imageUrl}
                alt="Card image"
                style={{ height: "500px", width: "750px" }}
              />
            </Card>
            <Card className="bg-dark m-5 border-dark">
              <Card.Title style={{ color: "white", fontSize: "1.5rem" }}>
                {item.title}
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                {item.description}
              </Card.Text>
              <Card.Text style={{ color: "white", fontSize: "2rem" }}>
                ₹ {item.price}
              </Card.Text>

              <Button
                className="bg-secondary border-dark"
                style={{ color: "white" }}
                onClick={()=> addToCartHandler(item)}
              >
                Add to Cart
              </Button>
            </Card>
          </div>
        );
      })}
    </>
  );
};
export default ItemDetails;
