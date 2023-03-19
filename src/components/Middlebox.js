import React from 'react'

const Middlebox = () => {
  return (
    <div className='quantity-box'>
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
                <td>1</td>
                <td>24</td>
                <td>13</td>
                <td>35</td>
                <td>46</td>
                <td>7</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Shwetank</td>
                <td>1</td>
                <td>24</td>
                <td>13</td>
                <td>35</td>
                <td>46</td>
                <td>7</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Shwetank</td>
                <td>1</td>
                <td>24</td>
                <td>13</td>
                <td>35</td>
                <td>46</td>
                <td>7</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Shwetank</td>
                <td>1</td>
                <td>24</td>
                <td>13</td>
                <td>35</td>
                <td>46</td>
                <td>7</td>
            </tr>
        </table>
    </div>
    <div className='quantity-box-bottom'>
        <div className='qty-comments'>
            <div className='div-item-details'>
                <label htmlFor='batch'>Batch No.</label><br/>
                <input id='batch' type='text'/>
            </div>
        </div>

        <div className='qty-details'>
            <table id='customers'>
            <tr >
                <th>S.No.</th>
                <th>Product Name</th>
                <th>Unit Pack</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Shwetank</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Shwetank</td>
                <td>1</td>
            </tr>
            </table>
        </div>
    </div>

</div>
  )
}

export default Middlebox