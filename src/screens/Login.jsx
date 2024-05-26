import { useState } from "react"
import { Link } from "react-router-dom"


function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className='mb-3'>
            <div className="row">
                <div className="col-4"></div>

                <div className="col-4 mt-5">
                    <div className="mb-2">
                        <label htmlFor='email'>Email</label>
                        <input type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control" placeholder="name@example.com" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='password'>Password</label>
                        <input type="password" 
                         onChange={(e) => setPassword(e.target.value)}
                         className="form-control" placeholder="Password" />
                    </div>
                    <div>
                       Not have an Account? <Link to='/register'> Register Here!</Link>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-success">LOG IN</button>
                    </div>
                </div>
                <div className="col-4">
                </div>
            </div>
        </div>
    )
}
export default Login