import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email, password, photo);
    } 

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Please Register !</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="file" name='photo' className="file-input file-input-warning file-input-bordered w-full max-w-xs" />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-warning">Register</button>
        </div>
      </form>
      <p className='px-5 pb-10'>Already have an account? <Link to='/login' className=" btn-link"> Please login!</Link></p>
    </div>
  </div>
</div>
    );
};

export default Register;