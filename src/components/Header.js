import React from 'react'
import { tagName } from '../Data';
import { behance_logo } from '../Data';
import { adobe_cloude } from '../Data';
import { adobeLogo } from '../Data';
import { searchType } from '../Data';


import { IoSearchSharp } from 'react-icons/io5'
import { MdClose } from 'react-icons/md'
import { MdArrowDropDown } from 'react-icons/md'
import { GrMenu } from 'react-icons/gr'



const openMenu = () => {
    const main_header = document.getElementById('main_header');
    const menu = document.getElementById('menu');
    main_header.classList.toggle('menuopen');
    menu.classList.toggle('phone-menu');
}
const closeMenu = () => {
   openMenu();
}




const Header = () => {

    return (
        <>
            <header id='main_header' className='header'>
                <div id='menu' className='menu ease-in-out block lg:hidden duration-500 fixed top-0 left-0 z-20  bg-white shadow-lg w-[70%] h-[100%] p-5'>
                    <div className="close-icon text-3xl absolute top-4 cursor-pointer right-3 text-[#777] " onClick={() => closeMenu()}>
                        <MdClose />
                    </div>
                    <ul className=''>
                        <li className='m-4 font-medium'><a href="http://" target="_blank" rel="noopener noreferrer">Discover</a></li>
                        <li className='m-4 font-medium'><a href="http://" target="_blank" rel="noopener noreferrer">Livestreams</a></li>
                        <li className='m-4 font-medium'><a href="http://" target="_blank" rel="noopener noreferrer">For You</a></li>
                        <li className='m-4 font-medium'><a href="http://" target="_blank" rel="noopener noreferrer">Hire</a></li>
                    </ul>
                </div>
                <div className='border-b bg-white fixed w-full top-0 z-10'>
                    <div className="top-header py-4 lg:py-3 px-5 border-b border">
                        <div className="container-fluid mx-auto">
                            <div className="nav-bar flex items-center justify-between">
                                <div className="brand-logo flex items-center">
                                    <div className="mobile-icn cursor-pointer block lg:hidden mr-3 " onClick={() => openMenu()}>
                                        <GrMenu />
                                    </div>
                                    <img src={behance_logo} alt={behance_logo} className="w-auto h-4" />
                                    <div className="page-links ml-10 hidden lg:block">
                                        <ul className='flex items-center'>
                                            <li className='mx-4 font-medium active'><a href="http://" target="_blank" rel="noopener noreferrer">For You</a></li>
                                            <li className='mx-4 font-medium active'><a href="http://" target="_blank" rel="noopener noreferrer">Discover</a></li>
                                            <li className='mx-4 font-medium active'><a href="http://" target="_blank" rel="noopener noreferrer">Livestreams</a></li>
                                            <li className='mx-4 font-medium active'><a href="http://" target="_blank" rel="noopener noreferrer">Hire</a></li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="mobile-icn cursor-pointer block text-xl lg:hidden mr-3">
                                    <IoSearchSharp />
                                </div>
                                <div className='hidden lg:block'>
                                    <div className="action-side flex justify-between items-center ">
                                        <div className="login-btn mr-4 py-1 px-4 rounded-full border bg-[#f5f8ff] border-[#dee8ff]">
                                            <a className='font-medium text-md text-[#0057ff]' href="">Log In</a>
                                        </div>
                                        <div className="signup-btn py-1 px-4 rounded-full border bg-[#0057ff] border-[#0057ff]">
                                            <a href="" className='font-medium text-md text-[#fff]'>Sign Up</a>
                                        </div>
                                        <span className='mx-4'>|</span>
                                        <div className="free-trila flex items-center py-1 px-4 rounded-full border">
                                            <div className="cloud-icon pr-2">
                                                <img src={adobe_cloude} alt="" className='w-6 h-6' />
                                            </div>
                                            <a href="" className='font-medium text-md '>Free Trial</a>
                                        </div>
                                        <div className="adobe-logo mx-4">
                                            <a href="" className='flex items-center'>
                                                <img src={adobeLogo} alt="" className='w-5 h-5' />
                                                <span className='pl-1 font-bold text-md'>Adobe</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="search-actioh px-5 py-5">
                        <div className="container-fluid">
                            <div className="search-item w-full flex items-center  border-2 rounded-full justify-between   overflow-hidden bg-[#f9f9f9]">
                                <div className="input-box relative  lg:w-full">
                                    <input type="text" placeholder='Search the creative world at work' className='pl-16 w-[90%] text-ellipsis lg:w-full outline-none  border-none text-xl text-[#222] bg-transparent placeholder:text-[#777] font-bold' />
                                    <div className="search-icon text-3xl absolute top-[-1px] left-4 text-[#777]">
                                        <IoSearchSharp />
                                    </div>
                                    <div className="close-icon text-3xl absolute top-[-1px] right-3 text-[#777] hidden lg:block">
                                        <MdClose />
                                    </div>
                                </div>
                                <div className="tags-search bg-white border-l px-4 py-3">
                                    <ul className='flex items-center'>
                                        <li className='lg:bg-black mx-1 lg:text-white text-sm rounded-full font-medium py-1 lg:px-4'><a href="http://" target="_blank" rel="noopener noreferrer">Projects</a></li>
                                        <div className="dn-arow">
                                            <MdArrowDropDown />
                                        </div>
                                        {searchType.map((items) => (
                                            <li className='hover:bg-[#f0f0f0] hidden lg:block mx-1 text-black text-sm rounded-full font-medium py-1 px-4'><a href="http://" target="_blank" rel="noopener noreferrer">{items.sItems}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='hidden lg:block'>
                                <div className="tags flex justify-between items-center py-5 ">
                                    <div className="tag-item flex items-center">
                                        {
                                            tagName.map((data) => (
                                                <div className="tags-list flex justify-between items-center px-3 py-2 border mx-2 rounded-md border-gray-300 hover:border-black cursor-pointer ease-in-out">
                                                    <div className="tag-icon">
                                                        {data.tagsIcon}
                                                    </div>
                                                    <div className="tag-name px-3">
                                                        <p className='font-bold text-sm'>{data.tags}</p>
                                                    </div>
                                                    <div className="dn-arow">
                                                        <MdArrowDropDown />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className="recmn-menu">
                                        <span className='font-bold text-xs text-[#333]'>
                                            Sort
                                        </span>
                                        <div className="flex items-center">
                                            <p className='text-sm'>Recommended</p>
                                            <div className="dn-arow">
                                                <MdArrowDropDown />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>


        </>
    )
}

export default Header