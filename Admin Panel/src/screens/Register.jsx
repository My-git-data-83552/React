import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import { register } from "../services/admin";

function Register() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate()

    const signUp = async () => {
        if (firstName.length == 0) {
            toast.error('Idiot! You have not Entered the First Name');
        }
        else if (lastName.length == 0) {
            toast.error('Idiot! You have not Entered the Last Name');
        }
        else if (email.length == 0) {
            toast.error('Idiot! You have not Entered the Email');
        }

        else if (password.length == 0) {
            toast.error('Idiot! You have not Entered the Password');
        } else if (confirmPassword.length == 0) {
            toast.error('Idiot! You have not Entered the Password again');
        } else if (password != confirmPassword) {
            toast.error('Moron! Password do not Match!');
        }
        else {
            const result = await register(firstName, lastName, email, password)
            if (result['status'] == 'success') {
              toast.success('Successfully registered a new user')
              navigate('/login')
            } else {
              toast.error(result['error'])
            }
        }
    }
    const goBack = () => {
        navigate('/login')
    }

    return (<div style={{paddingTop: '100px'}}>
        
        <div className="row" >
            <div className="col-1"></div>
            <div className="col-7" style={{backgroundColor :'beige'}}>
                <img style={{width:'650px' ,height: '600px'}} src="https://ideogram.ai/api/images/direct/xE1I_BMUR1GBp47cycVzDw.jpg" alt="" />
            </div>
            <div className="col-4" style={{backgroundColor :'beige'}}>
                <div>
                    <div className="mt-3 mb-5"><h2 style={{textAlign: 'center', fontWeight:'bold'}}>REGISTER HERE BRO!</h2></div>
                    <div className="mb-3">
                        <label htmlFor='FirstName'>First Name</label>
                        <input
                            onChange={(e) => { setFirstName(e.target.value) }}
                            type="text" className="form-control" placeholder="First Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='lastName'>Last Name</label>
                        <input
                            onChange={(e) => { setLastName(e.target.value) }} type="text" className="form-control" placeholder="Last Name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='email'>Email</label>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" className="form-control" placeholder="Email@test.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='password'>Password</label>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            type='password' className="form-control" placeholder="Password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='confirm Confirm Password'></label>
                      re-enter Password:  <input
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                            type='password' className="form-control" placeholder="re-enter Password" />
                    </div>
                    <div className="mb-3 mt-3" style={{textAlign: 'center'}}>
                        Already have an account? <Link to='/login'>Login Here!</Link>
                    </div>
                    <div className="mt-4" style={{textAlign: 'center'}}>
                    <button onClick={goBack} className="btn btn-warning me-4">Go Back</button>
                        <button onClick={signUp} className="btn btn-primary">Register</button>
                        
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}
export default Register