
export default function page() {
    return (
        <>
            {/* //single product main div */}

            <div className="flex flex-row justify-around">
                <div className="flex flex-col justify-between h-full w-20 mt-8 basis-[10%]">
                    <div className="h-32 w-full ">
                        <img src="https://picsum.photos/60/60" alt="" />
                    </div>
                    <div className="h-32 w-full ">
                        <img src="https://picsum.photos/60/60" alt="" />
                    </div>
                    <div className="h-32 w-full ">
                        <img src="https://picsum.photos/60/60" alt="" />
                    </div>
                    <div className="h-32 w-full ">
                        <img src="https://picsum.photos/60/60" alt="" />
                    </div>
                </div>
                <div className="w-full px-20 py-10 border-2 border-black basis-[40%]">
                    <img src="https://picsum.photos/500/500" alt="" />
                </div>
                <div className="basis-[50%]">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, obcaecati? Ipsam reiciendis possimus commodi,
                     excepturi veritatis velit maxime porro cumque!
                     <p> product details</p>
                     <div className="border border-black flex justify-around h-12 p-1">
                     <button className="basis-[40%] border border-black ">Buy Now</button>
                     <button className="basis-[40%] border border-black ">Add to Cart</button>
                     </div>
                     
                </div>
            </div>


        </>

    )
}
