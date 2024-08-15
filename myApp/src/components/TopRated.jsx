import React from 'react';

const TopRated = ( { data } ) => {
	return (
		<div className = 'mx-w top-rated'>
			<div className='head-line'>
                <div className='title'>  {data.title } </div>
                <div className='subTitle'> { data.subTitle } </div>
            </div>
            <div className='content'>
                <div className='bg sale' style= {{backgroundImage : `url(${data.discount.img})`}}>
                    <div className='discount-info'>
                        <div className='onwhich'> { data.discount.onWhich } </div>
                        <div className='percent'> { data.discount.percent } </div>
                        <div className='txt'> { data.discount.txt } </div>
                        <a className='btn' href="#"> { data.buttonTxt } </a>
                    </div>
                </div>
                {
                    data.glasses.images.map( (el, i) => {
                        return (
                            <div className='glasss' key = {i}>
                                <div className='image'>
                                    <img className='glassimg' src= { el } alt= {data.discount.percent} />
                                    <div className='ellipse'>
                                        <div className='ellipse1'> <div className='cir'></div> </div>
                                        <div className='ellipse1 ellipse2'> <div className='cir'></div> </div>
                                        <div className='ellipse1 ellipse3'> <div className='cir'></div>  </div>
                                    </div>
                                </div>
                                <div className='info'>
                                    <img src= {data.glasses.rating} alt="" />
                                    <div className='title'> {data.glasses.categoryTitle} </div>
                                    <div className='price'> { data.glasses.price.newPrice }  <span> { data.glasses.price.oldPrice } </span></div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
		</div>
	);
};

export default TopRated;
