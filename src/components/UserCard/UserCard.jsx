import { useSearchContext } from '../../contexts/search'
import { Avatar } from '../Avartar'
import { IconButton } from '../IconButton'
import { SvgIcon } from '../SvgIcon'
import UserInfo from './UserInfo'

export default function UserCard({ user }) {
  const { debouncedDispatch: dispatch } = useSearchContext()
  const name = `${user.first_name} ${user.last_name}`

  return (
    <div
      className="p-8 w-100 divide-y min-h-screen"
      onMouseEnter={() => dispatch({ type: 'activate', payload: user })}
      onMouseLeave={() => dispatch({ type: 'activate', payload: null })}
    >
      <div className="flex flex-col items-center pb-6">
        <Avatar user={user} size="medium" />
        <p className="mt-5 font-bold">{name}</p>
        <p className="text-gray-500">{user.id}</p>
      </div>
      <div className="pt-6">
        <UserInfo
          label="Membership"
          value={(
            <div className="font-bold">{user.membership}</div>
          )}
        />
        <UserInfo
          label="Phone"
          value={(
            <div className="text-gray-500">{user.phone}</div>
          )}
        />
        <UserInfo
          label="Email"
          value={(
            <div className="w-56 text-cyan-500">{user.email_address}</div>
          )}
        />
        <div className="flex items-center justify-around mt-10">
          <IconButton icon={<SvgIcon name="Chat" />} />
          <IconButton icon={<SvgIcon name="Phone" />} />
          <IconButton icon={<SvgIcon name="Location" />} />
        </div>
      </div>
    </div>
  )
}
