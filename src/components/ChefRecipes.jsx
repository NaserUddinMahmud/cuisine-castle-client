import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Recipe from "./Recipe";

const ChefRecipes = () => {
  const chefDetails = useLoaderData();
  const { name, bio, experience, likes, profilePicture, recipeCount,recipes,index } =
    chefDetails;

    console.log(recipes);
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
    setIsLoading(false);
  },[])
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={profilePicture}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6">{bio}</p>
            <p className="font-bold py-2">Likes: {likes}</p>
            <p className="font-bold py-2">Recipes: {recipeCount}</p>
            <p className="font-bold py-2">Experience: {experience}</p>
            
          </div>
        </div>
      </div>

      <h2 className="text-4xl font-semibold text-center mt-12">Recipes</h2>

      <div>
      {isLoading ? <progress className="progress w-56"></progress> : 

      <div className="flex flex-wrap gap-2 mx-auto my-8 justify-center">
      {recipes.map(recipe=><Recipe
      key={recipe.id}
      recipe={recipe}></Recipe>)}
      </div>}
      </div>
    </div>
  );
};

export default ChefRecipes;
