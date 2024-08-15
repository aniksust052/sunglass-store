import React from 'react';

const Banner = ( {data} ) => {
  return (
    <div className = "banner">
      <img src = { data.img } className = "img100" alt="Banner" />
    </div>
  );
}

export default Banner;
