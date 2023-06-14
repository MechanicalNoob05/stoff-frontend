import { FaStar } from "react-icons/fa";
import Card from "../components/cards";

export default function Page() {
  return(
    <div className="flex">
      <div className="w-1/4 p-6">
        <h1 className="text-2xl font-semibold pb-4 underline decoration-red-500">Filters</h1>
        <h1 className="text-xl font-semibold">Categories</h1>
        <ul className="py-4 text-xl">
        {
          [1,2,3,4,5].map((item)=>{
            return <li key={item}>Product type {item}</li>
          })
        }
        </ul>
        <h1 className="text-xl font-semibold">Customer Ratings</h1>
        <ul className="py-4">
          <li className="p-2 bg-white flex items-center text-xl justify-between border-2">
          <input type="checkbox" className="w-1/4"/> 
          <span className="px-2 flex items-center w-full">4 <FaStar className="p-2 w-max h-max"/> or Above</span>
          </li>
          <li className="p-2 bg-white flex items-center text-xl justify-between border-2">
          <input type="checkbox" className="w-1/4"/> 
          <span className="px-2 flex items-center w-full">3 <FaStar className="p-2 w-max h-max"/> or Above</span>
          </li>
          <li className="p-2 bg-white flex items-center text-xl justify-between border-2">
          <input type="checkbox" className="w-1/4"/> 
          <span className="px-2 flex items-center w-full">2 <FaStar className="p-2 w-max h-max"/> or Above</span>
          </li>
          <li className="p-2 bg-white flex items-center text-xl justify-between border-2">
          <input type="checkbox" className="w-1/4"/> 
          <span className="px-2 flex items-center w-full">1 <FaStar className="p-2 w-max h-max"/> or Above</span>
          </li>
        </ul>
        <h1 className="text-xl font-semibold">Pricing</h1>
        <ul className="py-4 text-xl">
        {
          [6000,5000,4000,3000,2000,1000].map((item)=>{
            return <li key={item}>Below Rs {item}</li>
          })
        }
        </ul>
        <h1 className="text-xl font-semibold">Size</h1>
        <ul className="flex py-4 gap-5">
          <li className="p-2 text-xl rounded-xl capitalize bg-slate-100">S</li>
          <li className="p-2 text-xl rounded-xl capitalize bg-slate-100">M</li>
          <li className="p-2 text-xl rounded-xl capitalize bg-slate-100">L</li>
          <li className="p-2 text-xl rounded-xl capitalize bg-slate-100">XL</li>
          <li className="p-2 text-xl rounded-xl capitalize bg-slate-100">XXL</li>
        </ul>
      </div>
      <div className="w-full p-6 grid grid-cols-4 gap-6">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}
