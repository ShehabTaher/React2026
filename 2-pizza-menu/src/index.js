import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Static menu data — immutable, only read and displayed in this app
const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
]

// Root component — wraps Header, Menu, and Footer in the page layout
function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

// Page header — displays the restaurant title
function Header() {
  return (
    <header className='header'>
      <h1 className='header-title'>Fast React Pizza Co.</h1>
    </header>
  )
}

// Menu section — maps pizza data into a list or shows an empty state
function Menu() {
  const pizzas = pizzaData
  const pizzasCount = pizzas.length

  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {pizzasCount > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza pizza={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later.</p>
      )}
    </main>
  )
}

// Single pizza card — image, name, ingredients, price, and availability
function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={pizza.photoName} alt={pizza.name} className='pizza-img' />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'Sold Out' : `${pizza.price}$`}</span>
      </div>
      {/* {pizza.soldOut ? <p>Sold Out</p> : <p>Available</p>} */}
    </li>
  )
}

// Footer — checks current hour and shows open or closed message
function Footer() {
  const hour = new Date().getHours()
  const openHour = 7
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're currently closed. Please come back between {openHour}:00 and{' '}
          {closeHour}:00.
        </p>
      )}
    </footer>
  )
}

// Order prompt — hours info and order button, shown when the shop is open
function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>
        We are open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online.
      </p>
      <button className='btn'>Order</button>
    </div>
  )
}

// Entry point — mounts App into the DOM using React 18 createRoot
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
