
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {

  const navigate = useNavigate();
 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault(); // previene il comportamento predefinito del form
   const formEl = event.currentTarget;
   const formData = new FormData(formEl);
   for (const pair of formData.entries()) {
     console.log(pair[0], pair[1]);
     navigate('/LandingPage')
   }
 }

  return (
    <>
      <div className='LoginPage'>
        <div className="Rectangle-1">
          <div className="Rectangle-5">
            <img className='white-wale-logo' src="white-wale-logo.png" alt="" />
            <span className="Login">
              Login
            </span>
            <form action="submit"
            onSubmit={handleSubmit}>
              <div className='input-des'>
                <label htmlFor="email">
                  E-MAIL
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className='input-des'>
                <label htmlFor="password">
                  PASSWORD
                </label>
                <input type="password" id="username" name="username" required />
              </div>
              <button className="Login-Button" type="submit">Login</button>
            </form>
          </div>
          <div className="sign-in-div">

          <span className="sign-in-des">
            Non sei ancora registrato?
            Compila il form di registrazione!
          </span>
          <button onClick={() => navigate('/SignUp')} className="Register-Button">Clicca Qui</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
