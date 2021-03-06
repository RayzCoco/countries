import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

const CountryDetails = () => {
    const { id }= useParams();
    const [country, setCountry] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if(id) {
            fetchData(id)
        }
    }, [])

    const fetchData = (code) => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${code}`).then((res) => {
            if(!res.ok) {
                throw Error('could not fetch data')
            }
            return res.json()
        }).then((data) => {
            setCountry(data)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    const backToPage = () => {
        history.push('/')
    }


    return (
        <div className="country-details">
            <div className="container px-4 md:px-0 mx-auto max-w-screen-xl mt-12">
                <button onClick={() => backToPage()} className="bg-white dark:bg-gray-700 text-black dark:text-gray-200 text-center px-6 py-2 shadow-md rounded text-sm">Back</button>
                { country && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
                        <div>
                            <img className="w-full" src={country.flag} alt="" />
                        </div>
                        <div className="py-6 text-black dark:text-gray-200">
                            <h2 className="mb-4 text-2xl font-bold">{country.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="mb-2 md:mb-0"><span className="font-semibold">Native Name:</span> {country.nativeName}</div>
                                <div className="mb-2 md:mb-0"><span className="font-semibold">Top Level Domain:</span> {country.topLevelDomain}</div>
                                <div className="mb-2 md:mb-0"><span className="font-semibold">Population:</span> {country.population}</div>
                                <div className="mb-2 md:mb-0"><span className="font-semibold">Currencies:</span> {country.currencies.map((current, index) => (
                                   <span key={current.name}>{current.name}</span>
                                ))}</div>
                                <div className="mb-2 md:mb-0"><span className="font-semibold">Region:</span> {country.region}</div>
                                <div className="mb-2 md:mb-0"><span className="font-semibold">Languages:</span> {country.languages.map((lang, index) => (
                                    <span key={lang.name}>{(index ? ', ' : '') + lang.name}</span>
                                ))}</div>
                            </div>
                            <div className="mb-2 md:mb-0"><span className="font-semibold">Sub Region:</span> {country.subregion}</div>
                            <div className="mb-2 md:mb-0"><span className="font-semibold">Capital:</span> {country.capital}</div>
                            <div className="flex items-left md:items-center flex-col md:flex-row mt-5">
                                <div className="mr-2 mb-2 md:mb-0 font-semibold">Border Countries:</div>
                                <div className="flex flex-wrap">
                                    { country.borders.map((border, index) => (
                                        <div key={index} className="bg-white dark:bg-gray-700 text-center px-5 py-2 mr-2 mb-2 md:mb-0 shadow-md rounded text-xs">
                                            <Link onClick={() => fetchData(border)} to={`/country/${border}`}>{border}</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
}
 
export default CountryDetails;