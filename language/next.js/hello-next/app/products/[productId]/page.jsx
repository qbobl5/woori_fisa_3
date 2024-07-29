export default function ProductDetail({params}) {
    // url 에 입력된 상품 번호를 받아와야 한다 (productId)
    return (
        <div>Product {params.productId} details</div>
    );
}