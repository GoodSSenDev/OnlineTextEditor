import styles from './style.css'


function Nav(props) {

    return (
        <div className="navBar">
            <div className="verticalCenterFlex">
                <div className="brand">
                    <h1>Online Text Editor</h1>
                </div>
                <button className="navButton">
                    <h2>Files</h2>
                </button>
            </div>
            <div>
            </div>
            <div>
                <button className="navButton">
                    <h2>Register</h2>
                </button>
                <button className="navButton">
                    <h2>Login</h2>
                </button>
            </div>
        </div>
    )
}

export default Nav  