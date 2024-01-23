import React, { useEffect, useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import isEqual from 'lodash/isEqual';


const Search = ({data, searchedMovie, setSearchedMovie}) => {
    const [selectedOption, setSelectedOption] = useState('default');
    const [searchText, setSearchText] = useState("")


    const handleSortChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    const handleSearch = () => {
        const filteredMovies = data.filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchedMovie(filteredMovies);
        
    };


    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    useEffect(() => {
        let sortedData = [...searchedMovie];
        if (selectedOption === 'episode') {
            sortedData.sort((a, b) => a.episode_id - b.episode_id);
        } else if (selectedOption === 'year') {
            sortedData.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
        }

        if (!isEqual(sortedData, searchedMovie)) {
            setSearchedMovie(sortedData);
        }
    }, [selectedOption, searchedMovie]);

  return (
    <>
        <div className='flex items-center p-5 gap-2 bg-slate-100'>
                <select value={selectedOption} onChange={handleSortChange} className='w-20 h-10 bg-blue-100 flex-6'>
                    <option value='default'>Sort by...</option>
                    <option value='episode'>Episode</option>
                    <option value='year'>Year</option>
                </select>
                <div className='flex  items-center flex-1 relative'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='cursor-pointer absolute left-3 translateY-[-50%]' onClick={handleSearch} />
                    <input className='m-0 w-full pl-10 pt-3 pb-3  rounded-md ' autoFocus type='text' value={searchText} placeholder='Type to search...'
                        onChange={handleChange} onKeyDown={handleKeyDown}
                    />
                </div>
            </div>
            <hr />
    </>
  )
}

export default Search