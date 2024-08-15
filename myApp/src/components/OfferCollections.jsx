import React from 'react';

const OfferCollection = ( {data} ) => {
  return (
    <div className='mx-w offer-collection'>
      <div className='baby'>
        <div className="content">
          <div className='discount margin-top-left'> { data.baby.discount } </div>
          <div className='offer-collection-title title '> <a href="#">{ data.baby.title }</a>  </div>
        </div>
        <img className='img570w' src = {data.baby.img} alt={data.baby.title} />
      </div>

      {
        data.ladiesAndMen.map( ( el, i ) => {
          return (
            <div className='ladies-gents' key = {i} >
              <div className="content margin-top-left">
                <div className='discount'> { el.discount } </div>
                <div className="offerTime"> { el.offerTime } </div>
                <a href='#' className='title'> { el.title } </a>
              </div>
              <img className='img570w' src={el.img} alt={el.title} />
            </div>
          )
        })
      }
    </div>
  );
}

export default OfferCollection;
