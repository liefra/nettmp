import type {NextPage} from 'next'
import * as React from 'react'
import {Header} from "../components/Header";
import 'mapbox-gl/dist/mapbox-gl.css'


const Home: NextPage = () => {


    return (
        <>
            <div className="min-h-full">
                <header className="sticky top-0 z-50"> <Header /></header>

            </div>
        </>
    )
}


export default Home
