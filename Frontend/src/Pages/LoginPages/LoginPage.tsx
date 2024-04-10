import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import { ChangeEvent, FormEvent, useState } from 'react';
import FormFeat from '../../Components/FormFeat/FormFeat';



//interface FormDataProps {
// email: string
//password: string
//}

function LoginPage() {
  const navigate = useNavigate()

  {/*const navigate = useNavigate()

  const [formData, setFormData] = useState<FormDataProps>({
    email: '',
    password: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene il comportamento predefinito del form

    try {
      const response = await fetch('http://localhost:4000/login', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Errore nella richiesta');
      }

      const responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/LandingPage");
      } else {
        alert(responseData.console.errors);
      }
    } catch (error) {
      console.error('Errore durante la richiesta:', error);
    }
  };*/}




  return (
    <>
    <FormFeat />
      {/* <div className='LoginPage'>
        <div className="Rectangle-1">
          <div className="Rectangle-5">
            <img className='white-wale-logo' src="white-wale-logo.png" alt="" />
            <span className="Login">
              Login
            </span>
          
            <form onSubmit={handleSubmit}>
                
              <div className='input-des'>
                <label htmlFor="email">
                  E-MAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required />
              </div>
              <div className='input-des'>
                <label htmlFor="password">
                  PASSWORD
                </label>
                <input
                  type="password"
                  
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required />
              </div>
              <button className="Login-Button" type="submit">Login</button>
            </form>
          
          </div>
        <div className="sign-in-div">

            <span className="sign-in-des">
              Non sei ancora registrato?
              Compila il form di registrazione!
            </span>
            <button
            onClick={() => navigate('/SignUp')} 
            type='submit' 
            className="Register-Button">Clicca Qui</button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default LoginPage
