import React from "react";
import RightCardContent from "./RightCardContent";

const RighCard = (props) => {
  console.log(props.color);
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-60 rounded-2xl'>
  <img className='h-full w-full object-cover' src={props.img} alt="" />
  <RightCardContent id={props.id} color={props.color} tag={props.tag} />
</div>
  );
};

export default RighCard;
