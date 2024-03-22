import { SERVICES } from '../data/Data'
import ServiceCard from "./card/ServiceCard";

export default function OurServices(){
    return(
        <section id="services" className="max-w-[1200px] py-16 mx-auto">
            <h5 className="text-2xl font-semibold text-headingColor text-center mb-10 pt-5">
                Our Services
            </h5>
            <div className=" bg-sectionColor lg:shadow-xl lg:shadow-slate-200/50 py-9">
                {SERVICES.map((item)=> (
                    <ServiceCard 
                    key={item.title}
                    imgUrl={item.imgUrl}
                    title={item.title}
                    description={item.description}/>
                ))}
            </div>
        </section>
    )
}