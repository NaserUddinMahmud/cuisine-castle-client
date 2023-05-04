import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Added to Favorite!');

const Recipe = ({ recipe }) => {
  const { name, ingredients, method, rating } = recipe;
  const listItems = ingredients.map((ingredient) => (
    <li key={ingredient.toString()}>
      <div className="flex items-center">
        <FaAngleRight />
        {ingredient}
      </div>
    </li>
  ));
  const steps = method.split("\n");

  const [isDisabled, setIsDisabled] = useState(false);

  const handleFavorite = () => {
    
    setIsDisabled(true);
    notify()
   
  };
  return (
    <div>

        
        
      <div className="card w-96 h-full bg-base-100 shadow-xl">
        <div className="card-body flex justify-between">
          <div>
            <h2 className="card-title font-bold">{name}</h2>
            <div>
              <p className="font-semibold mt-3 py-2">Ingredients:</p>
              <ul>{listItems}</ul>
            </div>

            <div>
              <ol>
                <p className="font-semibold mt-3 py-2">Steps:</p>
                {steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
          <div className="flex justify-between items-center  bottom-0 py-2">
            <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
            <div className="card-actions justify-end">
              <button onClick={ handleFavorite} disabled={isDisabled} className="btn btn-warning">Favorite</button>
              <Toaster />
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
