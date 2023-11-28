import { useNavigate } from 'react-router-dom';
function CartPage(){
    const navigate = useNavigate();
    return(
        <>
       <button onClick={() => navigate('/')}>
Back
</button>
        <h1>Cart Page</h1>
        

</>
    )
}
export default CartPage