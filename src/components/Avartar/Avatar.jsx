import { memo } from 'react'

const WidthClass = {
  small: 'w-8',
  medium: 'w-20'
}

const ActiveSizeClass = {
  small: 'w-2 h-2',
  medium: 'w-4 h-4'
}

const MembershipClass = {
  gold: 'ring-yellow-500',
  silver: 'ring-gray-500',
  platin: 'ring-purple-500'
}

function Avatar({ user, size }) {
  const { avatar, membership, active, first_name, last_name } = user
  const name = `${first_name} ${last_name}`

  const image = require(`../../assets/avatars/${size}/${avatar}`)
  const widthClass = WidthClass[size]
  const activeClass = active ? 'bg-cyan-500' : 'bg-red-500'
  const activeSizeClass = ActiveSizeClass[size]
  const membershipClass = MembershipClass[membership.toLowerCase()]

  return (
    <div className={`relative ${widthClass}`}>
      <img src={image} alt={name} className={`rounded-full ring-2 ring-offset-1 ${membershipClass}`} />
      <div className={`${activeClass} ${activeSizeClass} absolute bottom-0 right-0 ring-1 ring-white rounded-full`} />
    </div>
  )
}

Avatar.defaultProps = {
  membership: 'gold',
  active: true,
  size: 'small',
}

export default memo(Avatar)
