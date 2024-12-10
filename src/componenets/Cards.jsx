import React from 'react'

export default function Cards({ props }) {
    console.log(props)
    return (
        <div style={{ display: 'flex', border: '2px solid black', backgroundColor: 'rgb(158, 158, 158)', borderRadius: '15px' }}>
            <div className='avatar'>
                <img src={props.image} alt="avatar" style={{ overflow: 'hidden' }} />
            </div>
            <div className='Details' style={{ display: 'flex', gap: '5px', flexDirection: 'column', justifyContent: 'space-around' }}>
                <div>{props.name}</div>
                <div>
                    <div>
                        {props.status}
                    </div>
                    <div>
                        {props.type}
                    </div>
                </div>
                <div><span>Last Known Location</span><br />{props.lastKnownLocation}</div>
                <div>
                    {props.firstSeen}
                </div>



            </div>
        </div>
    )
}
