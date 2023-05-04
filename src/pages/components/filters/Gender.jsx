export default function Gender() {
    return (
        <div className="relative w-1/3">
            <select className="w-full p-2 text-gray-500 bg-white border dark:border-violet-600 rounded-lg outline-none appearance-none focus:border-violet-600">
                <option value={""} disabled selected>
                    Filtrar por genero
                </option>
                <option>Animadas</option>
                <option>Vida real</option>
                <option>Bibliografias</option>
                <option>Deportivas</option>
            </select>
            <div className="absolute inset-y-0 right-0 pl-3 pr-3 h-10 flex items-center pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="gray"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                    />
                </svg>
            </div>
        </div>
    );
}
