import { useState, useEffect } from 'react'

import { searchUsers } from '../../api'
import { useDebounce } from '../../hooks'
import { Search } from '../../components/Search'
import { useSearchContext } from '../../contexts/search'

export default function SearchPage() {
  const [search, setSearch] = useState('')
  const [users, setUsers] = useState([])
  const { state } = useSearchContext()

  const debouncedSearch = useDebounce(search, 400)

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  useEffect(() => {
    async function getUsers() {
      const results = await searchUsers(debouncedSearch)
      setUsers(results);
    }

    if (!debouncedSearch || debouncedSearch.length >= 3) {
      getUsers()
    }
  }, [debouncedSearch]);

  return (
    <Search
      searchValue={search}
      onSearchChange={handleChange}
      users={users}
      activeUser={state.user}
    />
  )
}
