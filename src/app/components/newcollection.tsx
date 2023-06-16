'use client'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
export default function NewCollection() {
    const para = "Check out our new Colection and spice up your wardrobe"
    const handleDragStart = (e:any) => e.preventDefault();

    const itemsList = [
        <img className='mx-10 p-10' src="https://i.pinimg.com/564x/48/9f/2b/489f2b0c7ddd48a7a96ca1a8cc4b3c69.jpg" onDragStart={handleDragStart} role="presentation" />,
        <img className='mx-10 p-10' src="https://i.pinimg.com/564x/48/9f/2b/489f2b0c7ddd48a7a96ca1a8cc4b3c69.jpg" onDragStart={handleDragStart} role="presentation" />,
        <img className='mx-10 p-10' src="https://i.pinimg.com/564x/48/9f/2b/489f2b0c7ddd48a7a96ca1a8cc4b3c69.jpg" onDragStart={handleDragStart} role="presentation" />,
    ];
   return(
        <div className="h-2/3 p-4 flex flex-col">
            <h1 className="w-full text-center text-4xl py-4 font-semibold">New Collection</h1>
            <p className="w-full text-center text-2xl">{para}</p>
            <div className="w-full sm:flex  overflow-x-scroll justify-between p-6 h-full gap-6">
                <AliceCarousel mouseTracking innerWidth={10} disableButtonsControls disableDotsControls autoPlay animationDuration={4000} autoWidth infinite controlsStrategy='responsive' items={itemsList} />
            </div>
        </div>
    )
}
