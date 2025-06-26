import React from 'react'

function Prduct() {

    let data = [
        {
            prodcut: "ipad",
            price: 22,
            quantity: 10
    
        },
         {
            prodcut: "iphone",
            price: 30,
            quantity: 20
    
        },
         {
            prodcut: "mac",
            price: 22,
            quantity: 15
    
        }
    ]


  return (
    <div>
        {
            data.map((dt, index) => {

                return (
                    <div key={index}>

                   <p>product: {dt.prodcut}</p>
                    <p>product: {dt.price}</p>
                    
                    </div>
                )
            })
        }
    </div>
  )
}

export default Prduct