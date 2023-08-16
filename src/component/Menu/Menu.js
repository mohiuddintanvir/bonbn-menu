import React, { useState } from 'react';
import { Link } from 'react-router-dom';



import './menu.css'
import ProductFilter from '../ProductFilter';



const Menu = () => {
  const worklist=[
   
    
    {
      img:"https://i.ibb.co/93RcFDT/Chicken-Burger-1.jpg" ,
      name:"Chicken Burger",
      description:"1:1 -Prepared with chicken patty & special Sauce",
      price:140,
       
       role: "burger",
     
    },
    {
       img:"https://i.ibb.co/b2F2hk2/Chicken-cheese-burger-1.jpg" ,
      name:"Chicken cheese burger",
      description:"1:1 -Prepared with chicken patty, cheese & special Sauce",
      price:160,
       
       role: "burger",
    },
    {
      img:"https://i.ibb.co/80FsXJ0/chicken-cheese-Naga-burger.jpg" ,
      name:"chicken cheese Naga burger",
      description:"1:1 -Prepared with chicken patty & the right amount of spice",
      price:180,
       
       role: "burger",
    },
    {
      img:"https://i.ibb.co/VQJ9dXv/Chicken-sausage.jpg" ,
      name:"chicken sausage burger",
      description:"1:1 -Prepared with chicken patty, 2 pcs chicken & cheese",
      price:200,
       
       role: "burger",
    },
    {
      img:"https://i.ibb.co/nzrTcv2/chicken-double-decker-burger1.jpg" ,
      name:"chicken double decker burger",
      description:"1:1 -Prepared with 2 pcs chicken patty & 2 pcs cheese",
      price:260,
       
       role: "burger",
    },
   
    {
      img:"https://i.ibb.co/3fhx6vV/classic-meat-box.jpg" ,
      name:"Classic Meat Box",
      description:"1:1 - Consists of sausage,  french fries ,chicken & special Sauce",
      price:180,
       
       role: "meatbox",
    },
    {
      img:"https://i.ibb.co/Kwyr187/BBQ-meat-box.jpg" ,
      name:"BBQ Meat Box",
      description:"1:1 - Consists of sausage, , bbq sauce french fries,chicken & special sauce",
      price:"200",
       
       role: "meatbox",
    },
    {
      img:"https://i.ibb.co/XjxP70X/Naga-Meat-Box.jpg" ,
      name:"Naga Meat Box ",
      description:"1:1 - Consists of sausage, naga special sauce , french fries &chicken",
      price:"200",
       
       role: "meatbox",
    },
    {
      img:"https://i.ibb.co/8c0LYyY/sausage-Meat-box.jpg" ,
      name:"Sausage Meat Box ",
      description:"1:1 - Consists of sausage, french fries & special sauce",
      price:220,
       
       role: "meatbox",
    },
    {
      img:"https://i.ibb.co/vmPG8Cf/cheese-Meat-Box.jpg" ,
      name:"Cheese Meat Box ",
      description:"1:1 - Prepared with chicken, cheese ,french fries, sausage & special sauce",
      price:250,
       
       role: "meatbox",
    },
    // pizza
    {
      img:"https://i.ibb.co/By39dWr/Sausage-Pizza.jpg" ,
      name:"Sausage Pizza ",
      description:"Freshly baked dough topped with sausage, mushroom, marinara sauce, chicken, capsicum, black olive, fresh oregano & parsley",
      size1:"7'",
      extra1:70,
      price1:250,

      size2:"10'",
      
      extra2:110,
      price2:360,
       
       role: "pizza",
    },
    {
      img:"https://i.ibb.co/9VMXbJH/Chicken-Sausage-Pizza.jpg" ,
      name:"Chicken Sausage Pizza",
      description:"Topped with Permesan cheese filled crust, secret sauce, chicken, mushroom.",
      size1:"7'",
      extra1:70,
      price1:280,

      size2:"10'",
      
      extra2:110,
      price2:380,
       
       role: "pizza",
    },
    {
      img:"https://i.ibb.co/YTrFXXv/Chicken-BBQ-Pizza.jpg" ,
      name:"Chicken BBQ Pizza",
      description:"Topped with secret sauce, bbq sauce, chicken tandoori, mushrooms , oregano & black olive",
      size1:"7'",
      extra1:70,
      price1:300,

      size2:"10'",
      
      extra2:110,
      price2:450,
       
       role: "pizza",
    },

    // fries

    {
      img:"https://i.ibb.co/6DV1nd9/Chicken-Fry.jpg" ,
      name:"Chicken Fry",
    
    pic:4,
    price:190
       
       
    },
    {
      img:"https://i.ibb.co/b75kfrC/French-fries.jpg" ,
      name:"French fries",
    
    pic:4,
    price:130
       
       
    },
    {
      img:"https://i.ibb.co/XFkFzzt/Crispy-Wings-fries.jpg" ,
      name:"Crispy Wings fries",
    
    pic:4,
    price:150
       
       
    },

    // Bon shakes

  {
      img:"https://i.ibb.co/wYTtzrt/Chocolate-Cold-coffee.jpg" ,
      name:"Chocolate ",
    
    pic:4,
    price:150
       
       
    },
  {
      img:"https://i.ibb.co/xGbg9rJ/stoberry-cold-coffee.jpg" ,
      name:"Strawberry",
    
    pic:4,
    price:150
       
       
    },
  {
      img:"https://i.ibb.co/DRkCNXY/ceramel-cold-coffee-gif.gif" ,
      name:"Caramel ",
    
    pic:4,
    price:150
       
       
    },
  {
      img:"https://i.ibb.co/Z8ybLCY/7840d13baac3195c8fb6ab73f49ec343.jpg" ,
      name:"Oreo/kitkat",
    
    pic:4,
    price:150
       
       
    },


]
   
const [work,setWork]=useState(worklist)



// filtering data

const filterProduct=(catagory)=>{
const filterItem=worklist.filter((curelem)=>{
return curelem.role===catagory
})
setWork(filterItem)
}




    return (
        <div>  
       

       <div className='work section' id='work'>
          <div className='lg:flex lg:justify-around '>

<button className='btn btn-outline btn-warning' onClick={()=>filterProduct('burger')} >Burger</button>
<button className='btn btn-outline btn-warning' onClick={()=>filterProduct('meatbox')} >Meat Box</button>
<button className='btn btn-outline btn-warning'  onClick={()=>filterProduct('pizza')}>Pizza</button>
          </div>
        </div>
{/* Product maping part */}

<div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
          {

            work.map(wo =><ProductFilter wo={wo}></ProductFilter>
            
      



)

          }

        </div>


        </div>
    );
};

export default Menu;