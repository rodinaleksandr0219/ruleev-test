import { createContext, useReducer, useContext } from 'react'

import { useDebouncedCallback } from '../hooks'

const SearchContext = createContext()

const initialState = {
  user: null
}

function searchReducer(state, action) {
  switch (action.type) {
    case 'activate': {
      return {
        ...state,
        user: action.payload
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducer, initialState)
  const debouncedDispatch = useDebouncedCallback(dispatch, 50)
  const value = { state, dispatch, debouncedDispatch }

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearchContext() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider')
  }

  return context
}
