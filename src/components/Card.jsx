// eslint-disable-next-line no-unused-vars
import React, { Children } from 'react';

// eslint-disable-next-line react/prop-types
const Card = ({ className, classNameCardImage, cardImage, classNameCardText, textContent }) => {
  return (
    <div className={`flex flex-col hover:cursor-pointer items-center justify-center p-4 ${className}`}>
        <img src={cardImage} alt="" className={classNameCardImage} />
        <p className={`text-center ${classNameCardText}`}>{textContent}</p>
    </div>
  )
}

export default Card;
