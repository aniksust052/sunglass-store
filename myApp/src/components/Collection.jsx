import React from 'react';

const Collection = ( { data } ) => {
	return (
		<div className = {`collections`}>
			{ data.map( (el, i) => {
				return (
					<div className = "collection" key={i}>
						<div className='collectionTitles'>
							<div className='subTitle'>{el.subTitle}</div>
							<div className='title'>{el.title}</div>
							<a href={el.btnUrl}>{el.btnText}</a>
						</div>
						<div>
							<img src={el.img} className = "img552hgt280" alt={el.title}/>
						</div>
						
					</div>
				)
			})}
		</div>
	);
};

export default Collection;
