import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as BiIcons from 'react-icons/bi';
import * as GrIcons from 'react-icons/gr';
import * as HiIcons from 'react-icons/hi';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HiIcons.HiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'About Me',
    path: '/reports',
    icon: <BiIcons.BiUser />,
    cName: 'nav-text'
  },
  {
    title: 'Skills',
    path: '/products',
    icon: <GiIcons.GiSkills />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/team',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  }
];