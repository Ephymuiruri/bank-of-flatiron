import React from "react";

// Bank Data 
function Search ({setSearch}){
function handleChange (e){
const searchValue = e.target.value
setSearch(searchValue)
}
return(
    <input id="searchArea" type="text" onChange={handleChange} placeholder="Search your recent transactions"></input>
)
}
export default Search
/* */