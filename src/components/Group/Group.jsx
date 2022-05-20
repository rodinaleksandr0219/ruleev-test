import { User } from '../User'

export default function Group({ title, users }) {
  return (
    <div>
      <div className="pl-8 capitalize text-gray-400 py-2">{`${title}s (${users.length})`}</div>
      {users.map(user => (
        <User key={user.id} user={user} />
      ))}
    </div>
  )
}
