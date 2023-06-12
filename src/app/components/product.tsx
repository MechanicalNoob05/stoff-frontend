export default function ProductsList(params:any) {
    return(
        <div className="h-min  p-16 flex">
            <div className="w-1/4 p-4">
                <select name="cars" id="cars" className="w-full p-3 text-xl bg-white shadow-lg rounded-lg">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
                <div className="">

                </div>
            </div>
            <div className="bg-slate-100 w-full p-4">Option</div>
        </div>
    )
}
