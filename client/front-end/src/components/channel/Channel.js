import React from 'react'

export const Channel = ({data}) => {
    return (
        <div>
            <h1>{data.channel}</h1>
            <h1>{data.techno}</h1>
        </div>
    )
}