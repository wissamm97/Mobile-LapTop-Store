import { Container, Table, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromCart } from "../redux/Slices/cart-slice";

function Cart(){
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const totalPrice = cart.reduce((acc,produce) => {
        acc += produce.price * produce.quantity;
        return acc;
    }, 0) 
    return(
        <Container className="py-5 my-1">
            <h1>Welcome To Cart</h1>
            <Button variant="primary" className="mb-2" onClick={() => dispatch(clear())}>Clear</Button>
            <h5>Total Price: {totalPrice.toFixed(2)} $</h5>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Img</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((prod) => (
                    <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.title}</td>
                    <td style={{textAlign: 'center', padding: '0'}}><Image src={prod.image} alt="" style={{width: "100%", height: "100px"}}/></td>
                    <td>{prod.price} $</td>
                    <td>{prod.quantity}</td>
                    <td><button type="button" className="btn btn-outline-danger" style={{width: '99%'}} onClick={() => dispatch(deleteFromCart(prod))}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-x mb-1" viewBox="0 0 16 16">
                    <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> Button </button>
                    </td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
export default Cart