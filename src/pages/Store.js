import React, { useEffect, useState } from 'react';
import Card from '../components/Card';

const Store = ({ products, getProducts }) => {

  const [field, setField] = useState("name");
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    getProducts(field, order);
  }, [field, order]);

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h3>Store</h3>
        <form>
          <div className='row'>
            <div className='col'>
              <select value={field} onChange={(e) => setField(e.target.value)} className="form-select" aria-label="Default select example">
                <option value="name">Nama</option>
                <option value="createdAt">Tanggal</option>
              </select>
            </div>
            <div className='col'>
              <select value={order} onChange={(e) => setOrder(e.target.value)} className="form-select" aria-label="Default select example">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className='row'>
        {
          products.map((product) => (
            <Card 
              key={product.id}
              {...product}
            />
          ))
        }
        {
          products.length === 0 &&
          <p className='text-center'>Produk Kosong!</p>
        }
      </div>
    </>
  )
}

export default Store;
