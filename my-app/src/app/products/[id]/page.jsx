import data from "@/lib/data";

export default function ProductDetail({params}) {
    const found = data.find((p) => p.id == params.id);
    return (
        <div>
            <h1>{found.title}</h1>
            <p>{found.context}</p>
        </div>
    )
}