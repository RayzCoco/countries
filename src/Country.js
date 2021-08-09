import { Component } from 'react'
import { Link } from 'react-router-dom'

class Country extends Component {
    render() {
        const { countries, newCountries, isLoaded } = this.props
        const dataChanged = () => {
            if(newCountries.length) {
                if(isLoaded) {
                    return (
                        newCountries.map((country, index) => {
                            return (
                                <Link to={`/country/${country.alpha3Code}`}>
                                    <div className="bg-white shadow drop-shadow h-full" key={index}>
                                        <div>
                                            <img src={country.flag} alt="" />
                                        </div>
                                        <div className="p-6">
                                            <h2 className="font-bold mb-4">{country.name}</h2>
                                            <div>
                                                <span>Population: {country.population}</span>
                                            </div>
                                            <div>
                                                <span>Region: {country.region}</span>
                                            </div>
                                            <div>
                                                <span>Capital: {country.capital}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    ) 
                }else {
                    return (
                        <div>
                            Loading countries...
                        </div>
                    )
                }
            }else {
                if(isLoaded) {
                    return (
                        countries.map((country, index) => {
                            return (
                                <Link to={`/country/${country.alpha3Code}`}>
                                    <div className="bg-white shadow drop-shadow h-full" key={index}>
                                        <div>
                                            <img src={country.flag} alt="" />
                                        </div>
                                        <div className="p-6">
                                            <h2 className="font-bold mb-4">{country.name}</h2>
                                            <div>
                                                <span>Population: {country.population}</span>
                                            </div>
                                            <div>
                                                <span>Region: {country.region}</span>
                                            </div>
                                            <div>
                                                <span>Capital: {country.capital}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    )
                }else {
                    return(
                        <div>
                            Loading countries...
                        </div>
                    )
                }
            }
        }
        return(
            <div className="container px-4 md:px-0 mx-auto max-w-screen-xl mt-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    { dataChanged() }
                </div>
            </div>
        )
    }
}

export default Country