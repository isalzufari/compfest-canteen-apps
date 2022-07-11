import React, { useState, useEffect } from 'react';
import { changeToIdr } from '../utils/utils';

const CanteenBalance = ({ balance, getBalance, addBalance, withdrawBalance }) => {
  const [add, setAdd] = useState(0);
  const [withDraw, setWithDraw] = useState(0);

  useEffect(() => {
    getBalance()
  }, []);  

  const handleSubmitAdd = async (e) => {
    e.preventDefault();
    if (add !== 0) {
      await addBalance(add);
      getBalance();
      setAdd(0);
    } else {
      alert('Kosong')
    }
  }

  const handleSubmitWithdraw = async (e) => {
    e.preventDefault();
    await withdrawBalance(withDraw);
    getBalance();
    setWithDraw(0);
  }

  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h3 className='text-center'>Canteen Balance</h3>
        <h6 className='d-flex align-items-center'>{changeToIdr(balance)}</h6>
      </div>

      <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <form onSubmit={handleSubmitAdd}>
                  <div className="mb-3">
                    <label htmlFor="judulForm" className="form-label"><b>Add</b></label>
                    <input required type="number" className="form-control" id="judulForm" placeholder="Add Balance" value={add} onChange={(e) => setAdd(e.target.value)} />
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <div className="d-grid">
                        <button className="btn btn-outline-secondary" type="button">Batalkan</button>
                      </div>
                    </div>
                    <div className='col'>
                      <div className="d-grid">
                        <button className="btn btn-success" type="submit">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <form onSubmit={handleSubmitWithdraw}>
                  <div className="mb-3">
                    <label htmlFor="judulForm" className="form-label"><b>Withdraw</b></label>
                    <input required max={balance} type="number" className="form-control" id="judulForm" placeholder="Add Balance" value={withDraw} onChange={(e) => setWithDraw(e.target.value)} />
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <div className="d-grid">
                        <button className="btn btn-outline-secondary" type="button">Batalkan</button>
                      </div>
                    </div>
                    <div className='col'>
                      <div className="d-grid">
                        <button className="btn btn-success" type="submit">
                          Withdraw
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

export default CanteenBalance;
