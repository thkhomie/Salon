import StarIcon from '../../assets/StarIcon.svg'

export default function TestimonalCard({ imgUrl, name, review }) {
    return (
        <div className="bg-sectionColor p-6 rounded-md border mx-2">
            <div className="flex items-center gap-3 mb-4">
                <img src={imgUrl} alt={name} className="w-14 h-14 md:w-16 md:h-16 rounded-full" />

                <div>
                    <h3 className="text-headingColor text-sm font-medium md:text-base mb-1">{name}</h3>

                    <div className='flex items-end gap-[2px]'>
                        <img src={StarIcon} className='w-4 h-4 object-contain' />
                        <img src={StarIcon} className='w-4 h-4 object-contain' />
                        <img src={StarIcon} className='w-4 h-4 object-contain' />
                        <img src={StarIcon} className='w-4 h-4 object-contain' />
                        <img src={StarIcon} className='w-4 h-4 object-contain' />
                    </div>
                </div>
            </div>

            <p className="text-slate-500 text-xs md:text-[13px]">{review}</p>
        </div>
    )
}