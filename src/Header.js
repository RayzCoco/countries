import { Component } from 'react'

class Header extends Component {
    render() {
        const { handleTheme } = this.props
        return(
            <header className="py-6 bg-white shadow drop-shadow">
                <div className="container px-4 md:px-0 mx-auto max-w-screen-xl">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="font-bold text-lg">Where in the world?</h2>
                        </div>
                        <button className="font-bold text-lg" onClick={() => handleTheme()}>Dark Mode</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header