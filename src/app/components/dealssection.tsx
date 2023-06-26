import Card from "./cards";
import DealCard from "./DealCard";

export default function DealsOfMonth() {   
    return(
        <div className="h-2/3 p-10">
            <h1 className="w-full text-center text-4xl py-4 font-semibold">Deals of Month</h1>
            <p className="w-full text-center text-2xl">Stunning Deals</p>
            <div className="w-full sm:flex  overflow-x-scroll justify-between p-6 h-full gap-6">
                {
                [1,2,3,4,5].map((item)=>{
                        return(
                            <>
                            {item===3?<DealCard key={item}/>:<Card key={item}/>}
                            
                            </>  
                        
                        )
                    })
                }
            </div>
        </div>
    )
}
