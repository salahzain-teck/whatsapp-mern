import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJkMtXC_kkhFn_9WBclxFQU_eBQBraeUknw&usqp=CAU' />

            <div className='sidebarChat__info'>
                <h2>Rooom name</h2>
                <p>This is last message</p>
            </div>
        </div>
    )
}

export default SidebarChat