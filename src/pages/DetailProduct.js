import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { changeToIdr, showFormattedDate } from '../utils/utils';

const DetailProduct = ({ product, deleteProduct, getProduct }) => {
  let params = useParams();
  let id = params.name;

  useEffect(() => {
    getProduct(id);
  }, [id]);

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
          <p>{changeToIdr(product.price)}</p>
          <p>{showFormattedDate(product.createdAt.seconds)}</p>

          <div className='d-grip gap-2'>
            { 
              localStorage.getItem('isLoggedIn') && 
              <button type='button' onClick={() => deleteProduct(product.id)} className='btn btn-outline-success'>
                Buy
              </button>
            }
            { 
              !localStorage.getItem('isLoggedIn') && 
              <a href='/login' className='btn btn-outline-primary'>
                Login
              </a>
            }
          </div>
        </div>
      </div>
    }
    { 
      product.length === 0 && 
      <div className='row d-flex align-items-center' aria-hidden="true">
        <div className='col-md-6 mb-3 d-flex justify-content-end-md placeholder-glow'>
          <img src="https://dummyimage.com/500x500/cfd0d1/cfd0d1.png" alt={product.name} className='rounded placeholder' height={450} width={400} style={{ objectFit: 'cover',  objectPosition: 'center' }}/>
        </div>

        <div className='col placeholder-glow'>
          <span className='placeholder col-12 placeholder-lg'></span>
          <span className='placeholder col-12'></span>
          <span className='placeholder col-12'></span>
          <span className='placeholder col-12'></span>

          <span href="#" tabIndex="-1" className="btn btn-success disabled placeholder col-6 mt-3"></span>
        </div>
      </div>
    }
    
    </>
  )
}

export default DetailProduct;
