import React from 'react'
import '../assets/styles/header.css'
import '../assets/styles/banner.css'

import Button from '@mui/material/Button';

export default function Header() {
    return (
        <>
            <div className='nav'>
                <div>
                    <img src="" alt="Logo" />
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button>Docs</button>
                    <button>About</button>
                    <Button variant="outlined">Support Us</Button>
                </div>

            </div>
            <div className='banner' style={{
                display: 'flex', justifyContent: 'center',
                height: '250px', marginTop: '50px', alignItems: 'center', marginBottom: '20px'
            }}>
                <div style={{ fontSize: '5rem', fontWeight: '900', color: 'white' }}>
                    The Rick and Morty API
                </div>

            </div>
        </>

    )
}
