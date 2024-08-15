import React from 'react';

const NewArrivalGlasses = ( { data } ) => {
  return (
    <div className=' newArrival'>
      <div className='mx-w newArrivalGlasses'>
        <div className='head-line'>
          <div className='title'>  {data.title } </div>
          <div className='subTitle'> { data.subTitle } </div>
        </div>
          <div className='sunglasses'>
            { data.sunGlass.map( (el, i) => {
          return (
            <div className='sunglass' key={i}>
                {
                  (el.discountPercentage)? <div className='discount'> { el.discountPercentage } </div> :
                    <div className='dis'> { el.discountPercentage } </div>
                }
                
                <div className='glassContents'>
                    <div>
                        <img className='glass' src={el.img} alt={el.categoryTitle}/>
                    </div>
                    <div className='glassInfo'>
                        <div className='ellipse'>
                            <div className='ellipse1'> <div className='cir'></div> </div>
                            <div className='ellipse1 ellipse2'> <div className='cir'></div> </div>
                            <div className='ellipse1 ellipse3'> <div className='cir'></div>  </div>
                        </div>
                        <div className='title'> { el.categoryTitle } </div>
                        <div className='price'>
                            { el.price.newPrice }  <span>{ el.price.oldPrice }</span>
                        </div>
                    </div>
                    <div className='icons'>
                        <img src = { el.icons.searchIconUrl }  alt="Search Icon" />
                        <img src = { el.icons.loveIconUrl }  alt="Love Icon" />
                        <img src = { el.icons.cartIconUrl }  alt="Cart Icon" />
                    </div>
                </div>
                
            </div>
            );
          })}
          </div>
      </div>
    </div>
  );
}

export default NewArrivalGlasses;
