import { SearchSVG } from "assets/icons"
import { Filter, HeaderTitle, Input } from "components"
import { FC } from "react"

interface Props {}

const Header: FC<Props> = () => {
    return (
        <div className="header">
            <HeaderTitle />
            <Input
                id='search'
                icon={<SearchSVG className='input-icon' />}
                button
                buttonText='Search'
                placeholder="Search todo"
                onChange={(e) => console.log(e.target.value)}
                onClick={() => console.log('Search')}
            />
            <Filter />
        </div>
    )
}

export default Header