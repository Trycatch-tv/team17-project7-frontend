const Select = ({ label, name, id, value, onChange, options = [] }) => {
  return (
    <div className="w-full grid gap-1">
      <label htmlFor={id} className="font-bold">
        {label}
      </label>
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="px-3 py-2 rounded-lg border border-violet-500 focus:outline-none text-gray-700 bg-gray-300 placeholder-gray-500 focus:bg-white"
      >
        <option value="" defaultChecked>
          Selecciona una opcion
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
