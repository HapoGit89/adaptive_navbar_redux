import { useDispatch } from 'react-redux';
import './Home.css'
import { useEffect } from 'react';
import { changePage } from '../../actions';


const Home = () => {
    const dispatch = useDispatch()
    
    // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("Home"))
      }, []);

    return (
        <>
        <div className="Main">
        <h1>This is Home</h1>
        <h2>What color is the Navbar? Does it change for a particular Tab?</h2>
        </div>
        </>
    )
}

export default Home


