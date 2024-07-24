import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changePage } from "../../actions";
import './Studio.css'

const Studio = () => {
    const dispatch = useDispatch()
        // change Redux store after component renders for navbar conditional rendering
    useEffect(() => {
        dispatch(changePage("Studio"))
      }, []);
    return (
        <>
        <div className="Main">
        <h1>This is Studio</h1>
        <h2>What color is the Navbar? Does it change for a particular Tab?</h2>
        </div>
        </>
    )
}

export default Studio


