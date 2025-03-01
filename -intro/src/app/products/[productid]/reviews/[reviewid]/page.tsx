import { notFound } from "next/navigation";

export default function ReviewDetail({params}: {
    params: {
        productid: string;
        reviewid: string
    }
}){
    if(parseInt(params.reviewid) > 1000) {
        notFound();
    }
    return <>
        <h3> Review of {params.reviewid} for product {params.productid}</h3>
    </>
}