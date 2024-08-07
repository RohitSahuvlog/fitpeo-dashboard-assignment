import React, { useId } from 'react'
import { NavLink } from 'react-router-dom';
import { BiLeftArrowCircle, BiSolidChevronRight, BiSolidDashboard, BiSolidColor, BiMoney, BiLogoSlack, BiSolidUserRectangle, BiCube, BiSolidChat, BiLogOut } from 'react-icons/bi'

const menuItem = (menu, key) => {
    return <li key={key} className='relative  text-black text-sm rounded-md pl-2 py-2 my-1.5 transition-all duration-200 hover:bg-blue-900 cursor-pointer'>
        <NavLink to="#" className="flex justify-start items-center">
            <span className='mr-4'>{menu.icon}</span>
            {menu.title}
            <span className="absolute right-5">
            </span>
        </NavLink>
    </li>
}

const Sidebar = ({ isOpen, setIsOpen }) => {
    const uid = useId();
    const menuList = [
        {
            path: '',
            icon: <BiSolidDashboard size={30} />
        },
        {
            path: '',
            icon: <BiCube size={30} />
        },
        {
            path: '',
            icon: <BiSolidUserRectangle size={30} />
        },
        {
            path: '',
            icon: <BiMoney size={30} />
        },
        {
            path: '',
            icon: <BiSolidColor size={30} />
        },
        {
            path: '',
            icon: <BiSolidChat size={30} />
        },
    ];

    return (
        <>


            <aside className={isOpen ? `fixed lg:static z-[100] flex flex-col translate-x-0 transition-all duration-300 w-[100px] bg-white  shadow-xl h-screen lg:block` : `fixed lg:static flex flex-col translate-x-[-250px] w-[250px] bg-blue-950 shadow-xl h-screen hidden`}>
                <div className='flex flex-col h-[90vh]'>
                    <h4 className='flex justify-start items-center text-black text-md font-semibold px-2 py-6 mx-3'>
                        <span className='mr-2 p-1 border-2 rounded'><BiLogoSlack size={35} /></span>
                        {/* Brand name */}
                        <span className='block lg:hidden absolute right-3 text-3xl cursor-pointer' onClick={() => setIsOpen(false)}>
                            <BiLeftArrowCircle />
                        </span>
                    </h4>
                    <ul className='mx-3'>
                        {menuList.map((menu) => menuItem(menu, uid))}
                    </ul>
                </div>
                <div className='flex justify-between items-center rounded-md hover:bg-blue-900 px-2 mb-8 mx-2'>
                    <BiLogOut color='white' size={25}></BiLogOut>
                </div>
            </aside>
        </>
    )
}

export default Sidebar