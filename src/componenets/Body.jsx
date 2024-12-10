import React, { useEffect, useState } from 'react'
import Cards from './Cards'
export default function Body() {
    const [dataAPI, setData] = useState([])
    // const details = {
    //     name: 'Rick',
    //     status: 'Alive',
    //     type: 'Human',
    //     lastKnownLocation: 'Earth',
    //     firstSeen: 'Earth',
    //     img: 'https://rickandmortyapi.com/api/character/avatar/165.jpeg',
    // }
    useEffect(() => {
        const data = async () => {
            const request = await fetch('https://rickandmortyapi.com/api/character', {
                method: 'GET'
            })
            const response = await request.json()
            let cards = response.results
            setData(() => cards)
        }
        data()
    }, [])
    const changeHandler = async (e) => {
        console.log("hi")
        const request = await fetch(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`, {
            method: 'GET'
        })
        const response = await request.json()
        let cards = response.results
        setData(() => cards)
        console.log(cards)

    }
    return (
        <div>
            <input type="text" onChange={changeHandler}/>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                {dataAPI.map((item) => <Cards props={item} />)}

            </div>
        </div>
    )
}
