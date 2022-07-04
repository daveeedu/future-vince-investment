import React from 'react';
import * as FiIcons from 'react-icons/fi'
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'

export const AdminSidebarData = [
    {
        title: 'Admin',
        path: '/AdminDash2',
        icon: <MdIcons.MdOutlineDashboard />,
        cName2: 'nav-text2'
    },
    {
        title: 'Users',
        path: '/Users',
        icon: <FiIcons.FiUser />,
        cName2: 'nav-text2'
    },
    {
        title: 'Account Security',
        path: '/AdminSecuritySettings',
        icon: <BiIcons.BiLockAlt />,
        cName2: 'nav-text2'
    }
]
