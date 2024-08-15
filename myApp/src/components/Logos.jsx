import React from 'react';

const Logos = ( { data } ) => {
	return (
		<div className='logos'>
             <div className='mx-w logo'>
                {
                    data.map( (el,i) => {
                        return(
                            <img src = { el } alt="" />
                        )
                    })
                }
             </div>
            

		</div>
	);
};

export default Logos;
