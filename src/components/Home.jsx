import React, { useEffect, useState } from "react";
import Chefs from "./chefs";

const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(()=>{
    fetch('https://assignment-10-cuisine-castle-server-naseruddinmahmud.vercel.app/chefs')
    .then(res => res.json())
    .then(data => setChefs(data))
    .catch(error => console.error(error))
  }, [])
console.log(chefs);
  return (
    <>
      {/* Banner Section */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">All Things Thai</h1>
            <p className="mb-5">
              Satisfy Your Thai Food Cravings at Home With Original Local
              Recipes.
            </p>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
      {/* Chef section */}


      <h2 className="text-5xl font-semibold text-center mt-12">Our Chefs</h2>

     <div className="flex flex-wrap gap-2 mx-auto my-8 justify-center">
     {
        chefs.map(chef =><Chefs
        key={chef.id}
        chef={chef}
        ></Chefs>)
      }
     </div>

      

      {/* Subscription section */}

      <div className="hero min-h-screen bg-base-200 mt-16 py-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Live Cooking Classes Weekly!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-warning">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Categories section */}

      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Popular Categories</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
  </div>
</div>

      <div className="flex flex-wrap justify-center max-w-screen-2xl -mt-32 mb-16" >
        
        <div className=" mx-10 mb-10" >
          <div className="w-52 h-52 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2 text-2xl text-white flex items-center justify-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1580554530778-ca36943938b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80")` }}>
            <p>Main Dish</p>
          </div>
        </div>

        <div className=" mx-10 mb-10" >
          <div className="w-52 h-52 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2 text-2xl text-white flex items-center justify-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1527751171053-6ac5ec50000b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
            <p>Appetizers</p>
          </div>
        </div>

        <div className=" mx-10 mb-10" >
          <div className="w-52 h-52 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2 text-2xl text-white flex items-center justify-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80")` }}>
            <p>Drink Recipes
</p>
          </div>
        </div>

        <button className=" mx-10 mb-10" >
          <div className="w-52 h-52 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2 text-2xl text-white flex items-center justify-center" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
            <p>Breakfast</p>
          </div>
        </button>

       

        
      </div>
    </>
  );
};

export default Home;
