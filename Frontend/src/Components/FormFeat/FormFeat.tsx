
import { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../Pages/LoginPages/LoginPage.css"
import "../../Pages/SignUpPage/SignUpPage.css"

interface FormDataProps {
    id: number
    completename: string
    email: string
    password: string
    confirmPassword: string
    cellnumber: string
}

const FormFeat = () => {
    const navigate = useNavigate()
    const [showLogin, setShowLogin] = useState(true)
    const [password, setPassword] = useState(false)
    const [formData, setFormData] = useState<FormDataProps>({
        id: 0,
        completename: '',
        email: '',
        password: '',
        confirmPassword: '',
        cellnumber: ''
    })



    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            setPassword(true)
        } else {
            try {
                const response = await fetch('http://localhost:4000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                })
                const data = await response.json()
                data.success ? navigate('/LandingPage') : alert('Utente esistente')
            } catch (error) {
                console.log(error, 'Error')
            }
        }
    }

    const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    };

    return (
        <>
            <form onSubmit={showLogin ? handleLoginSubmit : handleSignUpSubmit}>
                {
                    showLogin
                        ? (
                            <div className='LoginPage'>
                                <div className="Rectangle-1">
                                    <div className="Rectangle-5">
                                        <img className='white-wale-logo' src="white-wale-logo.png" alt="" />
                                        <span className="Login">
                                            Login
                                        </span>



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


                                    </div>
                                    <div className="sign-in-div">

                                        <span className="sign-in-des">
                                            Non sei ancora registrato?
                                            Compila il form di registrazione!
                                        </span>
                                        <button
                                            onClick={() => setShowLogin(false)}
                                            type='submit'
                                            className="Register-Button">Clicca Qui</button>
                                    </div>
                                </div>
                            </div>


                        )
                        : (
                            <div className="SignUpPage">
                                <div className="Rectangle-2">
                                    <div className="Rectangle-6">
                                        <img className="white-wale-logo" src="white-wale-logo.png" alt="" />
                                        <span className="Login">
                                            Sign-<span className='text-style-1'>
                                                up
                                            </span>
                                        </span>

                                        <div className="distribute">
                                            <div>

                                                <div className='input-des'>
                                                    <label htmlFor="text">
                                                        NOME E COGNOME
                                                    </label>
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        id="text"
                                                        name="completename"
                                                        value={formData.completename}
                                                        required />
                                                </div>
                                                <div className='input-des'>
                                                    <label htmlFor="email">
                                                        E-MAIL
                                                    </label>
                                                    <input
                                                        onChange={handleChange}
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        required />
                                                </div>
                                                <div className='input-des'>
                                                    <label htmlFor="password">
                                                        PASSWORD
                                                    </label>
                                                    <input
                                                        onChange={handleChange}
                                                        type="password"
                                                        name="password"
                                                        value={formData.password}
                                                        required />
                                                </div>
                                            </div>
                                            <div>

                                                <div className='input-des'>
                                                    <label htmlFor="password">
                                                        REPEAT PASSWORD
                                                    </label>
                                                    <input
                                                        onChange={handleChange}
                                                        type="password"
                                                        name="confirmPassword"
                                                        value={formData.confirmPassword}
                                                        required />
                                                    <p style={{
                                                         color: 'red', textAlign: 'center'
                                                          }}>{password ? 'Le password non corrispondono' : ''}</p>
                                                </div>
                                                <div className='input-des'>
                                                    <label htmlFor="cell-number">
                                                        CELL NUMBER
                                                    </label>
                                                    <input
                                                        onChange={handleChange}
                                                        type="text"
                                                        name="cellnumber"
                                                        value={formData.cellnumber}
                                                        required />
                                                </div>
                                                <button className="Login-Button" type="submit">REGISTRATI</button>
                                                <p 
                                                style={{ fontWeight: 'bold', textAlign: 'center' }}>
                                                    Già registrato?
                                                    <span 
                                                    style={{
                                                         color: 'grey',
                                                          cursor: 'pointer',
                                                           textDecoration: 'underline',
                                                           fontFamily:'Bebas Neue',
                                                           letterSpacing: '1px',
                                                         }} 
                                                    onClick={() => setShowLogin(true)}>Login</span></p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        )
                }
            </form>
        </>
    );
}

export default FormFeat
