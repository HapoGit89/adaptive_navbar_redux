import './Coops.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changePage } from '../../actions';

const Coops = () => {
    const dispatch = useDispatch()
    // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("Coops"))
      }, []);

    return (
        <div className="Main">
            <h1>This is Coops</h1>
            <h2>What color is the Navbar? Does it change for a particular Tab?</h2>
        </div>
    )
}

export default Coops