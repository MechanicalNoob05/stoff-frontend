'use client'

import Card from "./cards"

export default function ProductsList(params:any) {
    return(
        <div className="h-min bg-slate-100 p-16 flex lg:md:sm:flex-row flex-col">
            <div className="lg:md:sm:w-1/4 w-full h-max sm:p-4 py-4 flex lg:md:sm:flex-col justify-between">
                <select name="cars" id="cars" className="w-1/3 sm:w-full my-2 p-3 text-xl bg-white shadow-lg rounded-lg">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <select name="cars" id="cars" className="w-1/3 sm:w-full my-2 p-3 text-xl bg-white shadow-lg rounded-lg">
                    {
                        [1,2,3,4,5,6,7,8,9].map((item)=>{
                            return(
                                <option key={item} value={item}>{item}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="bg-white w-full p-6 grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-4">
                {
                    [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((item)=>{
                        return(
                            <Card key={item}/>
                        )
                    })
                }
            </div>
        </div>
    )
}
