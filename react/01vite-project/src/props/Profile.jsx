 
function Profile( {imageAdd, userName, userAge, userEmail} ) {

  return (
   <div className="flex border border-1 rounded p-2 flex-col">
                <h2 className="text-center">Student profile</h2>
                 
                  <div >
                   <img src={imageAdd} />
                    <h3>Name: {userName}</h3>
                    <p>Age: {userAge} </p>
                    <p>Email:{userEmail} </p>
                </div>
                
    
            </div>
  )
}

export default Profile