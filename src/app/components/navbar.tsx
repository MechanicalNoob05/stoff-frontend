"use client";


import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiUser, BiSupport, BiLogOutCircle } from "react-icons/bi"
import { BsCartCheck } from "react-icons/bs"
import { useState, useEffect } from "react";

import { IconContext } from "react-icons";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [mobileMenu, SetMobileMenu] = useState(false);
    const [categoryMenu, setCategoryMenu] = useState(false);

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

    const dropDownMenuForCategory = () => {
        if (categoryMenu === false) {
            setCategoryMenu(true)
        } else {
            setCategoryMenu(false)
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
                        <p className="text-4xl pl-14 py-5">StoffSpot</p>
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
                    <div className=" z-20 basis-1/5  md:flex flex-row  text-xl   hidden px-10 ">
                        <button className="relative   basis-2/4" onClick={dropDownMenuUserForWeb}>
                            <IconContext.Provider value={{ color: "white" }}>
                                <FaRegUserCircle
                                    size={40}
                                    className="block mr-auto ml-auto my-5"
                                />
                            </IconContext.Provider>

                            <div className="absolute" >
                                <div className={`flex flex-col border-1 bg-white p-1  border-black border-2 w-36 text-right rounded-md z-10 ${open ? "h-30" : "hidden"}`}>
                                    <a href="/" className="p-2 hover:bg-slate-200"><BiUser className="inline-block absolute left-4 " size={25} /> Profile</a>
                                    <a href="" className="p-2 hover:bg-slate-200"><BsCartCheck className="inline-block absolute left-4" size={25} />Orders</a>
                                    <a href="" className="p-2 hover:bg-slate-200"> <BiSupport className="inline-block absolute left-4" size={25} /> Support</a>
                                    <a href="" className="p-2 hover:bg-slate-200"> <BiLogOutCircle className="inline-block absolute left-4" size={25} />Logout</a>
                                </div>
                            </div>
                        </button>
                        <a href="/" className="basis-2/4">
                            <IconContext.Provider value={{ color: "white" }}>
                                <AiOutlineShoppingCart
                                    size={40}
                                    className="block mr-auto ml-auto my-5"
                                />
                            </IconContext.Provider>

                        </a>
                    </div>
                    {/* menu for mobile */}
                    <div className="basis-1/5 flex justify-center text-xl md:hidden ">
                        <button onClick={dropDownMenuUserForMobile}>
                            <GiHamburgerMenu size={35} />
                            <div className="absolute right-0 top-16" >
                                <div className={`flex flex-col border-1 bg-white p-1  border-black
                                 border-2 w-32 text-right rounded-md right-10 ${mobileMenu ? "h-22" : "hidden"}`}>
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

                <div className="z-10 relative hidden md:flex flex-row text-center p-5 bg-[#FAF4FC] text-xl ">
                    <button className="basis-2/12" onClick={dropDownMenuForCategory}>
                        Women Western
                    </button>
                    <button className="basis-2/12" onClick={dropDownMenuForCategory}>
                        Womens Ethinic
                    </button>
                    <button className="basis-2/12" onClick={dropDownMenuForCategory}>
                        Men Fashion
                    </button>
                    <button className="basis-2/12" onClick={dropDownMenuForCategory}>
                        Kids Fashion
                    </button>

                    <a href="/" className="basis-2/12">
                        Trending
                    </a>
                    <a href="/" className="basis-1/12">
                        Top sales
                    </a>
                    <a href="/" className="basis-1/12">
                        New
                    </a>


                    {/* dropdown menu */}
                    <div className={`absolute mt-12 flex flex-row mx-5  w-4/6 drop-shadow-2xl text-left  ${categoryMenu ? "h-52" : "hidden"}`}>
                        <div className="[&>*]:block [&>*]:my-1  pl-14 py-4 text-sm basis-1/4 bg-slate-200  ">
                            <a href="" className="font-semibold">Womens Western</a>
                            <a href="" className="hover:text-red-400">Sarees</a>
                            <a href="" className="hover:text-red-400">Kurta</a>
                            <a href="" className="hover:text-red-400">Ethinic Dresses</a>
                            <a href="" className="hover:text-red-400">Lehenga Choli</a>
                            <a href="" className="hover:text-red-400">Plazzos</a>
                            <a href="" className="hover:text-red-400">Patiala</a>
                        </div>
                        <div className="[&>*]:block [&>*]:my-1  pl-14 py-4 text-sm basis-1/4 bg-slate-300 ">
                            <a href="" className="font-semibold">Womens Ethinic</a>
                            <a href="" className="hover:text-red-400">Sarees</a>
                            <a href="" className="hover:text-red-400">Kurta</a>
                            <a href="" className="hover:text-red-400">Ethinic Dresses</a>
                            <a href="" className="hover:text-red-400">Lehenga Choli</a>
                            <a href="" className="hover:text-red-400">Plazzos</a>
                            <a href="" className="hover:text-red-400">Patiala</a>
                        </div>
                        <div className="[&>*]:block [&>*]:my-1  pl-14 py-4 text-sm basis-1/4 bg-slate-200 ">
                            <a href="" className="font-semibold">Men Fashion</a>
                            <a href="" className="hover:text-red-400">Sarees</a>
                            <a href="" className="hover:text-red-400">Kurta</a>
                            <a href="" className="hover:text-red-400">Ethinic Dresses</a>
                            <a href="" className="hover:text-red-400">Lehenga Choli</a>
                            <a href="" className="hover:text-red-400">Plazzos</a>
                            <a href="" className="hover:text-red-400">Patiala</a>
                        </div>
                        <div className="[&>*]:block [&>*]:my-1  pl-14 py-4 text-sm basis-1/4 bg-slate-300 ">
                            <a href="" className="font-semibold">Kids Fashion</a>
                            <a href="" className="hover:text-red-400">Sarees</a>
                            <a href="" className="hover:text-red-400">Kurta</a>
                            <a href="" className="hover:text-red-400">Ethinic Dresses</a>
                            <a href="" className="hover:text-red-400">Lehenga Choli</a>
                            <a href="" className="hover:text-red-400">Plazzos</a>
                            <a href="" className="hover:text-red-400">Patiala</a>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    );
}
