const Search = ({ inputFilter }) => {
    const inputValue = (e) => {
        inputFilter(e.target.value)
    }
    return (
        <div>
            <input onChange={(e) => inputValue(e)} className="py-2 px-3 shadow drop-shadow rounded text-sm md:text-base md:py-3 md:px-5" type="text" placeholder="Search for a country..." />
        </div>
    );
}
 
export default Search;