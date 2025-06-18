function Header(){

let logo = "e-commerce"



    return(
        
        <div className="" style={{display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "2px solid white"}}>  

        <h2>{logo}</h2>
        <ul style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>

            <li>home</li>
            <li>contact</li>
            <li>about</li>
        </ul>
        <p>Log in</p>

        </div>
    )
}

export default Header