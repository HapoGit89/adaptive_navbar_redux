import './Live.css'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Live = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch({type: "CHANGE", payload: {page: "Live"}})
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


