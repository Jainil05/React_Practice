import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <>
      <div className="card">
          {/* <div className="">
            <div className="top">
              <img
                src="https://clipartcraft.com/images/amazon-logo-transparent-circle.png"
                alt="Brand_logo"
              />
              <button>
                Save <Bookmark size={14} />
              </button>
            </div>
            <div className="center">
              <h3>
                Amazon <span>5 days go</span>
              </h3>
              <h2>Senoir UI/Ux designer</h2>
              <div className="tag">
                <h4>Part-Time</h4>
                <h4>Senior level</h4>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="">
              <h3>$120/hr</h3>
              <p>Mumbai,india</p>
            </div>

            <button>Apply Now</button>
          </div> */}
           <div className="">
            <div className="top">
              <img
                src={props.imgurl}
                alt={props.imgalt}
              />
              <button>
                Save <Bookmark size={14} />
              </button>
            </div>
            <div className="center">
              <h3>
                {props.companyname} <span>{props.dateposted}</span>
              </h3>
              <h2>{props.position}</h2>
              <div className="tag">
                <h4>{props.servicetype}</h4>
                <h4>{props.lavel}</h4>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="">
              <h3>{props.salary}</h3>
              <p>{props.location}</p>
            </div>

            <button>Apply Now</button>
          </div>
        </div>
    </>
  );
};

export default Card;
