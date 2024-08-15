import React from 'react';

const Best = ( { data } ) => {
	return (
		<div className='best' style={{backgroundImage : `url(${data.img})`}}>
            <div className='inner'>
                <div className='txt'> {data.txt} </div>
                <a href="#"> {data.btnTxt} </a>
            </div>
		</div>
	);
};

export default Best;
