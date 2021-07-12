import React, { useState } from 'react';

const Tour = ({id,name,image,price,info}) => {
  return <article className='single-tour'>
    <img src={image} alt={name} />
  </article>
};

export default Tour;
