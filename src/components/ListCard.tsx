import { Link } from 'react-router-dom'
import Button from './Button'

interface ListCardInterface {
    name: string,
    image: string,
    description?: string,
    to: string,
    btnname: string,
    titleLineClamp?: string
    minHeight?: string
}
function ListCard({ name, image, description, btnname, to, titleLineClamp = '1', minHeight = 'min-h-[400px]' }: ListCardInterface) {
    return (
        <Link to={to} className="group bg-white  rounded-sm cursor-pointer mb-5 focus-visible:bg-primary/20 focus-visible:outline-none">
            <div className={`recipe-item flex ${minHeight} flex-col`}>
                <div className="relative rounded-t-sm transition-colors bg-gradient-from-l bg-gradient-to-b from-primary/20 to-primary/70 group-hover:to-primary">
                    {image && image !== 'error' ? <img
                        loading="lazy"
                        src={image}
                        alt=""
                        className={`mx-auto z-0 py-10 h-[200px] w-[200px] object-contain`} /> : 'Image Not Found'}
                    <div className="absolute inset-0 w-full h-full " />
                </div>
                <div className="p-5 border border-solid border-black/20 flex-1 flex flex-col">
                    <div className="recipes-title flex-1">
                        <h6 data-tooltip={name} className={`text-primary font-semibold text-xl text-center  line-clamp-${titleLineClamp}`}>{name}</h6>
                        {description && <p className="line-clamp-3 text-black/70 mt-5">{description}</p>}
                    </div>
                    <Button btnname={btnname} />
                </div>

            </div>
        </Link>
    )
}

export default ListCard