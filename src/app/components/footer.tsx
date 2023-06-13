export default function Footer(params:any) {
    return(
        <div className="bg-white h-1/4 p-6 flex flex-col justify-between">
            <div className="sm:flex justify-stretch">
                <div className="flex sm:w-1/2 justify-evenly sm:border-r-2">
                    <h1 className="text-2xl font-medium">Social Links</h1>
                    <ul className="p-6 text-xl">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
                <div className=" flex sm:w-1/2 justify-evenly ">
                    <h1 className="text-2xl font-medium">Caarers</h1>
                    <ul className="p-6 text-xl">
                        <li>Become a Seller</li>
                        <li>Promotions</li>
                        <li>Get hired</li>
                    </ul>
                </div>
            </div>
            <h1 className="w-full text-center">©2023 Your Company Name. All rights reserved.</h1>
        </div>
    )
}
