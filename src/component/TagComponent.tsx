import React from 'react'

const TagComponent: any = ({ list, handleDelete }) => {
    return (
        <>
            <div>

                <ul>
                    {
                        list.map((each, index) => {
                            return (
                                <div>

                                    <li key={index}>
                                        {each}
                                    </li>

                                    <button onClick={handleDelete(index)} style={{ color: "red" }}>
                                        X
                                    </button>
                                </div>
                            )
                        })
                    }

                </ul>
            </div>
        </>
    )
}

export default TagComponent