import {Product} from "./components/Product";
import {products} from "./data/products";

function App() {
    return (
        <div className='mx-auto max-w-2xl px-4'>
            {products.map(product =>
                <Product product={product} key={product.id} />
            )}
        </div>
    )
}

export default App;
