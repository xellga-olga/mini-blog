import './LoginPage.css'

export const LoginPage = ({ setIsLoggedIn }) => {

    const logIn = () => {
        setIsLoggedIn(true)
    }

    return (
        <form className="loginForm" onSubmit={logIn}>
            <h1>Log In</h1>
            <div>
                <input type="text" placeholder="Login" name="login"  required />
            </div>
            <div>
                <input type="password" placeholder="Password" name="password" required/>
            </div>
            <div>
                <button type='submit'>
                    OK
                </button>
            </div>
        </form>
    )
};