import React from "react";

const Content = ({ containerClass, textContainerClass, imageContainerClass, headingClass, linkClass, dateClass, imageClass, headingText, dateText, imageSrc }) => {
  return (
    <div className={`hover:bg-slate-200 transition-all duration-300 hover:cursor-pointer ${containerClass}`}>
      <div className={textContainerClass}>
        <h3 className={headingClass}>
          {headingText}
        </h3>
        <p className={dateClass}>{dateText}</p>
      </div>
      <div className={imageContainerClass}>
        <img src={imageSrc} alt="Content" className={imageClass} />
      </div>
    </div>
  );
};

export default Content;
