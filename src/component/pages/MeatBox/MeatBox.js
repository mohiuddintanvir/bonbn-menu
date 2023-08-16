import React from 'react';

const MeatBox = () => {

    const burgerList=[
        
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
         
        
        ]


    return (
        <div>
         {
               burgerList.map(burger=><div >
                    <div class="card card-side bg-base-100 shadow-xl">
  <figure><img className=' w-32 h-32 lg:w-96 lg:h-96 md:w-80 md:h-96' src={burger.img} alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">{burger.name}</h2>
    <p>{burger.description}</p>
    <div class="card-actions justify-end">
   <p className='text-[#F0B86E]'>TK . {burger.price}</p>
    </div>
  </div>
</div>
               </div>)
            }
        </div>
    );
};

export default MeatBox;