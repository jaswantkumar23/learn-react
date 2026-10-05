import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-between">
      <h2 className="   text-lg font-bold bg-white w-8 h-8 rounded-full flex items-center justify-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-white mb-3 text-shadow-2xs ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ea
          aperiam! Repellendus delectus voluptatem neque.
        </p>
       <div className='flex justify-center'>
         <button style={{ backgroundColor: props.color }}  className=" text-white px-4 py-3 rounded-full font-medium">
           {props.tag}
        </button>
        <button className="bg-blue-600 text-white px-4 py-3 rounded-full font-medium">
          <i className="ri-arrow-right-line"></i>
        </button>
       </div>
      </div>
    </div>
  );
};

export default RightCardContent;
