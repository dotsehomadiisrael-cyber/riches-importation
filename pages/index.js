import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);

  const deliveryFee = 50;

  const products = [
    { id: 1, name: "Luxury Watch", price: 300, category: "watches" },
    { id: 2, name: "Men's Sneakers", price: 250, category: "shoes" },
    { id: 3, name: "Ladies Dress", price: 150, category: "clothes" },
    { id: 4, name: "Leather Bag", price: 200, category: "bags" },
    { id: 5, name: "Belt", price: 50, category: "accessories" },
    { id: 6, name: "Power Bank", price: 80, category: "electronics" },
    { id: 7, name: "Wi-Fi Router", price: 120, category: "electronics" }
  ];

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) =>
    setCart(cart.filter((item) => item.id !== id));

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (!customerName || !phoneNumber) {
      alert("Please enter your name and phone number");
      return;
    }
    setShowCheckout(true);
  };

  return (
    <div style={{ background: "#000", color: "#FFD700", minHeight: "100vh", padding: 20 }}>
      <h1 style={{ textAlign: "center" }}>Riches Importation</h1>
      <h3 style={{ textAlign: "center" }}>Gold & Black Online Store</h3>

      <div>
        <h2>Products</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
          {products.map((p) => (
            <div key={p.id} style={{ border: "1px solid #FFD700", padding: 10, width: "45%" }}>
              <h3>{p.name}</h3>
              <p>Price: GHC {p.price}</p>
              <button onClick={() => addToCart(p)} style={{ background: "#FFD700", color: "#000", border: "none", padding: "5px 10px" }}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        <h2>Cart</h2>
        {cart.length === 0 ? <p>No items in cart</p> : null}
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>
              {item.name} - GHC {item.price}{" "}
              <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: 10 }}>Remove</button>
            </li>
          ))}
        </ul>
        {cart.length > 0 && (
          <p>Total: GHC {total + deliveryFee} (including
