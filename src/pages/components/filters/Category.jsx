import React from "react";

export default function Category() {
    return (
        <div className="relative w-1/3">
            <select className="w-full p-2 text-gray-500 bg-white border dark:border-violet-600 rounded-lg outline-none appearance-none focus:border-violet-600">
                <option value={""} disabled selected>
                    Filtrar por categoria
                </option>
                <option>Acción</option>
                <option>Comedia</option>
                <option>Terror</option>
                <option>Drama</option>
            </select>
            <div className="absolute inset-y-0 right-0 pl-3 pr-3 h-10 flex items-center pointer-events-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="gray"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="gray"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                    />
                </svg>
            </div>
        </div>
    );
}
