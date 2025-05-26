
function loginUser(callBack){
      
    setTimeout(()=>{
       console.log("user has logged in")
       callBack()
    }, 1000)
}


function fetchUser(callBack){
      setTimeout(()=>{
        console.log("data is fetched")
        callBack()
      }, 1000)
}


function updateUI(callBack){
    setTimeout(()=>{
        console.log("ui has been update")
        callBack()
    }, 1000)
}


function sendEmail(callBack){
    setTimeout(() => {
        console.log("email has sent")
        callBack()
    }, 1000);
}



// callback hell

// loginUser(()=>{
//     fetchUser(()=>{
//         updateUI(()=>{
//             sendEmail(()=>{
//                 console.log("all task has been completed")
//             })
//         })
//     })
// })






//----------------------------async task with promise (to avoid call back hell)---------------------------------

function loginUser1(){
  return   new Promise((resolve, reject)=>{
        
        setTimeout(() =>{
            console.log("user1 has been logged in")
            resolve()
        }, 1000)
    })
}


function fetchUser1(){
  return   new Promise((resolve, reject)=>{
        
        setTimeout(() =>{
            console.log("data1 has fetched out")
            resolve()
        }, 1000)
    })
}


function updateUI1(){
  return   new Promise((resolve, reject)=>{
        
        setTimeout(() =>{
            console.log("first ui has been updated")
            resolve()
        }, 1000)
    })
}


function sendEmail1(){
  return   new Promise((resolve)=>{

         setTimeout(() =>{
            console.log("email one has been sent")
            resolve()
         }, 1000)
     })
}



// chaining operation

// loginUser1()
// .then(fetchUser1)
// .then(updateUI1)
// .then(sendEmail1)
// .catch((error) =>{
//   console.log(error)
// })


// promise with async await
async function proccesData(){

    try{
        const logged = await loginUser1()
        const fetch = await fetchUser1()
        const updated = await updateUI1()
        const final = await sendEmail1()
        console.log("all operation has been done")
    } catch (err){
        console.log(err)
    }
}


proccesData()