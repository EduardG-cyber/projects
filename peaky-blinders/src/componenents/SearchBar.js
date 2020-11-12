import React from 'react'
import '../css/SearchBar.css'

export default function SearchBar(props) {
    return (
        <form className="search-bar">
            <input type="text" name="character" id="character-input"
                value={props.value}
                onChange={(e) => { props.onInputChange(e.target.value) }}
                placeholder="Search for a character"/>
        </form>
    )
}
