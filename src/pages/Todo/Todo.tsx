import { CheckSVG, EditSVG, SearchSVG, TrashSVG } from "assets/icons"
import { Input } from "components"
import { FC } from "react"

interface Props {}

const Todo: FC<Props> = () => {
    return (
        <div className='todo'>
            <div className="header">
                <header>
                    <h1>TODO LIST</h1>
                    <a href="/index.html" className="link">
                        <span className="link-body">Sign In</span>
                    </a>
                </header>
                <Input
                    id='search'
                    icon={<SearchSVG className='input-icon' />}
                    button
                    buttonText='Search'
                    placeholder="Search todo"
                    onChange={(e) => console.log(e.target.value)}
                    onClick={() => console.log('Search')}
                />
                {/* <div className="input">
                    <SearchSVG  className='input-icon' />
                    <input className="input-field" type="text" name="search" id="search" placeholder="Search todo" />
                        <button type="button" className="input-btn">Search</button>
                </div> */}
                <ul className="nav">
                    <li className="nav-item"><a href="/#">All</a></li>
                    <li className="nav-item nav-item-acticve"><a href="/#">Opened</a></li>
                    <li className="nav-item"><a href="/#">Closed</a></li>
                </ul>
            </div>

            <div className="todo">
                <header className="todo-header" data-create="false">
                    <button type="button" className="btn">Add task</button>
                </header>
                <div className="todo-list">
                    <div className="todo-item" data-closed="false" data-clicked="true" data-edit="false">
                        <header className="item-header">
                            <span className="item-id">#123456</span>
                            <span className="item-date">21:32:44 23.12.2022</span>
                        </header>
                        <div className="item-body">
                            <div className="item-check">
                                <CheckSVG className="item-check-icon" />
                            </div>
                            <div className="item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni assumenda veniam nostrum dolorem soluta blanditiis voluptatum nam incidunt optio, eum itaque quaerat repellendus saepe dolorum accusantium.</div>
                            <div className="item-actions">
                                <button type="button" className="btn accent">
                                    <EditSVG className="btn-icon"/>
                                </button>
                                <button type="button" className="btn warning">
                                    <TrashSVG className="btn-icon"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="todo-item" data-closed="true" data-clicked="false" data-edit="false">
                        <header className="item-header">
                            <span className="item-id">#123456</span>
                            <span className="item-date">21:32:44 23.12.2022</span>
                        </header>
                        <div className="item-body">
                            <div className="item-check">
                                <CheckSVG className="item-check-icon" />
                            </div>
                            <div className="item-text" style={{borderRight: 'none'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni assumenda veniam nostrum dolorem soluta blanditiis voluptatum nam incidunt optio, eum itaque quaerat repellendus saepe dolorum accusantium.</div>
                            <div className="item-actions">
                                <button type="button" className="btn accent">
                                    <EditSVG className="btn-icon"/>
                                </button>
                                <button type="button" className="btn warning">
                                    <TrashSVG className="btn-icon"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="todo-item" data-closed="true" data-clicked="true" data-edit="false">
                        <header className="item-header">
                            <span className="item-id">#123456</span>
                            <span className="item-date">21:32:44 23.12.2022</span>
                        </header>
                        <div className="item-body">
                            <div className="item-check">
                                <CheckSVG className="item-check-icon" />
                            </div>
                            <div className="item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni assumenda veniam nostrum dolorem soluta blanditiis voluptatum nam incidunt optio, eum itaque quaerat repellendus saepe dolorum accusantium.</div>
                            <div className="item-actions">
                                <button type="button" className="btn accent">
                                    <EditSVG className="btn-icon"/>
                                </button>
                                <button type="button" className="btn warning">
                                    <TrashSVG className="btn-icon"/>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="todo-item" data-closed="false" data-clicked="false" data-edit="false">
                        <header className="item-header">
                            <span className="item-id">#123456</span>
                            <span className="item-date">21:32:44 23.12.2022</span>
                        </header>
                        <div className="item-body">
                            <div className="item-check">
                                {/* <!-- <CheckSVG className="item-check-icon" /> --> */}
                            </div>
                            <div className="item-text" style={{borderRight: 'none'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem
                                magni assumenda veniam nostrum dolorem soluta blanditiis voluptatum nam incidunt optio, eum itaque quaerat
                                repellendus saepe dolorum accusantium.</div>
                            {/* <!-- <div className="item-actions">
                                <button type="button" className="btn accent">
                                    <EditSVG className="btn-icon"/>
                                </button>
                                <button type="button" className="btn warning">
                                    <span className="btn-icon">
                                        <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M7 4C7 2.34315 8.34315 1 10 1H14C15.6569 1 17 2.34315 17 4V5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H19.9394L19.1153 20.1871C19.0164 21.7682 17.7053 23 16.1211 23H7.8789C6.29471 23 4.98356 21.7682 4.88474 20.1871L4.06055 7H3C2.44772 7 2 6.55228 2 6C2 5.44772 2.44772 5 3 5H7V4ZM9 5H15V4C15 3.44772 14.5523 3 14 3H10C9.44772 3 9 3.44772 9 4V5ZM6.06445 7L6.88085 20.0624C6.91379 20.5894 7.35084 21 7.8789 21H16.1211C16.6492 21 17.0862 20.5894 17.1191 20.0624L17.9355 7H6.06445Z" />
                                        </svg>
                                    </span>
                                </button>
                            </div> --> */}
                        </div>

                    </div>

                    <div className="todo-item" data-closed="false" data-clicked="false" data-edit="false">
                        <header className="item-header">
                            <span className="item-id">#123456</span>
                            <span className="item-date">21:32:44 23.12.2022</span>
                        </header>
                        <div className="item-body">
                            <div className="item-check">
                                {/* <!-- <CheckSVG className="item-check-icon" /> --> */}
                            </div>
                            <div className="item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni assumenda veniam nostrum dolorem soluta blanditiis voluptatum nam incidunt optio, eum itaque quaerat repellendus saepe dolorum accusantium.</div>
                            <div className="item-actions">
                                <button type="button" className="btn accent">
                                    <EditSVG className="btn-icon"/>
                                </button>
                                <button type="button" className="btn warning">
                                    <TrashSVG className="btn-icon"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="todo-item" data-closed="true" data-clicked="false" data-edit="false">
                        <header className="item-header">
                            <span className="item-id">#123456</span>
                            <span className="item-date">21:32:44 23.12.2022</span>
                        </header>
                        <div className="item-body">
                            <div className="item-check">
                                <CheckSVG className="item-check-icon" />
                            </div>
                            <div className="item-text" style={{borderRight: 'none'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni assumenda veniam nostrum dolorem soluta blanditiis voluptatum nam incidunt optio, eum itaque quaerat repellendus saepe dolorum accusantium.</div>
                            {/* <!-- <div className="item-actions">
                                <button type="button" className="btn accent">
                                    <EditSVG className="btn-icon"/>
                                </button>
                                <button type="button" className="btn warning">
                                    <TrashSVG className="btn-icon"/>
                                </button>
                            </div> --> */}
                        </div>
                    </div>

                    <div className="todo-item" data-closed="true" data-clicked="false" data-edit="false">
                        <header className="item-header">
                            <span className="item-id">#123456</span>
                            <span className="item-date">21:32:44 23.12.2022</span>
                        </header>
                        <div className="item-body">
                            <div className="item-check">
                                <CheckSVG className="item-check-icon" />
                            </div>
                            <div className="item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem magni assumenda veniam nostrum dolorem soluta blanditiis voluptatum nam incidunt optio, eum itaque quaerat repellendus saepe dolorum accusantium.</div>
                            <div className="item-actions">
                                <button type="button" className="btn accent">
                                    <EditSVG className="btn-icon"/>
                                </button>
                                <button type="button" className="btn warning">
                                    <TrashSVG className="btn-icon"/>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className="todo-item" data-closed="false" data-clicked="false" data-edit="false">
                        <header className="item-header">
                            <span className="item-id">#123456</span>
                            <span className="item-date">21:32:44 23.12.2022</span>
                        </header>
                        <div className="item-body">
                            <div className="item-check">
                                {/* <!-- <CheckSVG className="item-check-icon" /> --> */}
                            </div>
                            <div className="item-text" style={{borderRight: 'none'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex dignissimos porro quidem
                                magni assumenda veniam nostrum dolorem soluta blanditiis voluptatum nam incidunt optio, eum itaque quaerat
                                repellendus saepe dolorum accusantium.</div>
                            {/* <!-- <div className="item-actions">
                                <button type="button" className="btn accent">
                                    <EditSVG className="btn-icon"/>
                                </button>
                                <button type="button" className="btn warning">
                                    <TrashSVG className="btn-icon"/>
                                </button>
                            </div> --> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default Todo