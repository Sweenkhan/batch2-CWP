import FooterLinks from "./FooterLinks" 

function Footer() {

  let mobile= 7995900543

  return (
    <div className='footer'>
      <h2>this is our footer page</h2>
      <p>contact:{mobile}  </p>
      <FooterLinks />
    </div>
  )
}

export default Footer