const Modal = ({ open, setOpen, title, children }) => {
  return (
    <div
      className={`${
        open ? 'absolute' : 'hidden'
      } backdrop-blur-lg z-50 top-0 left-0 w-full h-full flex items-center justify-center`}
    >
      <div className="min-w-[500px] bg-black border border-violet-500 rounded-md p-3 flex flex-col gap-5">
        <header className="flex justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            className="text-3xl flex items-center justify-center h-fit hover:scale-105 transition"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </header>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
