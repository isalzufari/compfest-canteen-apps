import React from 'react';
import Card from '../components/Card';

const Home = () => {
  return (
    <>
      <div className="d-block">
        <div className="container d-inline-flex justify-content-between">
          <div className="d-block w-50">
            <h5>Kantin Kejujuran</h5>
            <h1>From student to student</h1>
            <br />
            <p>Everyone is free to look around, sell, and buy items there. There is no shopkeeper there so everyone is also free to add or withdraw the money in the box.</p>
          </div>
          <div className="card" style={{ width: '16rem' }}>
            <img src="https://dummyimage.com/500x500/000/ffffff.png" className="card-img-top" alt="..." />
          </div>
        </div>

        {/* Pengrajin Section */}
        <div className="container d-inline-flex mt-5 justify-content-between">
          <h3>Store</h3>
          <a style={{ cursor: "pointer", textDecoration: "none" }} className="text-success" href="/store"><h5 style={{ cursor: "pointer" }} className="text-success cursor-pointer">Lihat Semua</h5></a>
        </div>
        <div className="container">
          <div className="row">
            {/* {dataPengrajin.map((val, id) => {
              return (
                <div className="col-sm-3">
                  <CardUser name={val.nama} kota={val.kota} />
                </div>
              )
            })} */}
              {/* <Card /> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home