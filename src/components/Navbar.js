import React from 'react';

const Navbar = ({ Link }) => {
  return (
    <header className="py-3 mb-3 border-bottom">
      <div className="container d-grid gap-3 align-items-center" style={{ gridTemplateColumns: "1fr 2fr" }}>
        <h4><b>Canteen's & Co</b></h4>

        <div className="d-flex align-items-center">
          <div className="p-2 w-100" role="search">
            <Link to="/" className="m-2 link-dark text-decoration-none">Home</Link>
            <Link to="/store" className="m-2 link-dark text-decoration-none">Store</Link>
            <Link to="/balance" className="m-2 link-dark text-decoration-none">Balance</Link>
            <Link to="/add-product" className="m-2 link-dark text-decoration-none">Add Product</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar