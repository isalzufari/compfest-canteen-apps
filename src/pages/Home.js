import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section>
        <div className='row d-flex justify-content-md-between'>
          <div className='col-12 col-md-6 d-flex align-items-md-center'>
            <div>
              <h5>Kantin Kejujuran</h5>
              <h1>From student to student</h1>
              <br />
              <p>Everyone is free to look around, sell, and buy items there. There is no shopkeeper there so everyone is also free to add or withdraw the money in the box.</p>
            </div>
          </div>
          <div className='col'>
            <img src="https://firebasestorage.googleapis.com/v0/b/compfest-cantent.appspot.com/o/resources%2FCanteensHome.png?alt=media&token=5b0c63e3-ff21-4c6f-8a87-95fc1a63fb7e" className="card-img-top" alt="Logo Brand" />
          </div>
        </div>
      </section>

      <section>
        <div className='row d-flex justify-content-md-between'>
          <div className='col'>
            <img src="https://firebasestorage.googleapis.com/v0/b/compfest-cantent.appspot.com/o/resources%2FCanteensHome1.png?alt=media&token=f1471176-f4d0-4291-9a4a-e832bac48174" className="card-img-top" alt="Logo Brand" />
          </div>
          <div className='col-12 col-md-6 d-flex align-items-md-center'>
            <div>
              <h5>Sell and Buy</h5>
              <p>You can add a new item for sale, you can see all items for sale</p>
              <Link to="store" className='btn btn-outline-success'>Store</Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='row d-flex justify-content-md-between'>
          <div className='col-12 col-md-6 d-flex align-items-md-center'>
            <div>
              <h5>Canteen Balance?</h5>
              <p>You can add the canteen balance. No Maximum is unlimited!</p>
              <p>You can withdraw the canten balance!.</p>
              <Link to="balance" className='btn btn-outline-success'>Balance</Link>
            </div>
          </div>
          <div className='col'>
            <img src="https://firebasestorage.googleapis.com/v0/b/compfest-cantent.appspot.com/o/resources%2FCanteensHome2.png?alt=media&token=778e03b9-cbaa-4589-be65-16df3b302dc2" className="card-img-top" alt="Logo Brand" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
