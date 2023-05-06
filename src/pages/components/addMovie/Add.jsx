export default function Add({ onClick, setFormValues }) {
  return (
    <div className="mb-10">
      <button
        onClick={() => {
          onClick()
          setFormValues({
            title: '',
            genres: [],
            year: '',
            categories: [],
            director: '',
            synopsis: ''
          })
        }}
        type="button"
        class="inline-flex items-center px-8 py-2 text-lg text-center rounded-lg text-rose-100 bg-violet-600 hover:bg-violet-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 ml-0 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add Movie
      </button>
    </div>
  )
}
