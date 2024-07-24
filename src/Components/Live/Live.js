import './Live.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { changePage } from '../../actions';

const Live = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("Live"))
      }, []);

    return (
        <>
        <div className="Main">
        <h1>This is Live</h1>
        <h2>What color is the Navbar? Does it change for a particular Tab?</h2>
        </div>
        </>
    )
}

export default Live


