export default function NewCollection() {
    const para = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
   return(
        <div className="h-2/3 bg-slate-200 p-4 flex flex-col">
            <h1 className="w-full text-center text-4xl py-4 font-semibold">New Collection</h1>
            <p className="w-full text-center text-2xl">{para}</p>
            <div className="w-full sm:flex  overflow-x-scroll justify-between p-6 h-full gap-6">
            {
               [1,2,3,4].map((item)=>{
                    return(
                        <div key={item} className="bg-white w-full h-full p-6 flex flex-col justify-between shadow">
                            <div className="bg-[url('https://i.pinimg.com/736x/bd/39/10/bd3910897402ce4a79e823c348b0311d.jpg')] h-full"></div>
                            <h1 className="py-4 font-medium text-2xl text-center">{item}</h1>
                        </div>
                    )
                }) 
            }
            </div>
        </div>
    )
}
