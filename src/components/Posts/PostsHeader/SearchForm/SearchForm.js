import React from 'react'
import searchIcon from '../../../../assets/image/search.svg'
import './SearchForm.css'

export const SearchForm = () => {
  return (
   <form className='searchForm'>
    <input type='text' placeholder='Search'></input>
    <img src={searchIcon} alt='search'/>
   </form>
  )
}
