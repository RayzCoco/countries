const Filter = ({ handleFilter }) => {
    const handleChange = (e) => {
        handleFilter(e.target.value)
    }
    return (
        <div>
            <select defaultValue={'default'} onChange={(e) => handleChange(e)}>
                <option value="default" disabled hidden>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}
 
export default Filter;