import React from 'react'
import './header.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Header = () => {
  return (
    <div>
        <Sidebar>
            <Menu>
                <SubMenu label="Product Name">
                <MenuItem> Generate </MenuItem>
                <MenuItem> Product List</MenuItem>
                </SubMenu>
                <SubMenu label="Purchase">
                <MenuItem> Purchase Entry </MenuItem>
                <MenuItem> Purchase List </MenuItem>
                </SubMenu>
                <SubMenu label="Sale">
                <MenuItem> Sale Entry </MenuItem>
                <MenuItem> Sale List </MenuItem>
                </SubMenu>
                <SubMenu label="Reports">
                <MenuItem> Sale Report </MenuItem>
                <MenuItem> Goods Return Report </MenuItem>
                <MenuItem> CN Voucher Report </MenuItem>
                <MenuItem> Purchase Report </MenuItem>
                </SubMenu>
                <SubMenu label="Stock">
                <MenuItem> Stock available  </MenuItem>
                </SubMenu>
                <SubMenu label="Bank">
                <MenuItem> Bank Details </MenuItem>
                <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <SubMenu label="Accounts">
                <MenuItem> Ledger Entry </MenuItem>
                <MenuItem> Ledger List </MenuItem>
                </SubMenu>
                <SubMenu label="Setting">
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