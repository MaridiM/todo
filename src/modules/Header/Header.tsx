import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

import { setSearchValue } from "redux/slices/todosSlice"
import { Filter, HeaderTitle, Input } from "components"

import { SearchSVG } from "assets/icons"

const Header = () => {

    const searchValue = useSelector((state: any) => state.todosReducer.searchValue)

    const dispatch =  useDispatch();

    return (
        <div className="header">
            <HeaderTitle/>
            <Input
                value={searchValue}
                id='search'
                icon={<SearchSVG className='input-icon' />}
                button
                buttonText='Clear'
                placeholder="Search todo"
                onChange={e => dispatch(setSearchValue(e.target.value))}
                onClick={() => dispatch(setSearchValue(''))}
            />
            <Filter />
        </div>
    )
}

export default Header