import { Button } from "components/Button"
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setAuth } from 'redux/slices/utilitiesSlice'

const HeaderTitle = () => {
    const dispatch = useDispatch();
    return (
        <header>
            <h1>TODO LIST</h1>
            <Link to={'/login'}><Button text='Logout' onClick={() => dispatch(setAuth(false))} /></Link>
        </header>
    )
}

export default HeaderTitle