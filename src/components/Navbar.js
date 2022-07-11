import React from 'react';

const Navbar = ({ Link, onlogOut }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  return (
    <header className="py-3 mb-3 border-bottom">
      <div className="container d-grid gap-3 align-items-center" style={{ gridTemplateColumns: "1fr 2fr" }}>
        <h4><b>Canteent</b></h4>

        <div className="d-flex align-items-center">
          <div className="p-2 w-100" role="search">
            <Link to="/" className="m-2 link-dark text-decoration-none">Home</Link>
            <Link to="/store" className="m-2 link-dark text-decoration-none">Store</Link>
            { isLoggedIn && <Link to="/balance" className="m-2 link-dark text-decoration-none">Balance</Link>}
          </div>
          { isLoggedIn &&
            <>
              <div className="p-2 flex-shrink-1 dropdown">
                <a href="/#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://dummyimage.com/50x50/000/ffffff.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                  <li><Link className="dropdown-item" to="/add-product">Add Product</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" onClick={onlogOut}>Sign out</a></li>
                </ul>
              </div>
              <p className="m-2">{JSON.parse(isLoggedIn).nameProfile}</p>
           </>
          }

          { !isLoggedIn &&
            <>
              <p className="m-2"><Link to="login" className="text-dark text-decoration-none" style={{ cursor: "pointer" }}>Login</Link></p>
              <p className="m-2"><Link to="register" className="btn btn-outline-success" style={{ cursor: "pointer" }}>Register</Link></p>
            </>
          }
          
        </div>
      </div>
    </header>
  )
}

export default Navbar