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
                    <div className='quantity-box-top'>
                        <div className='quantity-box-top-header'>
                            <p>S.No.</p>
                            <p>Product Name</p>
                            <p>Unit Pack</p>
                            <p>Quantity</p>
                            <p>Free</p>
                            <p>Trade Rate</p>
                            <p>Disc%</p>
                            <p>Amt</p>
                        </div>
                        <div className='quantity-box-top-content'>
                            <p>1</p>
                            <p>Shwetank </p>
                            <p>1</p>
                            <p>100</p>
                            <p>56</p>
                            <p>19</p>
                            <p>15</p>
                            <p>99</p>
                        </div>
                        <div className='quantity-box-top-content'>
                            <p>1</p>
                            <p>Shwetank </p>
                            <p>1</p>
                            <p>100</p>
                            <p>56</p>
                            <p>19</p>
                            <p>15</p>
                            <p>99</p>
                        </div>
                        <div className='quantity-box-top-content'>
                            <p>1</p>
                            <p>Shwetank </p>
                            <p>1</p>
                            <p>100</p>
                            <p>56</p>
                            <p>19</p>
                            <p>15</p>
                            <p>99</p>
                        </div>
                    </div>
                    <div className='quantity-box-bottom'>
                        <div className='qty-comments'>

                        </div>

                        <div className='qty-details'>
                                <div className='quantity-box-top-header'>
                                <p>Date </p>
                                <p>Invoice No.</p>
                                <p>Amt.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='contact-box'>
                <div className='contact-box-input'>
                    <label htmlFor=''>Address</label><br />
                    <input id='' /><br/><br />

                    <label htmlFor=''>Email</label><br />
                    <input id='' /><br/><br />

                    <label htmlFor=''>Mobile No.</label><br />
                    <input id='' /><br/><br />

                    <label htmlFor=''>GSTIN</label><br />
                    <input id='' /><br/><br />

                    <label htmlFor=''>D.L.1</label><br />
                    <input id='' /><br/><br />

                    <label htmlFor=''>D.L.2</label><br />
                    <input id='' /><br/><br />

                    <label htmlFor=''>FSSAI No.</label><br />
                    <input id='' /><br/><br />
                    
                </div>

            </div>
        </div>

        <div className='bottom-half'>
            <div className='total-box'>
                <div className='total-empty'>
                    <p>comments</p>
                </div>

                <div className='total-values'>
                    <div className='total-values-button'>
                        <button>Sub. Total</button>
                        <button>Disc. Amount</button>
                        <button>Total Tax</button>
                        <button>Goods Return(R)</button>
                        <button>CN. Voucher </button>
                        <button>Grand Total</button>
                    </div>

                </div>
                
            </div>
            <div className='blank-box'>
                
            </div>

        </div>

    </div>
  )
}

export default Entry