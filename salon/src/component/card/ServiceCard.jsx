export default function ServiceCard({ imgUrl, title, description }) {
    return (
        <div className="bg-sectionColor flex flex-col md:even:flex-row-reverse md:odd:flex-row">
            <div className="flex-1">
                <img src={imgUrl} alt={title} className="w-full h-80 md:h-full"/>
            </div>

            <div className="flex-1">
                <div className="p-16">
                    <h6 className="text-md md:text-xl text-headingColor font-medium mb-3">{title}</h6>
                    <p className="text-sm md:text-sm leading-6 text-textColor whitespace-pre-line">{description}</p>
                </div>
            </div>


        </div>
    )
}