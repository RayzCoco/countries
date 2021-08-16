import './App.css';
import Header from './Header'
import SearchFilter from './SearchFilter'
import Country from './Country'
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CountryDetails from './CountryDetails';

class App extends Component {
  state = {
    countries: [],
    newCountries: [],
    isLoaded: false,
    isDarkMode: false
  }

  componentDidMount() {
    const body = document.body
    if(this.state.isDarkMode === false) {
      body.classList.add('light')
    }else {
      body.classList.add('dark')
    }

    fetch('https://restcountries.eu/rest/v2/all').then((res) => {
      if(!res.ok) {
        throw Error("could not fetch the data")
      }
      return res.json()
    }).then((data) => {
      this.setState({
        countries: data.slice(0, 10),
        isLoaded: true
      })
    }).catch((err) => {
      console.log(err.message)
    })
  }

  handleFilter = (selected) => {
    let newCountries = this.state.countries.filter((country) => {
      return country.region === selected
    })
    this.setState({
      newCountries: newCountries
    })
  }

  inputFilter = (input) => {
    let newCountries = this.state.countries.filter((country) => {
      return country.name.toLowerCase() === input.toLowerCase()
    })
    this.setState({
      newCountries: newCountries
    })
  }

  handleTheme = () => {
    const body = document.body
    this.setState(( prevState ) => ({
      isDarkMode: !prevState.isDarkMode
    }))
    if(this.state.isDarkMode === false) {
      body.classList.add('dark')
      body.classList.remove('light')
    }else {
      body.classList.add('light')
      body.classList.remove('dark')
    }
  }

  render() {
    return (
      <Router>
        <div className="App bg-gray-100 dark:bg-gray-800 pb-20">
          <Header handleTheme={this.handleTheme} isDarkMode={this.state.isDarkMode} />
          <Switch>
            <Route exact path="/">
              <SearchFilter inputFilter={this.inputFilter} countries={this.state.countries} handleFilter={this.handleFilter} />
              <Country isLoaded={this.state.isLoaded} countries={this.state.countries} newCountries={this.state.newCountries} />
            </Route>
            <Route path="/country/:id">
              <CountryDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
