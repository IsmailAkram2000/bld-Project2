import React, { useState, useEffect, useContext } from "react";
import { CourseDataContext } from "../../Context/contextCourseData";
import "../../Styles/Course/header.css";

function Header() {
  const data = useContext(CourseDataContext).data;

  const [height, setHeight] = useState(0);

  const handleScroll = () => {
    const curHeight = window.pageYOffset;
    setHeight(curHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="header-aside">
        <div className="text-container">
          <p className="header-link">
            <a>
              Development <span>&gt;</span>{" "}
            </a>
          </p>
          <p className="header-link">
            <a>
              Programming Languages <span>&gt;</span>{" "}
            </a>
          </p>
          <p className="header-link">
            <a>Python</a>
          </p>
        </div>

        <div className="header-image">
          <img
            src="https://i.udemycdn.com/course/480x270/394676_ce3d_3.jpg"
            alt="Course Image"
          />
        </div>

        <div className="header-text">
          <h1>{data?.courseName}</h1>
          <p>{data?.CouseTitle}</p>
        </div>

        <div className="rating">
          <p className="rating-points">4.4 &nbsp;</p>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half"></i>
          <p className="header-link pa">
            <a>({data?.ratings} ratings)</a>
          </p>
          <p>&nbsp; {data?.students} students</p>
        </div>

        <div className="d-flex">
          <p className="rp">Created by &nbsp;</p>
          <a className="header-link">Avinash Jain, </a>
          <p>&nbsp;</p>
          <a className="header-link">The Codex </a>
        </div>

        <div className="updated d-flex">
          <p className="rp">Last updated 9/2015 &nbsp;</p>
          <p className="rp">English &nbsp; &nbsp;</p>
          <p className="rp">English</p>
        </div>

        <div className="price">
          <h2>{data?.price}</h2>
          <button className="add d-block">Add to cart</button>
          <p className="as-p">30-Day Money-Back Guarantee</p>
          <p className="as-p">Full lifetime access</p>
        </div>

        <div className="share-sm">
          <div className="d-flex share">
            <a>Share</a>
            <a>Gift this course</a>
            <a>Apply Coupon</a>
          </div>
        </div>
      </div>

      <aside className={height < 300 ? "aside" : "headerFixed"}>
        <div className="w-100 header-img">
          <img
            src="https://i.udemycdn.com/course/480x270/394676_ce3d_3.jpg"
            alt="Course Image"
            className={height < 300 ? "header-img" : "header-image"}
          />
        </div>
        <h2 className="m-3 ">{data?.price}</h2>
        <button className="add d-block">Add to cart</button>
        <button className="buy d-block">Buy now</button>
        <p className="as-p">30-Day Money-Back Guarantee</p>
        <h4>This course includes:</h4>
        <div className="details">
          <p>* &nbsp; 14 hours on-demand video</p>
          <p>* &nbsp; 1 article</p>
          <p>* &nbsp; 3 downloadable resources</p>
          <p>* &nbsp; Full lifetime access</p>
          <p>* &nbsp; Access on mobile and TV</p>
          <p>* &nbsp; Certificate of completion</p>
        </div>

        <div className="d-flex share">
          <a>Share</a>
          <a>Gift this course</a>
          <a>Apply Coupon</a>
        </div>

        <hr />

        <div className="trainging">
          <h6>Training 5 or more people?</h6>
          <p>
            Get your team access to 17,000+ top Udemy courses anytime, anywhere.
          </p>
        </div>

        <button className="try">Try Udemy Business</button>
      </aside>
    </header>
  );
}

export default Header;
