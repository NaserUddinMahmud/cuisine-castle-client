import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';


const Login = () => {

    const{signIn, signInWithGoogle} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleGoogleSignIn = () =>{
      signInWithGoogle()
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
    })
    .catch(error =>{
        console.log(error);
    })
    }

    return (
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Please Login !</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
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
        <div className="form-control mt-6">
          <button className="btn btn-warning">Login</button>
        </div>
        
      </form>
      <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning mx-8">Login with Google </button>
      <p className='px-5 pb-10'>New to CuisineCastle? <Link to='/register' className=" btn-link"> Please register!</Link></p>
    </div>
  </div>
</div>
    );
};

export default Login;