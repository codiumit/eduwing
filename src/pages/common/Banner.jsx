import React from "react";

function Banner({ banner, heading, para }) {
  return (
    <>
      <div className="h-[335px] overflow-hidden">
        <img
          src={banner}
          alt="banner"
          className="h-full w-full brightness-[.3]"
        />
        <div className="relative bottom-32 left-32 text-white space-y-3">
          <h1 className="text-2xl font-medium">{heading}</h1>
          <p>{para}</p>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 1990.969 199.999"
      >
        <path
          id="Path_1429"
          data-name="Path 1429"
          d="M1989,503.945s151.723-79.6,430.56-42.07,319.071,68.38,441.574,50.49,227.324-66.923,459.138-50.49,297.743,116.093,454.295,82.055,205.4-101.5,205.4-101.5V350.966H1989Z"
          transform="translate(-1989 -350.966)"
          fill="#d5dbdf"
          opacity="0.5"
        />
      </svg>
    </>
  );
}

export default Banner;
