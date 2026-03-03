import Image from "next/image";

export default function Sidebar({user}){
    return(
        <div style={{border: '2px solid',  padding: '20px'}}>
            <h1 style={{color: "grey"}}>User Details</h1>
            {user?.image && 
             <Image src={user && user?.image || null} alt={user && user.image} width={100} height={100} loading="lazy" />
            }
            <p>Name: {user && user.firstName}</p>
            <p>Blood Group: {user && user.bloodGroup}</p>
            <p>User EIN: {user && user.ein}</p>
            <p>User Email: {user && user.email}</p>
            <p>User Eyecolor: {user && user.eyeColor}</p>
            <p>User Height: {user && user.height}</p>
        </div>
    )
}