"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();

    const clickHandler = () => {
        /* 주문 처리 성공하면 */
        router.push('/'); // 메인 페이지로 라우팅
        // replace (history 기록 남기지 않음)
        // back() 은 뒤로가기
    }

    return (
        <>
            <h1>Order Product</h1>
            <button className="p-2 text-white bg-black border" onClick={clickHandler}>Place an order</button>
        </>
    );
}