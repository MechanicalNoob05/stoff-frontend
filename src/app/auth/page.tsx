export default function Page() {
  return (
        <div className="sm:p-10 pt-10 h-min flex">
           <div className="md:sm:block hidden w-full flex justify-center bg-no-repeat bg-cover bg-[url('https://i.pinimg.com/564x/cc/ee/95/ccee95248a50ea90b0d04c5f346682cf.jpg')]">
           </div> 
           <div className="sm:p-10 p-5 py-10 md:sm:w-2/3 w-full bg-slate-100 shadow-md">
                <form>
                    <h1 className="text-4xl font-bold underline decoration-3 decoration-indigo-500">LOGIN</h1>
                    <div className="pt-6 flex flex-col">
                        <label className="text-2xl pb-3 font-medium">Phone no.</label>
                        <input className="text-2xl p-3 rounded-md" type="text" placeholder="9090900909"></input>
                    </div>
                    <div className="pt-4 flex flex-col">
                        <label className="text-2xl pb-3 font-medium flex justify-between items-center"><span>Password</span><span className="text-sm text-indigo-500 underline">Forgot Password?</span></label>
                        <input className="text-2xl p-3 rounded-md" type="text" placeholder="*********"></input>
                    </div>
                    <div className="pt-4 flex">
                        <input className="text-2xl p-3 rounded-md" type="checkbox"></input>
                        <label className="text-2xl p-3 font-medium">Remember me</label>
                    </div>
                    <div className="pt-6 flex justify-center">
                        <button className="text-2xl font-medium text-white p-3 rounded-lg sm:w-1/2 w-full bg-black">Login</button>
                    </div>
                    <div className="pt-6 flex justify-between">
                        <div className="border-b-4 w-full"></div>
                        <div className="w-1/4 text-center text-2xl">Or</div>
                        <div className="border-b-4 w-full"></div>
                    </div>
                    <div className="pt-6 flex justify-center">
                        <button className="text-2xl font-medium p-3 rounded-lg sm:w-1/3 w-full border-2 border-black">Google</button>
                    </div>
                    <div className="pt-6 flex justify-between">
                        <div className="border-b-4 w-full"></div>
                    </div>
                    <div className="pt-6 flex justify-center">
                        <label className="text-xl">Don't have an account? <span className="text-red-500 underline">Sign up</span></label>
                    </div>
                </form>
           </div> 
        </div>
    )
}
