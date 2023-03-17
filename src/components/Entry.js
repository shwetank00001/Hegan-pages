import React from 'react'

const Entry = () => {
  return (
    <div className='main-div'>

        <div className='div-header'>
            <h3>PURCHASE ENTRY</h3>
        </div>

        <div className='first-half'>
            <div className='top-two'>
                <div className='input-box'>
                    <div className='input-box-name'>
                        <label htmlFor='firmName'>Firm Name</label><br/>
                        <input id='firmName' />
                    </div>
                    <div className='input-box-region'>
                        <label htmlFor='region'>Region</label><br/>
                        <input id='region' />
                    </div>
                    <div className='input-box-type'>
                        <label htmlFor='type'>Type</label><br/>
                        <input id='type' />
                    </div>
                    <div className='input-box-date'>
                        <label htmlFor='date'>Date</label><br/>
                        <input id='date' />
                    </div>
                    <div className='input-box-invoice'>
                        <label htmlFor='invoiceNo'>Invoice No.</label><br/>
                        <input id='invoiceNo' />
                    </div>
     
                </div>
                <div className='quantity-box'>

                </div>
            </div>
            <div className='contact-box'>
                <div className='contact-box-input'>
                    <label htmlFor=''>Address</label><br />
                    <input id='' /><br/>
                    <label htmlFor=''>Address</label><br />
                    <input id='' /><br/>
                    <label htmlFor=''>Address</label><br />
                    <input id='' /><br/>
                    <label htmlFor=''>Address</label><br />
                    <input id='' /><br/>
                    <label htmlFor=''>Address</label><br />
                    <input id='' /><br/>
                    <label htmlFor=''>Address</label><br />
                    <input id='' /><br/>
                    <label htmlFor=''>Address</label><br />
                    <input id='' /><br/>
                </div>

            </div>
        </div>

        <div className='bottom-half'>
            <div className='total-box'>
                
            </div>
            <div className='blank-box'>
                
            </div>

        </div>

    </div>
  )
}

export default Entry