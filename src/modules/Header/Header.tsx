import { FC } from "react"
import { SearchSVG } from "assets/icons"
import { useDispatch, useSelector } from "react-redux"
import { Filter, HeaderTitle, Input } from "components"
import { setSearchValue } from "redux/slices/todosSlice"

interface Props { }

const Header: FC<Props> = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector((state: any) => state.todosReducer.searchValue)

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