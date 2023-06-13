"use client";


import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUser, BiSupport, BiLogOutCircle } from "react-icons/bi"
import { BsCartCheck } from "react-icons/bs"
import { useState,useEffect } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mobileMenu, SetMobileMenu] = useState(false);

    const dropDownMenuUserForWeb = () => {
        if (open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
    }

    const dropDownMenuUserForMobile = () => {
        if (mobileMenu === false) {
            SetMobileMenu(true)
        } else {
            SetMobileMenu(false)
        }
    }

    // useEffect(()=>{
        
    //   document.addEventListener("click",outSideClick);
    //   document.addEventListener('touchstart', outSideClick); 
    // })

    // const outSideClick=()=>{
    //     if(mobileMenu === true){
    //          SetMobileMenu(false)
    //     }
    // }
    
    return (
        <>
            <nav className=" w-full box-border m-0  ">
                <div className="flex flex-row flex-grow bg-[#C3B9B7]">
                    <a href="/" className="basis-1/5  hidden md:block">
                        <p className="text-3xl px-6 py-5">StoffSpot</p>
                    </a>
                    <div className="basis-4/5  my-4 px-[18px] md:basis-3/5 md:my-5 md:px-20  ">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for products"
                                className="w-full h-9 pl-3 rounded-md "
                            />

                            <FiSearch size={28} className="absolute top-1 right-1" />
                        </div>
                    </div>
                    <div className="basis-1/5  md:flex flex-row  text-xl   hidden">
                        <button className="relative   basis-2/4" onClick={dropDownMenuUserForWeb}>
                            <FaRegUserCircle
                                size={40}
                                className="block mr-auto ml-auto my-5"
                            />
                            <div className="absolute" >
                                <div className={`flex flex-col border-1 bg-white p-1  border-black border-2 w-36 text-right rounded-md ${open ? "h-30" : "hidden"}`}>
                                    <a href="/" className="p-2 hover:bg-slate-200"><BiUser className="inline-block absolute left-4 " size={25} /> Profile</a>
                                    <a href="" className="p-2 hover:bg-slate-200"><BsCartCheck className="inline-block absolute left-4" size={25} />Orders</a>
                                    <a href="" className="p-2 hover:bg-slate-200"> <BiSupport className="inline-block absolute left-4" size={25} /> Support</a>
                                    <a href="" className="p-2 hover:bg-slate-200"> <BiLogOutCircle className="inline-block absolute left-4" size={25} />Logout</a>
                                </div>
                            </div>
                        </button>
                        <a href="/" className="basis-2/4">
                            <AiOutlineShoppingCart
                                size={40}
                                className="block mr-auto ml-auto my-5"
                            />
                        </a>
                    </div>
                    {/* menu for mobile */}
                    <div className="basis-1/5 flex justify-center text-xl md:hidden ">
                        <button onClick={dropDownMenuUserForMobile}>
                            <GiHamburgerMenu size={35} />
                            <div className="absolute right-0 top-16" >
                                <div className={`flex flex-col border-1 bg-white p-1  border-black
                                 border-2 w-32 text-right rounded-md right-10 ${mobileMenu ? "h-22" :"hidden"}`}>
                                    <a href="/" className="p-2"><BiUser className="inline-block absolute left-4 " size={25} /> Profile</a>
                                    <a href="" className="p-2"><AiOutlineShoppingCart className="inline-block absolute left-4" size={25} />Cart</a>

                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <hr
                    style={{
                        color: "black",
                        borderColor: "black",
                        height: "1px",
                    }}
                />

                <div className="hidden md:flex flex-row text-center p-5 bg-[#FAF4FC] text-xl ">
                    <a href="/" className="basis-2/12">
                        Women Western
                    </a>
                    <a href="/" className="basis-2/12">
                        Womens Ethinic
                    </a>
                    <a href="/" className="basis-2/12">
                        Men Fashion
                    </a>
                    <a href="/" className="basis-2/12">
                        Kids Fashion
                    </a>
                    <a href="/" className="basis-2/12">
                        Trending
                    </a>
                    <a href="/" className="basis-1/12">
                        Top sales
                    </a>
                    <a href="/" className="basis-1/12">
                        New
                    </a>
                </div>
                <div className="relative w-full lg:max-w-sm"></div>
            </nav>
        </>
    );
}
