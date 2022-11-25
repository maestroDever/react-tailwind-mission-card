import React, { useCallback } from 'react'

type Props = {
  options: string[]
  value?: string
  onChange?: (value: string) => void
}

export const Dropdown = (props: Props) => {
  const { options, value, onChange } = props

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      if (onChange) onChange(e.target.value)
    },
    [onChange],
  )

  return (
    <select
      className="block w-40 h-10 shadow-sm outline-none text-light-blue"
      value={value}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
