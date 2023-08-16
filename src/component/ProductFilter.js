import React from 'react';
import { Link } from 'react-router-dom';

const ProductFilter = ({wo}) => {

    const {img,name,description,price}=wo;
    return (
        <div>
      <div class="card card-side bg-base-100 shadow-xl">
  <figure><img className=' w-32 h-32 lg:w-96 lg:h-96 md:w-80 md:h-96' src={img} alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>{description}</p>
    <div class="card-actions justify-end">
   <p>TK . {price}</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductFilter;
