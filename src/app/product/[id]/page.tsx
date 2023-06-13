
export default function page() {
    return (
        <>
            {/* //single product main div */}

            <div className="flex flex-row justify-around mt-5" >
                <div className="flex flex-col justify-between h-full w-20 mt-8 basis-[10%]">
                    <div className="h-24 mx-auto">
                        <img src="https://picsum.photos/60/60" alt="" className="hover:border hover:drop-shadow-2xl border-black " />
                    </div>
                    <div className="h-24 mx-auto ">
                        <img src="https://picsum.photos/60/60" alt="" className="hover:border hover:drop-shadow-2xl border-black " />
                    </div>
                    <div className="h-24 mx-auto ">
                        <img src="https://picsum.photos/60/60" alt="" className="hover:border hover:drop-shadow-2xl border-black " />
                    </div>
                    <div className="h-24 mx-auto ">
                        <img src="https://picsum.photos/60/60" alt="" className="hover:border hover:drop-shadow-2xl border-black " />
                    </div>
                </div>
                <div className="w-full h-full p-1 border-2 border-black basis-[40%]">
                    <img src="https://picsum.photos/700/700" alt="" />
                </div>
                <div className="basis-[50%] flex flex-col ml-10">
                    <p className="font-bold text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, obcaecati?
                    </p>
                    <p className="my-2 text-neutral-600 text-lg">Brand Name</p>
                    <h3 className="my-3 text-2xl font-bold">$399</h3>
                    <div className="inline-block my-3">
                        <span className=" bg-slate-300 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                        <span>15K ratings</span>
                    </div>
                    <div className="">
                        <p className="text-lg">Select Size</p>
                        <button className="inline-block w-10 h-9 mx-4 my-2 bg-slate-400 rounded-sm drop-shadow-md text-center pt-1">S</button>
                        <button className="inline-block w-10 h-9 mx-4 my-2 bg-slate-400 rounded-sm drop-shadow-md text-center pt-1">M</button>
                        <button className="inline-block w-10 h-9 mx-4 my-2 bg-slate-400 rounded-sm drop-shadow-md text-center pt-1">L</button>
                        <button className="inline-block w-10 h-9 mx-4 my-2 bg-slate-400 rounded-sm drop-shadow-md text-center pt-1">XL</button>
                    </div>
                    <div className=" flex justify-around h-14 p-1 my-5">
                        <button className="basis-[45%] bg-[#FF5300] text-white text-xl hover:drop-shadow-2xl ">Buy Now</button>
                        <button className="basis-[45%]  bg-[#FF9F00] text-white text-xl hover:drop-shadow-2xl	">Add to Cart</button>
                    </div>
                    <div>
                        <p className=" text-lg font-semibold my-3">Product details</p>
                        <p>Burgundy Tshirt for men</p>
                        <p>Solid</p>
                        <p>Regular length</p>
                        <p>Burgundy Tshirt for men</p>
                        <p>Daily use</p>

                    </div>
                    <div>
                        <p className=" text-lg font-semibold my-3">Customer Reviews</p>
                        <div className="mr-10">
                            <div className="bg-slate-200 px-8 py-4 my-1 rounded-md">
                                <span className=" bg-slate-400 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                                <span className="font-semibold ">Very good product </span>
                                <br />
                                <p className="inline-block mx-2 mt-3 font-medium ">Customer Name</p>
                                <p className="inline-block mx-2 text-neutral-600">3 month ago</p>
                            </div>
                            <div className="bg-slate-200 px-8 py-4 my-1 rounded-md">
                                <span className=" bg-slate-400 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                                <span className="font-semibold ">Very good product </span>
                                <br />
                                <p className="inline-block mx-2 mt-3 font-medium ">Customer Name</p>
                                <p className="inline-block mx-2 text-neutral-600">3 month ago</p>
                            </div>
                            <div className="bg-slate-200 px-8 py-4 my-1 rounded-md">
                                <span className=" bg-slate-400 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                                <span className="font-semibold ">Very good product </span>
                                <br />
                                <p className="inline-block mx-2 mt-3 font-medium ">Customer Name</p>
                                <p className="inline-block mx-2 text-neutral-600">3 month ago</p>
                            </div>
                            <div className="bg-slate-200 px-8 py-4 my-1 rounded-md">
                                <span className=" bg-slate-400 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                                <span className="font-semibold ">Very good product </span>
                                <br />
                                <p className="inline-block mx-2 mt-3 font-medium ">Customer Name</p>
                                <p className="inline-block mx-2 text-neutral-600">3 month ago</p>
                            </div>
                            <div className="bg-slate-200 px-8 py-4 my-1 rounded-md">
                                <span className=" bg-slate-400 rounded-lg px-4 py-1 mr-5 ">4.1 &#9733;</span>
                                <span className="font-semibold ">Very good product </span>
                                <br />
                                <p className="inline-block mx-2 mt-3 font-medium ">Customer Name</p>
                                <p className="inline-block mx-2 text-neutral-600">3 month ago</p>
                            </div>
                            <a href="/" className="inline-block font-medium my-5 mx-3">See more →</a>
                        </div>

                    </div>

                </div>
            </div>


        </>

    )
}
