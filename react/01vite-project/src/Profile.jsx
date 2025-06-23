 

function Profile(props) {

  return (
           <div className="flex border border-1 rounded p-2 flex-col">
                <h2>Student profile</h2>
                
                {/* <div style={{ backgroundImage: `url(${profileImage})` }}> */}
                  <div>
                   <img src={props.imgAdd} />
                    <h3>Name:  {props.name}</h3>
                    <p>Age:  {props.age}</p>
                    <p>Email: {props.emailAdd} </p>
                </div>
                
    
            </div>
  )
}

export default Profile