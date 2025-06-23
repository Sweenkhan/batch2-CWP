import { useState } from "react";

function Button(){

    let [counting, setCounting] = useState(0)

    return(
        <button className="p-[20px] text-2xl cursor-pointer" onClick={() =>setCounting(counting+1)} >count {counting}</button>
    )

}


export default Button