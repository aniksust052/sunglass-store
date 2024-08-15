import React from 'react';

const Hero = ( {data} ) => {
  return (
    <div className="bg herSection" style={{ backgroundImage: `url(${data.img})` }}>
      <div className='mx-w hero'>
        <div className="contents">
          <div className="subTitle"> {data.subTitle} </div>
          <div className="title"> {data.title} </div>
          <a href= {data.btnUrl} className = " btn shopNowHeroSec" > {data.btnText} </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
