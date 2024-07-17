import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Studio = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch({type: "CHANGE", payload: {page: "Studio"}})
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


