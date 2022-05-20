export default function SearchForm({ value, onChange }) {
  return (
    <div>
      <input
        className="m-auto block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
