import React, {VFC} from 'react'

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: string
    type?: string
    id?: string
    placeholder?: string
    className?: string
}

const Input: VFC<Props> = (props: Props) => {
    const {value, onChange, id, type = 'text', placeholder = '', className} = props


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
    }

    return (
        <input
            className={[className, "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"].join(' ')}
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}

export default Input
