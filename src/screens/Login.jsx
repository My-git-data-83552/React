import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login } from "../services/admin"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    
    const signIn =async () => {
        if (email.length == 0) {
            toast.error('You have not Entered the Email');
        }
        else if (password.length == 0) {
            toast.error('You have not Entered the Password');
        }
        else {
            const result = await login(email, password)
      if (result['status'] == 'success') {
        const data = result['data']

        // persist the token and user name in session storage
        sessionStorage['name'] = data['name']
        sessionStorage['token'] = data['token']

            toast.success('Login Successfully!')
            navigate('/home')
        }
        else {
            toast.error(result['error'])
          }
    }
}

    return (
        <div className='image'>
            
            <div className="row">
                <div className="col-4"><img src="https://wallpapercave.com/wp/wp7706965.jpg" alt="" style={{width:'1400px' , height:'800px'}} />
                </div>
                <div className="col-4"> </div>
                <div className="col-3 mt-5">
                    <div className="mb-2">
                        {/* <h3 style={{color:'cyan'}}>LOGIN</h3> */}
                        <label htmlFor='email'><p style={{color:'cyan'}}>Email</p></label>
                        <input type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control" placeholder="name@example.com" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor='password'><p style={{color:'cyan'}}>Password</p></label>
                        <input type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control" placeholder="Password" />
                    </div>
                    <div>
                        <p style={{color:'cyan'}}>Not have an Account?<Link to='/register'> Register Here!</Link> </p> 
                    </div>
                    <div className="mb-2">
                        <button onClick={signIn} className="btn btn-success">LOG IN</button>
                    </div>
                </div>
                
               
            </div>
        </div>
    )
}
export default Login