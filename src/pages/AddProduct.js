import React, { useState } from 'react';

const AddProduct = ({ addProduct, percentUp }) => {

  const [formData, setFormData] = useState({
    nameProduct: '',
    image: '',
    desc: '',
    price: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProduct(formData);
    
    document.getElementById('formImage').value = '';
    
    setFormData({
      nameProduct: '',
      image: '',
      desc: '',
      price: '',
    });
  }

  return (
    <>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="judulForm" className="form-label"><b>Nama</b></label>
                  <input type="text" className="form-control" id="judulForm" placeholder="Nama" accept="/image/*" value={formData.nameProduct} onChange={(e) => setFormData({...formData, nameProduct: e.target.value})} required disabled={percentUp > 0} />
                </div>
                <div className="mb-3">
                  <label htmlFor="formImage" className="form-label"><b>Gambar</b></label>
                  <input className="form-control" type="file" id="formImage" onChange={(e) => setFormData({...formData, image: e.target.files[0]})} required disabled={percentUp > 0} />
                </div>
                <div className="mb-3">
                  <label htmlFor="deskForm" className="form-label"><b>Deskripsi</b></label>
                  <textarea className="form-control" id="deskForm" rows="3" value={formData.desc} onChange={(e) => setFormData({...formData, desc: e.target.value})} required disabled={percentUp > 0} ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="priceForm" className="form-label"><b>Harga</b></label>
                  <input min={0} max={500000} type="number" className="form-control" id="priceForm" placeholder="Harga" value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} required disabled={percentUp > 0} />
                </div>
                <div className='row'>
                  <div className='col'>
                    <div className="d-grid">
                      <button className="btn btn-outline-secondary" type="button" >Batalkan</button>
                    </div>
                  </div>
                  <div className='col'>
                    <div className="d-grid">
                      <button className="btn btn-success" type="submit" disabled={percentUp > 0}>
                        {percentUp > 0 &&
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        }
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddProduct;
