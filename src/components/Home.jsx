import React from "react";

const Home = () => {
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
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/* Chef section */}

      <div className="flex flex-wrap gap-2 mx-auto my-16 justify-center">


        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://prod-media-eng.dhakatribune.com/uploads/2019/11/amari-dhaka-1573659760958.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://prod-media-eng.dhakatribune.com/uploads/2019/11/amari-dhaka-1573659760958.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://prod-media-eng.dhakatribune.com/uploads/2019/11/amari-dhaka-1573659760958.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://prod-media-eng.dhakatribune.com/uploads/2019/11/amari-dhaka-1573659760958.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://prod-media-eng.dhakatribune.com/uploads/2019/11/amari-dhaka-1573659760958.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://prod-media-eng.dhakatribune.com/uploads/2019/11/amari-dhaka-1573659760958.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>


      </div>
    </>
  );
};

export default Home;
