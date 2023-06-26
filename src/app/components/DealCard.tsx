import React from 'react'

export default function DealCard() {
  return (
    <div className="w-[2000px] bg-slate-100 p-2 flex flex-col shadow">
      <p className="font-semibold text-lg mb-4">
        Lorem ipsum dolor sit amet .
      </p>
      <div>
        <img src="https://picsum.photos/300/200" alt="" className=" " />
      </div>

      <a href="/" className="inline-block px-1 py-5 text-blue-500  ">Click here</a>

    </div>
  )
}
