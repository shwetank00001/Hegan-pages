import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {FaIndustry, FaRegMoneyBillAlt, } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='sidebar'>
        <Sidebar>
            <Menu>
                <SubMenu icon={<FaIndustry />} label="Product Name">
                <MenuItem > Generate </MenuItem>
                <MenuItem> Product List</MenuItem>
                </SubMenu>
                <SubMenu icon={<FaRegMoneyBillAlt />} label="Purchase">
                <MenuItem> Purchase Entry </MenuItem>
                <MenuItem> Purchase List </MenuItem>
                </SubMenu>
                <SubMenu icon={<FaIndustry />} label="Sale">
                <MenuItem> Sale Entry </MenuItem>
                <MenuItem> Sale List </MenuItem>
                </SubMenu>
                <SubMenu icon={<FaIndustry />} label="Reports">
                <MenuItem> Sale Report </MenuItem>
                <MenuItem> Goods Return Report </MenuItem>
                <MenuItem> CN Voucher Report </MenuItem>
                <MenuItem> Purchase Report </MenuItem>
                </SubMenu>
                <SubMenu icon={<FaIndustry />} label="Stock">
                <MenuItem> Stock available  </MenuItem>
                </SubMenu>
                <SubMenu icon={<FaIndustry />} label="Bank">
                <MenuItem> Bank Details </MenuItem>
                <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <SubMenu icon={<FaIndustry />} label="Accounts">
                <MenuItem> Ledger Entry </MenuItem>
                <MenuItem> Ledger List </MenuItem>
                </SubMenu>
                <SubMenu icon={<FaIndustry />} label="Setting">
                <MenuItem> Invoice Assign </MenuItem>
                <MenuItem> Backup </MenuItem>
                <MenuItem> Logout </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    </div>
  )
}

export default Header