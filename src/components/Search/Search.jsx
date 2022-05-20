import { useMemo } from 'react'

import { Group } from '../../components/Group'
import { SearchForm } from '../../components/SearchForm'
import { UserCard } from '../UserCard'

export default function Search({ searchValue, onSearchChange, users, activeUser }) {
  const groupedUsers = useMemo(() => {
    return users.reduce((acc, user) => {
      acc[user.relationship] ||= []
      acc[user.relationship].push(user)
      return acc
    }, {})
  }, [users])

  return (
    <div className="py-8">
      <SearchForm value={searchValue} onChange={onSearchChange} />

      <div className="flex">
        <div className="flex-grow">
          { users.length === 0 && (
            <div className="text-gray-500 pl-8 mt-10">No results found</div>
          )}
          { Object.keys(groupedUsers).map(relationship => (
            <Group
              key={relationship}
              title={relationship}
              users={groupedUsers[relationship]}
            />
          ))}
        </div>
        { activeUser && (
          <div className="sticky top-0 self-start">
            <UserCard user={activeUser} />
          </div>
        )}
      </div>
    </div>
  )
}
