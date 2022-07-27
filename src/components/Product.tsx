import {IProduct} from "../models";
import {useState} from "react";

interface ProductProps {
    product: IProduct,
}

export function Product({ product }: ProductProps) {
    const [details, setDetails] = useState(false);

    const bgButtonClassName = details
        ? 'bg-cyan-300 hover:bg-cyan-400'
        : 'bg-yellow-300 hover:bg-yellow-400';
    const buttonClassName = ['rounded px-4 py-2', bgButtonClassName];

    return (
        <div className='border rounded p-4 flex flex-col gap-3 items-center mt-4'>
            <img className='w-1/6' src={product.image} alt={product.title}/>
            <h2>{product.title}</h2>
            <p className='font-bold'>{product.price}</p>
            <button
                type='button'
                // className={`rounded px-4 py-2 ${details
                //     ? 'bg-cyan-300 hover:bg-cyan-400'
                //     : 'bg-yellow-300 hover:bg-yellow-400' }`}
                className={buttonClassName.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide details' : 'Show details'}
            </button>
            {details &&
                <>
                    <p>{product.description}</p>
                    <p>Rating: <span style={{fontWeight: 700}}>{product.rating.rate}</span></p>
                </>
            }
        </div>
    )
}
