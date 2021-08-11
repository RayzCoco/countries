import { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Header extends Component {
    state = {
        isDark: false
    }
    render() {
        const { history } = this.props
        const { handleTheme } = this.props
        const changeTheme = () => {
            this.setState({
                isDark: !this.state.isDark
            })
            handleTheme()
        }
        return(
            <header className="py-6 bg-white dark:bg-gray-700 shadow drop-shadow">
                <div className="container px-4 md:px-0 mx-auto max-w-screen-xl">
                    <div className="flex items-center justify-between">
                        <div className="cursor-pointer" onClick={() => history.push('/')}>
                            <h2 className="font-bold text-black dark:text-gray-200 text-lg">Where in the world?</h2>
                        </div>
                        <button className="font-bold text-black dark:text-gray-200 text-lg" onClick={() => changeTheme()}>{this.state.isDark ? 'Light Mode' : 'Dark Mode'}</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default withRouter(Header)