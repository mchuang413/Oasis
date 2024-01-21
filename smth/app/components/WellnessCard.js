import Link from "next/link";
import React from "react";
const WellnessCard = ({id, title, desc, img}) => {
  return (
    <div>
      <Link href={`/explore/${id}`}>
        <div className="card bg-base-300 shadow-xl ">
          <figure>
            <img
              src={`/resources/${img}`}
              alt={img}
              className="max-h-60 object-cover mt-6"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {title}
            </h2>
            <p>{desc}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Tags</div>
              <div className="badge badge-outline">Tags</div>
            </div>
          </div>
        </div>
        
      </Link>
    </div>
  );
};

export default WellnessCard;
