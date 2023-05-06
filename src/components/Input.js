const Input = ({
  label,
  name,
  id,
  placeholder,
  value,
  onChange,
  type = 'text'
}) => {
  return (
    <div className="w-full grid gap-1">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-3 py-2 rounded-lg border border-violet-500 focus:outline-none text-gray-700 bg-gray-300 placeholder-gray-500 focus:bg-white"
      />
    </div>
  )
}

export default Input
