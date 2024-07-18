import './Contact.css'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changePage } from '../../actions';

const Contact = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(changePage("Contact"))
      }, []);
      
    return (
        <div className="Main">
            <h1>This is Contact</h1>
            <h2>What color is the Navbar? Does it change for a particular Tab?</h2>
        </div>
    )
}

export default Contact