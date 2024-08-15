import React from 'react';

const HappyCustomer = ( { data } ) => {
	return (
		<div className='mx-w happy-customers'>
             <div className='head-line'>
                <div className='title'>  {data.title } </div>
                <div className='subTitle'> { data.subTitle } </div>
             </div>
             <div className='customers'>
                {
                    data.customers.map( (el,i) => {
                        return (
                            <div className='customer' key = {i}>
                                <div className='info'>
                                    <img src= { el.img } alt= { el.name } />
                                    <div className='name-resignation'>
                                        <a href='#' className='name'> { el.name } </a>
                                        <div className='resignation'> { el.positionTitle } </div>
                                    </div>
                                </div>
                                <div className='review'> { el.customerReview } </div>
                                <img src= { el.rating } alt="Ratings" />
                            </div>
                        );
                    })
                }
             </div>
		</div>
	);
};

export default HappyCustomer;
