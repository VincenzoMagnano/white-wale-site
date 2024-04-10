import { ChangeEvent, useState } from 'react'
import './SignUpPage.css'
import { useNavigate } from 'react-router-dom'

interface FormDataProps {
  id: number
  completename: string
  email: string
  password: string
  cellnumber: string
}

const SignUpPage = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState<FormDataProps>({
    id: 0,
    completename: '',
    email: '',
    password: '',
    cellnumber: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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

  return (

    <>
      <div className="SignUpPage">
        <div className="Rectangle-2">
          <div className="Rectangle-6">
            <img className="white-wale-logo" src="white-wale-logo.png" alt="" />
            <span className="Login">
              Sign-<span className='text-style-1'>
                up
              </span>
            </span>
            <form onSubmit={handleSubmit} >
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
                    {/*   
                  <div className='input-des'>
                    <label htmlFor="password">
                      REPEAT PASSWORD
                    </label>
                    <input
                      type="password"
                      name="username"
                      required />
                  </div>*/}
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
                  <button className="Login-Button" type="submit">SUBMIT</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUpPage
