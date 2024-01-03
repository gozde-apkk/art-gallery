

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    return (
      <div className="w-36 border-2 m-4 h-36" >
        <Link to={`/product/id`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img />
              </div>
              <div className="content">
                <div className="header">title</div>
                <div className="meta price">$ price</div>
                <div className="meta">category</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default ProductComponent;