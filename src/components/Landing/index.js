import React, {useRef, useEffect, useState, Fragment} from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {

    const [button , setButton] = useState(false);
    console.log(button)

    const refBackground = useRef();
    
    useEffect(() => {
        refBackground.current.classList.add('startingImg');
        setTimeout(() =>{
            refBackground.current.classList.remove('startingImg'); 
            setButton(true); 
        },1000)
    }, [])

    const setLeftImg = () => {
        refBackground.current.classList.remove('rightImg');
        refBackground.current.classList.add('leftImg');
    }

    const setRightImg = () => {
        refBackground.current.classList.remove('leftImg');
        refBackground.current.classList.add('rightImg');
    }

    const clearImg = () => {
        if(refBackground.current.classList.contains('leftImg')){
            refBackground.current.classList.remove('leftImg');
        }else if (refBackground.current.classList.contains('rightImg')) {
            refBackground.current.classList.remove('rightImg');
        }
    }

    const displayButton = button && (
        <Fragment>
            <div onMouseOver={setLeftImg} onMouseOut={clearImg} className="leftBox">
                <Link to="signup" className="btn-welcome">Sign Up</Link>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearImg} className="rightBox">
                <Link to="login" className="btn-welcome">Login</Link>
            </div>
        </Fragment>
    )
 
    return (
        <main ref={refBackground} className="welcomePage">
            {displayButton}
        </main>
    )
}

export default Landing
