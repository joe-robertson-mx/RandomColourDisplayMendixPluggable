import {ReactElement, createElement} from 'react'

export interface RandomColourDisplayProps {
    value: string;
    colour: string;
}

export const RandomColourDisplay = (props: RandomColourDisplayProps): ReactElement => {
    const {value, colour} = props

    const sectionStyle = {
        color: colour,
    }

    return (
        <div className='CountBarSection' style={sectionStyle}>{value}</div>
    )
}