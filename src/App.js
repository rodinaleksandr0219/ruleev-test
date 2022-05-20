import { SearchPage } from './pages/Search'
import { SearchProvider } from './contexts/search'

export default function App() {
  return (
    <SearchProvider>
      <div className="m-8 shadow-xl">
        <SearchPage />
      </div>
    </SearchProvider>
  )
}
