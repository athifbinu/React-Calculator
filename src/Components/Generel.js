import React from 'react'

function Generel() {

  const Screen=document.getElementById('screen')

  









  return (
    <div>
       <h1 className='Calculator'>Calculator</h1>

       <div className="container">
        <p className='casio'>Casio</p>
        <input type="text" id='screen' />
        <br />
        <input className='button-number' type="button" value="7"/>
        <input className='button-number' type="button" value="8"/>
        <input className='button-number' type="button" value="9"/>
        <input className='button-number' type="button" value="/"/>


        <input className='button-number' type="button" value="6"/>
        <input className='button-number' type="button" value="5"/>
        <input className='button-number' type="button" value="4"/>
        <input className='button-number' type="button" value="*"/>


        <input className='button-number' type="button" value="3"/>
        <input className='button-number' type="button" value="2"/>
        <input className='button-number' type="button" value="1"/>
        <input className='button-number' type="button" value="+"/>


        <input className='button-number' type="button" value="C"/>
        <input className='button-number' type="button" value="0"/>
        <input className='button-number' type="button" value="="/>
        <input className='button-number' type="button" value="-"/>




       </div>
       <p className='Copyright'>Copyrigh @created By Athif</p>
    </div>
  )
}

export default Generel
