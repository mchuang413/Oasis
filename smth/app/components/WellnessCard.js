import Link from "next/link";
import React from "react";
const WellnessCard = ({id, website, title, desc, img, tag}) => {
  return (
    <div>
      <Link href={`/explore/${id}`}>
        <div className="card bg-base-300 shadow-xl">
          <figure>
            <img
              src={`/resources/${img}`}
              alt={img}
              className="h-60 w-80 object-cover mt-6 rounded-lg"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
             {title}
            </h2>
            <p>{desc}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{tag}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default WellnessCard;
