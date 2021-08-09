import { Component } from 'react'
import Search from './Search'
import Filter from './Filter'

class SearchFilter extends Component {
    render() {
        const { countries } = this.props
        return(
            <div className="container px-4 md:px-0 mx-auto max-w-screen-xl">
                <div className="mt-16 flex items-center justify-between">
                    <Search inputFilter={this.props.inputFilter} />
                    <Filter handleFilter={this.props.handleFilter} countries={countries} />
                </div>
            </div>
        )
    }
}

export default SearchFilter