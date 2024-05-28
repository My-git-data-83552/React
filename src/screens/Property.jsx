import { useNavigate } from 'react-router'
import NavBar from '../components/NavBar.jsx'

function Property(){

    const navigate=useNavigate()

    const addProperty=()=>{
        navigate('/addProperty')
    }

    return (
        <div>
            <h3 style={{textAlign:'center'}}>Property Page</h3>
            <NavBar />
            <button onClick={addProperty} className='btn btn-primary mt-5 me-5'>Add Property</button>
        </div>
    )
}

export default Property