import { FC, useCallback, useRef, useState } from "react"
import { SearchSVG } from "assets/icons"
import { useDispatch } from "react-redux"
import debounce from 'lodash.debounce'
import { Filter, HeaderTitle, Input } from "components"
import { setSearchValue } from "redux/slices/todosSlice"

interface Props { }

const Header: FC<Props> = () => {
    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const [localSearchValue, setLocalSearchValue] = useState('')

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 350), [],
    )

    const onChangeInput = (event) => {
        setLocalSearchValue(event.target.value)
        updateSearchValue(event.target.value)
    }

    const clearFocusInput = () => {
        setLocalSearchValue('')
        dispatch(setSearchValue(''))
        inputRef.current.focus()
    }

    return (
        <div className="header">
            <HeaderTitle/>
            <Input
                inputRef={inputRef}
                value={localSearchValue}
                id='search'
                icon={<SearchSVG className='input-icon' />}
                button
                buttonText='Clear'
                placeholder="Search todo"
                onChange={onChangeInput}
                onClick={clearFocusInput}
            />
            <Filter />
        </div>
    )
}

export default Header