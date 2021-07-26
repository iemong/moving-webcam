import React, {VFC} from 'react'
import styles from './input.module.css'

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    type?: string
    id?: string
    placeholder?: string
    className?: string
    max?: number
    min?: number
}

const Input: VFC<Props> = (props: Props) => {
    const {value, onChange, id, type = 'text', placeholder = '', className, min, max} = props


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }

    return (
        <input
            className={[className, styles.input].join(' ')}
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            min={min}
            max={max}
            onChange={handleChange}
        />
    )
}

export default Input
