'use client';
import { notFound } from "next/navigation";
import Error from "./error";
function getRandomInt(count){
    return Math.floor(Math.random() * count);
}
export default function Reviews({params}) {
    const random = getRandomInt(2);
    if(random === 1) throw new Error('Error loading review')
    if(parseInt(params.reviewId) > 10){
        // 사용자를 404 페이지로 라우팅
        notFound();
    }
    return (
        <div>{params.productId}번째 상품 {params.reviewId}번째 리뷰</div>
    )
}