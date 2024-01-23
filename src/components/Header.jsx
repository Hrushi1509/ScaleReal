
import React, { useEffect, useState } from 'react'
import Search from './Search';
import Body from './Body';


const Header = ({ data, searchedMovie, setSearchedMovie }) => {
   
    return (
        <>
            <Search data={data} searchedMovie={searchedMovie} setSearchedMovie={setSearchedMovie}/>
            {
                searchedMovie.length > 0 ?
                <Body searchedMovie={searchedMovie}/> 
                :
                (
                    <div className='flex items-center justify-center h-screen font-bold text-2xl'>
                        Loading...
                    </div>
                )
            }
        </>
    )
}

export default Header