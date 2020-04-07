import React from 'react'

const Search = (props) => {
    return (
        <div className='home-search'>
            <div className='search-svg'>
                <button><img src='http://localhost:3000/svg/search.svg' /></button>
            </div>
            <input className='search-text' placeholder='Search' />
        </div>
    )
}

export default Search