export default function NewCollection() {
    const para = "Check out our new Colection and spice up your wardrobe"
   return(
        <div className="h-2/3 p-4 flex flex-col">
            <h1 className="w-full text-center text-4xl py-4 font-semibold">New Collection</h1>
            <p className="w-full text-center text-2xl">{para}</p>
            <div className="w-full sm:flex  overflow-x-scroll justify-between p-6 h-full gap-6">
            {
               [1,2,3,4,5].map((item)=>{
                    return(
                        <div key={item} className="bg-white w-full h-full">
                                <img className="h-full w-full" src="https://i.pinimg.com/236x/89/09/11/890911445b4f09cadbec217196bac400.jpg" alt="/"/>
                        </div>
                    )
                }) 
            }
            </div>
        </div>
    )
}
