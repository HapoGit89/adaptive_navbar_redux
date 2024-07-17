import './Coops.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Coops = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch({type: "CHANGE", payload: {page: "Coops"}})
      }, []);
      
    return (
        <div className="Main">
            <h1>This is Coops</h1>
            <h2>What color is the Navbar? Does it change for a particular Tab?</h2>
        </div>
    )
}

export default Coops