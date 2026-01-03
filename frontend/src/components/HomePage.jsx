export default function HomePage({userData}){
     if (!userData || !userData.name) {
    return <h1>Loading user data... please login first</h1>;
  }
    return(
        <>
        <h1>Welcome to HomePage</h1>
        <p>{userData.name}</p>
        <p>{userData.gmail}</p>
        </>
    );
}