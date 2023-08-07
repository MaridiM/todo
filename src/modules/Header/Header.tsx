import { useDispatch } from "react-redux"
import { useState } from "react"

import { setSearchValue } from "redux/slices/filterSlice"
import { Filter, HeaderTitle, Input } from "components"

import { SearchSVG } from "assets/icons"

const Header = () => {

    const [inputValue, setInputValue] = useState('');
    const dispatch =  useDispatch();

    return (
        <div className="header">
            <HeaderTitle/>
            <Input
                id='search'
                value={inputValue}
                icon={<SearchSVG className='input-icon' />}
                button
                buttonText='Search'
                placeholder="Search todo"
                onChange={e => setInputValue(e.target.value)}
                onClick={() => dispatch(setSearchValue(inputValue))}
            />
            <Filter />
        </div>
    )
}

export default Header