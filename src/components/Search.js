import React from 'react'

function Search({search, setSearch}) {
    return (
        <div className="col col-sm-4">
        <input type="text" className="form-control"
            placeholder="Type to search..."
            value={search}
            onChange={(event)=>{setSearch(event.target.value)}}
        />
            
        </div>
    )
}

export default Search
