import React from "react";
import './red.css'
import { Link } from 'react-router-dom';

const Red = () => {
    return (
        <div className="full">
        <div className="both">
            <div className="red">
                <span><Link to={"/redreadmore"}>READ MORE</Link></span>
            </div>
            <div className="black">

            </div>
        </div>
          <div className="both2">
          <div className="green">
              <span><Link to={"/greenrm"}>READ MORE</Link></span>
          </div>
          <div className="blue">
              <span><Link to={"/bluerm"}>READ MORE</Link></span>
          </div>
      </div>
      </div>
    );
}
export default Red;