import { useState } from 'react'
import './SignUpPage.css'

interface FormDataProps {
  id: number
  completename: string
  email: string
  password: string
  cellnumber: number
}

const SignUpPage = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    id: 0,
    completename: '',
    email: '',
    password: '',
    cellnumber: 0
  })
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
            <form action="submit"
            >
              <div className="distribute">
                <div>

                  <div className='input-des'>
                    <label htmlFor="text">
                      NOME E COGNOME
                    </label>
                    <input 
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
                    type="password" 
                    id="username" 
                    name="username"
                    value={formData.password} 
                    required />
                  </div>
                </div>
                <div>

                  <div className='input-des'>
                    <label htmlFor="password">
                      REPEAT PASSWORD
                    </label>
                    <input type="password" id="username" name="username" required />
                  </div>
                  <div className='input-des'>
                    <label htmlFor="cell-number">
                      CELL NUMBER
                    </label>
                    <input type="text" id="cell-number" name="cell-number" required />
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
