import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const DetailProduct = ({ product, deleteProduct, getProduct }) => {
  let params = useParams();
  let id = params.name;

  useEffect(() => {
    getProduct(id);
  }, [id]);

  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    }
    return new Date(date * 1000).toLocaleDateString("id-ID", options)
  }

  return (
    <>
    {
      product.length !== 0 &&
      <div className='row d-flex align-items-center'>
        <div className='col-md-6 mb-3 d-flex justify-content-end-md'>
          <img src={product.image} alt={product.name} className='rounded' height={450} width={400} style={{ objectFit: 'cover',  objectPosition: 'center' }}/>
        </div>

        <div className='col'>
          <h1>{product.name}</h1>
          <p>{product.desc}</p>
          <p>{product.price}</p>
          <p>{showFormattedDate(product.createdAt.seconds)}</p>

          <div className='d-grip gap-2'>
            <button type='button' onClick={() => deleteProduct(product.id)} className='btn btn-outline-success'>
              Buy
            </button>
          </div>
        </div>
      </div>
    }
    
    </>
  )
}

export default DetailProduct;
