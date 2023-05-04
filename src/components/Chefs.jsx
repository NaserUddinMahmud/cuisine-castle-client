import React from "react";
import { useNavigate } from "react-router-dom";

const Chefs = ({ chef }) => {
  const { name, bio, experience, likes, profilePicture, recipeCount,id } = chef;
  console.log(chef);

  const navigate = useNavigate();
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src={profilePicture}
            alt="Chefs"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Experience: {experience}</p>
          <p>Recipes: {recipeCount}</p>
          <p>Likes: {likes}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>navigate(`/chefrecipes/${id}`)}  className="btn btn-warning">View Recipes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
