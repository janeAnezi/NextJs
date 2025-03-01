export default function ProductItem({params}: {
    params: {productid: string}
}) {
    return <h1>Product item detail {params.productid}</h1>
}