export default function UserInfo({ label, value }) {
  return (
    <div className="flex items-center mb-2">
      <div className="w-32 font-bold">{label}</div>
      {value}
    </div>
  )
}
