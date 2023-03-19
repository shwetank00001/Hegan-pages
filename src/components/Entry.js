import React from 'react'

const Entry = () => {

    const [button, setButton] = React.useState(false)

    const generateTableRows = () => {
        const rows = [];
        for (let i = 1; i <= 20; i++) {

          rows.push(
    
            <tr key={i}>
                                    <td>Date</td>
                                    <td>Shwetank</td>
                                    <td>1</td>
            </tr>
          );
        }
    
        return rows;
      };
    



    const [firm, setFirm] = React.useState('')
    const [region, setRegion] = React.useState('')
    const [type, setType] = React.useState('')
    const [date, setDate] = React.useState('')
    const [invoice, setInvoice] = React.useState('')

    const [address, setAddress] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [mobile, setMobile] = React.useState('')
    const [gst, setGst] = React.useState('')
    const [DL1, setDL1] = React.useState('')
    const [DL2, setDL2] = React.useState('')
    const [fssai, setFssai] = React.useState('')


    const [batch, setBatch]  = React.useState('')


    function handleSubmit(e){
        e.preventDefault()
        console.log(firm,region,type,date,invoice)
        if (firm === "SHWETANK"){
            setRegion("INDIA")
            setAddress("NOIDA")
            setEmail("mshwetank@gmail.com")
            setMobile(8979116704)
            setGst(21313)
            setDL1("1314")
            setDL2("21313")
            setFssai("This is FSSAI")
            setInvoice("AUTO INVOICE GENERATED")
            setBatch("Updated")
                    setButton(function(item){
            return(!item)
        })

            console.log('updated')
        }


    }

    function handleChange(e){
        const enteredName = e.target.value;
        setFirm(enteredName.toUpperCase());

    }

  return (
    <div className='main-div'>

        <div className='div-header'>
            <h3>PURCHASE ENTRY</h3>
        </div>

        <div className='first-half'>
            <div className='top-two'>
                <form onSubmit={handleSubmit} className='input-box'>
                    
                    <div className='input-box-name'>
                        <label htmlFor='firmName'>Firm Name</label><br/>
                        <input type="name" placeholder='First Name' onChange={handleChange} value={firm} />
                    </div>

                    <div className='input-box-region'>
                        <label htmlFor='region' >Region</label><br/>
                        <input id='region' placeholder='Region..' type='name' value={region} onChange={(e) => setRegion(e.target.value)} />
                    </div>

                    <div className='input-box-type'>
                        <label htmlFor='type'  >Type</label><br/>
                        <input id='type' type='name'  value={type} onChange={(e) => setType(e.target.value)} />
                    </div>

                    <div className='input-box-date'>
                        <label htmlFor='date' >Date</label><br/>
                        <input id='date'  type='date' value={date} onChange={(e) => setDate(e.target.value)}/>
                    </div>

                    <div className='input-box-invoice'>
                        <label htmlFor='invoiceNo'  >Invoice No.</label><br/>
                        <input id='invoiceNo' type='name' name='invoice' value={invoice} onChange={(e) => setInvoice(e.target.value)} />
                    </div>
                    <button></button>
                </form>


                <div className='quantity-box'>
                    <div className='product'>
                        <div className='quantity-box-top'>
                                    <table id="customers">
                                        <tr >
                                                <th>S.No.</th>
                                                <th>Product Name</th>
                                                <th>Unit Pack</th>
                                                <th>Quantity</th>
                                                <th>Free</th>
                                                <th>Trade Rate</th>
                                                <th>Disc%</th>
                                                <th>Amt</th>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Shwetank</td>
                                            <td>10</td>
                                            <td>16</td>
                                            <td>124</td>
                                            <td>17</td>
                                            <td>141</td>
                                            <td>63</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Shwetank</td>
                                            <td>10</td>
                                            <td>16</td>
                                            <td>124</td>
                                            <td>17</td>
                                            <td>141</td>
                                            <td>63</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Shwetank</td>
                                            <td>10</td>
                                            <td>16</td>
                                            <td>124</td>
                                            <td>17</td>
                                            <td>141</td>
                                            <td>63</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Shwetank</td>
                                            <td>10</td>
                                            <td>16</td>
                                            <td>124</td>
                                            <td>17</td>
                                            <td>141</td>
                                            <td>63</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Shwetank</td>
                                            <td>10</td>
                                            <td>16</td>
                                            <td>124</td>
                                            <td>17</td>
                                            <td>141</td>
                                            <td>63</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Shwetank</td>
                                            <td>10</td>
                                            <td>16</td>
                                            <td>124</td>
                                            <td>17</td>
                                            <td>141</td>
                                            <td>63</td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td>Shwetank</td>
                                            <td>10</td>
                                            <td>16</td>
                                            <td>124</td>
                                            <td>17</td>
                                            <td>141</td>
                                            <td>63</td>
                                        </tr>

                                    </table>
                        </div>
                    </div>
                    <div className='quantity-box-bottom'>
                        <div className='qty-comments'>
                            <div>
                                <label htmlFor='batch'>Batch No.</label><br/>
                                <input id='batch' value={batch} type='text' onChange={(e) => setBatch(e.target.value)}/>
                            </div>


                        </div>

                        <div className='qty-details'>
                         

                                { button &&<table id='customers'>
                                    <tr >
                                        <th>Date </th>
                                        <th>Invoice No.</th>
                                        <th>Unit Pack</th>
                                    </tr>
                                        <tbody>{generateTableRows()}</tbody>
                                    </table>
                                }

                            
                        </div>
                    </div>

                </div>
            </div>
            <div className='contact-box'>
                <div className='contact-box-input'>
                    <label htmlFor='add'>Address</label><br />
                    <input id='add' type='text' value={address} onChange={(e) => setAddress(e.target.value)} /><br/><br />

                    <label htmlFor='email'>Email</label><br />
                    <input id='email' value={email} onChange={(e) => setEmail(e.target.value)}/><br/><br />

                    <label htmlFor='mobile'>Mobile No.</label><br />
                    <input id='mobile' value={mobile} onChange={(e)=> setMobile(e.target.value)} /><br/><br />

                    <label htmlFor='gst'>GSTIN</label><br />
                    <input id='gst' value={gst} onChange={(e) => setGst((e.target.value))} /><br/><br />

                    <label htmlFor='DL1'>D.L.1</label><br />
                    <input id='DL2' value={DL1} onChange={(e) => setDL1((e.target.value))} /><br/><br />

                    <label htmlFor='DL2'>D.L.2</label><br />
                    <input id='DL2' value={DL2} onChange={(e) => setDL2((e.target.value))}/><br/><br />

                    <label htmlFor='fssai'>FSSAI No.</label><br />
                    <input id='fssai' value={fssai} onChange={(e) => setFssai((e.target.value))} /><br/><br />
                    
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