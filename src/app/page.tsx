import DealsOfMonth from "./components/dealssection";
import Footer from "./components/footer";
import NewCollection from "./components/newcollection";
import ProductsList from "./components/product";

export default function Home() {
  const para = "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
  return (
    <div className="h-screen">
      <div className="h-screen p-10 flex">
        <div className="lg:md:sm:w-1/2 sm:p-14 flex flex-col justify-center">
          <h1 className="text-6xl font-semibold">Find The Best Style That Suits You</h1>
          <p className="text-3xl py-10 text-justify">{para}</p>
          <button className="text-3xl font-medium bg-slate-200 px-6 py-4 shadow-lg w-max sm:animate-none animate-pulse">SHOP NOW</button>
        </div>
        <div className="w-1/2 h-full lg:md:sm:block hidden bg-[url('https://i.pinimg.com/originals/ab/36/16/ab36169df7a3817916ad75c3f5b76900.gif')] bg-cover bg-no-repeat "></div>
      </div>
      <NewCollection/> 
      <DealsOfMonth/>
      <ProductsList/>
      <Footer/>
    </div>
  )
}
