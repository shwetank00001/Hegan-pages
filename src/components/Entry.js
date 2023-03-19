import React from 'react'
import Middlebox from './Middlebox'
import Bottom from './Bottom'


const Entry = () => {

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
            console.log('updated')
        }
        else        if (firm === "VIKRAM"){
            setRegion("INDIA")
            setAddress("NAVEDA")
            setEmail("vikramBhai@gmail.com")
            setMobile("Number")
            setGst(363464)
            setDL1(547575)
            setDL2(6969698)
            setFssai(7575757)
            console.log('updated')
        }

    }

    function handleChange(e){
        const enteredName = e.target.value;
        setFirm(enteredName);

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


                <Middlebox />
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

        <Bottom />

    </div>
  )
}

export default Entry