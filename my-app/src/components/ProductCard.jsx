import data from "@/lib/data";
import Link from "next/link";

export default function ProductCard({product}) {
    return (
        <div>
            <h2>{product.title}</h2>
            <br/>
            <h4>{product.price}</h4>
            <br/>
            <Link href = {`products/${product.id}`}>Show Description</Link>
        </div>
    )
}