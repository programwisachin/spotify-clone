import React from 'react'
import './SidebarSection.css'

const SidebarSection = ({ Icon, desc }) => {
    return (
        <div className='ss'>
            {Icon && <Icon className="ss_icon" />}
            {desc && <h4>{desc}</h4>}
        </div>
    )
}

export default SidebarSection
