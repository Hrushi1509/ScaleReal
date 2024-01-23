import React, { useState } from 'react'

const Body = ({ searchedMovie }) => {
    const [selectedMovie, setSelectedMovie] = useState();

    const handleClick = (item) => {
        setSelectedMovie(item)
    }
    return (
        <>
            <div className='m-3'>
                <div className='flex'>
                    <div className='flex-1 flex flex-col'>
                        {
                            searchedMovie?.map((item) => (
                                <>
                                    <div className=' flex cursor-pointer p-2' key={item.episode_id} onClick={() => handleClick(item)} >
                                        <div className='w-24'>Episode {item.episode_id}</div>
                                        <div className='w-80'>{item.title}</div>
                                        <div className='w-24'>{item.release_date}</div>
                                    </div>
                                    <hr />
                                </>
                            ))

                        }
                    </div>
                    <div className='flex-1'>
                        {
                             selectedMovie ?
                                (
                                    <div className='flex flex-col gap-3 m-3'>
                                        <div className='font-bold text-3xl'>{selectedMovie?.title}</div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-zinc-600'>
                                                {selectedMovie?.opening_crawl}
                                            </p>
                                            <p className='text-zinc-600'>Directed By: {selectedMovie?.director}</p>
                                        </div>
                                    </div>
                                ) :
                                (
                                    <div className='flex justify-center items-center h-screen font-medium '>No Movie Selected</div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body