import React from 'react'
import logo from '../icons/communication.png';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
export default function Groups() {
    return (
        <div className='list-container'>
            <div className='ug-header'>
                <img
                    src={logo}
                    style={{ height: "2rem", width: "2rem" }}
                    alt='logo' />
                <p className='ug-title'>Available Groups</p>
            </div>
            <div className='sb-search'>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder='Search' className='search-box' />
            </div>
            <div className='ug-list'>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test group</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test group</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test group</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test group</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test group</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test group</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test group</p>
                </div>
                <div className='list-item'>
                    <p className='con-icon'>T</p>
                    <p className='con-title'>Test group</p>
                </div>

            </div>
        </div>
    )
}
