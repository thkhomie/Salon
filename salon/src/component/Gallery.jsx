import Photo1 from '../assets/Photo1.png'
import Photo2 from '../assets/Photo2.png'
import Photo3 from '../assets/Photo3.png'
import Photo4 from '../assets/Photo4.png'
import Photo5 from '../assets/Photo5.png'
import Photo6 from '../assets/Photo6.png'
import Photo7 from '../assets/Photo7.png'


export default function Gallery() {
    return (
        <section id='gallery' className="max-w-[1200px] py-16 mx-auto">
            <h2 className="text-headingColor text-2xl font-semibold text-center mb-10 pt-5">Gallery</h2>
            <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2 ">
                <img src={Photo1} alt="Photo1" className="gallery-img" />
                <img src={Photo2} alt="Photo2" className="gallery-img" />
                <img src={Photo3} alt="Photo3" className="gallery-img" />

                <img src={Photo4} alt="Photo4" className="gallery-img" />
                <div className="md:col-span-2">
                     <img src={Photo6} alt="Photo6" className="gallery-img" />
                </div>
                <img src={Photo5} alt="Photo5" className="gallery-img" />
                
               
                <img src={Photo7} alt="Photo7" className="gallery-img" />

            </div>
        </section>

    )
}