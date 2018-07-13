import React from 'react';
import './header.css'
import './logo.svg'

export default function Header () {
    return (
        <div className='header'>
            <img src='logo.svg' />
            <div className='header-text'>SHELFIE</div>
        </div>
    )
}