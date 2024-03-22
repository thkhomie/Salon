import home from '../assets/Home.png';

export default function Home() {
    return (
        <section id='home' className="bg-sectionColor flex flex-col-reverse items-center mx-auto py-52 px-6 md:flex-row relative">
            <div className="absolute inset-0">
                <img src={home} alt="shop" className=" w-full h-full object-cover" />
            </div>
            <div className="pt-32 z-10">
                <h1 className=" text-homeColor text-3xl font-bold mb-5 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">Unlock Your Inner Glow: </h1>
                <h2 className="text-homeSub text-md leading-6  mb-6">Experience Premier Salon Services Crafted for Every Unique Style.</h2>
                <button className="bg-btnBKColor text-white p-5 mt-3 hover:bg-overlayBg ">Book Now!</button>
            </div>
        </section>
    );
}
