// import { useHistory } from 'react-router-dom'; // Import useHistory for redirection

// export default function CreateOrderF() {
//   const dispatch = useDispatch();
//   const history = useHistory(); // Use the useHistory hook for redirection
//   const cart = useSelector(getCart);
//   const user = useSelector(getUser);
//   const totalCartPrice = useSelector(getTotalPrice);

//   // Your existing code...

//   const onSubmit = async (data) => {
//     console.log(data);
//     // Include the cart data in the order data
//     const orderData = {
//       ...data,
//       cart: cart,
//       totalPrice: data.priority ? totalCartPrice * 0.2 + totalCartPrice : totalCartPrice
//     };

//     try {
//       const newOrder = await createOrder(orderData); // Await the response from createOrder
//       history.push(/order/${newOrder.id}); // Redirect to the new order's page
//     } catch (error) {
//       console.error("Failed to create order:", error);
//       // Handle error (e.g., show an error message)
//     }
//   };

//   // Your Formik setup and form rendering...
// }