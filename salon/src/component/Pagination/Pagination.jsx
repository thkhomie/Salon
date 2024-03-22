import { TESTIMONALS } from "../../data/Data";

export default function Pagination({active}){
    return(
        <div className="flex items-center justify-center gap-3 p-5">
            {TESTIMONALS.map((item,index) => (
                <div key={item.id} 
                className={`w-8 h-1 
                ${active === index ? 'bg-headingColor' : 'bg-blue-100' }
                 rounded-md trransition-all duration-500`}></div>
            ))}
        </div>
    )
}