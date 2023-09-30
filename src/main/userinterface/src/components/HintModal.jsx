import React from 'react';

function HintModal({ hint, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex justify-center items-center">
      <div className="w-11/12 h-4/5 relative flex justify-center items-center">
        <div className=" w-full h-full  p-10 flex flex-col gap-3 bg-gray-200 overflow-y-auto rounded-lg ">
          <p className='text-lg self-center'>Knowledge Nugget</p>
          <div className="">
            <p>{hint}</p>
          </div>
        </div>
        <span className='absolute top-10 right-10 bg-red-500 text-white border-none rounded-md py-1 px-2 cursor-pointer hover:bg-red-600 z-50' onClick={onClose}><button >Close</button></span>
      </div>
    </div>
  );
}

export default HintModal;
