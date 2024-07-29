import Link from "next/link";

const ProductList = () => {
    const productList = [1, 2, 3, 4];
    
    return (
        <div>
            <h1>Product List</h1>
            {productList.map((productId) => (
                <h2 key={productId}>
                <Link href={`/products/${productId}`}>
                    Product {productId}
                </Link>
                </h2>
            ))}
        </div>
    );
}

export default ProductList;
