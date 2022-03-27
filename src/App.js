import "./index.css"
import useLocalStorage from "use-local-storage";

function App() {

 const [theme, setTheme] = useLocalStorage('theme' ? "dark" : "light")
 const switchTheme = () =>{
   const newTheme = theme === "light" ? "dark" : "light"
   setTheme(newTheme)
 }
 


  return (
<div className="app" data-theme={theme} >
      <div className="login">
        <h1>Login</h1>
        <div className="container">
          <div className="top">
          <i class='fab fa-google'></i>
            <i class='fab fa-facebook-square'></i>
            <i class='fab fa-linkedin'></i>
            <i class='fab fa-twitter-square'></i>
            <i class='fab fa-apple'></i>
          </div>
          <p className='divider' ><span>Or</span></p>
          <form action="">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Your Email ' />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter Your Password ' />
            <div className="remember">
              <input type="checkbox"  />
              <p>Remember Me</p>
            </div>
            <button>Log In</button>
          </form>
          <div className="bottom">
            <p>Forget Your Password?</p>
            <a href="/">Reset Password</a>
          </div>
          <p className='create' >Crate Account</p>
        </div>
        <div className="theme-toggle">
          <i onClick={switchTheme}  className='fas fa-toggle-on' ></i>
        </div>
      </div>
    </div>
      
  );
}

export default App;
