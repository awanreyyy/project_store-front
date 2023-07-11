import React from "react";
// import FlashSaleTiles from "./FlashSaleTiles";
// import FlashSale from "./FlashSale";

interface FlashSaleProps{
    id: number;
    name: string;
    onClick:() => void | undefined;
}
const saleItems = [
       {
        id: 1, 
        name: 'Up to 90% off', 
        onClick: () => {
        window.location.href = 'https://www.youtube.com';
        },
      },
        { 
            id: 2, 
            name: 'Upto 60% off', 
            onClick: () => {
            window.location.href = 'https://www.youtube.com';
            },
        },
        { 
            id: 3, 
            name: 'Upto 40% off', 
            onClick: () => {
            window.location.href = 'https://www.youtube.com';
        },
    },
        { 
            id: 4, 
            name: 'Upto 20% off', 
            onClick: () => {
            window.location.href = 'https://www.youtube.com';
        },

    
    },
    ];

const FlashSaleCategory: React.FC = () => {
    // return (
    //     <div className= "container mx-auto my-8">
    //         <h1>Test</h1>
    //         {/* {saleItems.map((item,id) => (
    //         // <FlashSale key= {id} {...item}/>
    //         ))} */}
    //         {saleItems.map((item) => (
    //         <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
    //           <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
    //         </div>
    //       ))}
    //     </div>   
    // );
    return (
        <div className="container mx-auto py-8 ">
          <div className="flex items-center justify-center mb-4">
            <h2 className="text-2xl font-bold">Flash Sale</h2>
          </div>
          <p className="text-gray-700 mb-4">Limited-time offer! Grab these deals before they're gone.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-11">
            {saleItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      );
};

export default FlashSaleCategory;