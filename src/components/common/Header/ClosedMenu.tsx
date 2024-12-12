import React from 'react';

export default function ClosedMenu() {
  return (
    <span className='relative'>
      <div className='bg-primary-white w-[20px] h-[2px] rounded-sm rotate-45 absolute'></div>
      <div className='bg-primary-white w-[20px] h-[2px] rounded-sm -rotate-45'></div>
    </span>
  );
}
