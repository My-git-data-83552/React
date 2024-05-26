import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()
    const signUp = () => {
        if (firstName.length == 0) {
            toast.error('You have not Entered the First Name');

        }
        else if (lastName.length == 0) {
            toast.error('You have not Entered the Last Name');
        }
        else if (email.length == 0) {
            toast.error('You have not Entered the Email');
        }

        else if (password.length == 0) {
            toast.error('You have not Entered the Password');
        }
        else {
            toast.success('Successfully registered a new user')
            navigate('/login')
        }
    }
    const goBack = () => {
        navigate('/login')
    }

    return (<div>
        <div className="row">
            <div className="col"></div>
            <div className="col">
                <div>
                    <div className="mb-2">
                        <label htmlFor='FirstName'></label>
                        <input
                            onChange={(e) => { setFirstName(e.target.value) }}
                            type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='lastName'></label>
                        <input
                            onChange={(e) => { setLastName(e.target.value) }} type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='email'></label>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" className="form-control" placeholder="Email@test.com" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor='password'></label>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            type='password' className="form-control" placeholder="********" />
                    </div>
                    <div className="mb-2">
                        Already have an account? <Link to='/login'>Login Here!</Link>
                    </div>
                    <div className="mt-3">
                        <button onClick={signUp} className="btn btn-primary me-3">Register</button>
                        <button onClick={goBack} className="btn btn-warning">Go Back</button>
                    </div>
                </div>
            </div>
            <div className="col"></div>
        </div>
    </div>
    )
}
export default Register