import React from 'react'
import { Link } from 'react-router-dom';
import { changeToIdr } from '../utils/utils';

const Card = ({ name, image, price, desc, id }) => {

  return (
    <div className="col-6 col-sm-4 mb-2">
      <div className="card">
        <Link to={"/store/" + id} className="stretched-link">
          <img srcSet={image} className="card-img-top" height={150} width={150} alt={name} style={{ objectFit: 'cover',  objectPosition: 'center' }} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <small className="card-text">{changeToIdr(price)}</small>
          <p className="card-text">{desc.substring(0,20)}...</p>
        </div>
      </div>
    </div>
  )
}

export default Card