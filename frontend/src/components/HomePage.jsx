export default function HomePage({data}){
    
    return(
        <>
        <h1>Welcome to HomePage</h1>
        <p>{data.name}</p>
        <p>{data.gmail}</p>
        </>
    );
}