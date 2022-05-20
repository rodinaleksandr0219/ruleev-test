import { memo } from 'react'

import { useSearchContext } from '../../contexts/search'
import { Avatar } from '../Avartar'
import { Chip } from '../Chip'
import { SvgIcon } from '../SvgIcon'

function User({ user }) {
  const { state, debouncedDispatch: dispatch } = useSearchContext()
  const name = `${user.first_name} ${user.last_name}`
  const active = state.user?.id === user.id

  return (
    <div
      className={`flex items-center justify-between py-3 px-8 cursor-pointer ${active ? 'bg-gray-200' : ''}`}
      onMouseEnter={() => dispatch({ type: 'activate', payload: user })}
      onMouseLeave={() => dispatch({ type: 'activate', payload: null })}
    >
      <div className="flex items-center">
        <Avatar user={user} size="small" />
        <span className="ml-4 font-bold text-black">{name}</span>
        <span className="ml-4 text-gray-500">{user.id}</span>
      </div>
      <div className="flex items-center">
        <Chip>New</Chip>
        { active && (
          <div className="ml-2">
            <SvgIcon name="ArrowRight" />
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(User)
