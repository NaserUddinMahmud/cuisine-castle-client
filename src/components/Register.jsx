import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';

const notify = () => toast.success('Registration Successful!');
const Register = () => {
  const [error, setError] = useState('');
  
    const {user, createUser} = useContext(AuthContext)

    console.log(createUser);
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name,email, password, photo);
        setError('');
        if(password.length < 6){
          setError('Password must be 6 characters or longer');
          return
        }
        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            updateUserData(result.user, name,photo);
            notify();
            
        })
        .catch(error =>{
            console.log(error);
            setError(error.message);
        })
    } 

    const updateUserData = (user, name, photo) =>{
      updateProfile(user,{
        displayName: name , photoURL: photo
      })
      .then(() =>{
        console.log('user profile updated')
      })
      .catch(error=>{
        setError(error.message)
      })
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
          
          
          
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' className="file-input file-input-warning file-input-bordered w-full max-w-xs px-5" />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-warning">Register</button>
          <Toaster />
        </div>
      </form>
      <p className='text-red-600 px-5'>{error}</p>
      <p className='px-5 pb-10'>Already have an account? <Link to='/login' className=" btn-link"> Please login!</Link></p>
    </div>
  </div>
</div>
    );
};

export default Register;