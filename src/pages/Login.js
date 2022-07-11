import React, { useState } from 'react';

const Login = ({ Link, onLogin }) => {
  const [formData, setFormData] = useState({
    studentId: '',
    nameStud: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onLogin(formData);

    setFormData({
      studentId: '',
      password: '',
    });
  }

  return (
    <section className='text-center' style={{ width: "100%", maxWidth: "330px", padding: "15px", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <img className="mb-4" src="/logo192.png" alt="" height="77" />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating mb-3">
            <input min={0} max={999} required value={formData.studentId} onChange={(e) => setFormData({...formData, studentId: e.target.value})} type="number" className="form-control" id="floatingInput" placeholder="name@example.com" />
              <label htmlFor="floatingInput">Student ID</label>
          </div>
          <div className="form-floating mb-3">
            <input autoComplete='new-password' required value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">Belum punya akun? <Link to='/register' className='text-muted text-decoration-none'>Register</Link> </p>
      </form>
    </section>
  )
}

export default Login;
