import React from 'react';

interface FloatingProps{
  name: string, 
  top?: string | number, 
  right?: string | number, 
  bottom?: string | number, 
  left?: string | number,
  rotate?: string
}

const FloatingIcon: React.FC<FloatingProps> = ({name, top, right, bottom, left, rotate}) => {
  return (
    <div className={`text-white rounded-lg text-center animate-float absolute`} style={
      {
        top: top,
        right: right,
        bottom: bottom,
        left: left,
      }
    }>
      <img src={`src/assets/img/icons/${name}.png`} className="w-[50px] h-[50px] blur lg:w-[70px] lg:h-[70px]" style={{
      transform: `rotate(${rotate})`
      }}></img>
    </div>
  );
};

export { FloatingIcon }