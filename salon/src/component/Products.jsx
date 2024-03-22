import Product from '../assets/Product.png'
import DateCountDown from './Timer/DateCountDown'

export default function Products(){
    return(
        <section id='products' className="flex flex-row-reverse items-center mx-auto py-48 px-6 md:flex-row relative">
            <div className="absolute inset-0">
                <img src={Product} alt="product" className=" w-full h-full object-cover" />
            </div>
            
            <DateCountDown />

            <div className="pt-32 z-10">
                <h1 className=" text-homeColor text-3xl font-bold mb-5 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">Limited Edition</h1>
                <h2 className="text-white text-md leading-6  mb-6">Elevate your skincare routine with our exclusive Limited Edition Skin Serum, meticulously crafted to rejuvenate and revitalize your complexion. Don't miss out on this rare opportunity to experience luxury skincare - <br /> available only at <strong className='text-homeSub'><i>Enchanté Elegance Salon</i></strong> .</h2>
                <button className="bg-btnBKColor text-white p-5 mt-3 hover:bg-overlayBg ">Order Now!</button>

                
            </div>
            
        </section>
    )
}