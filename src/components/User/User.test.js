import { render, screen } from '@testing-library/react'

import { SearchProvider } from '../../contexts/search'
import User from './User'

const user = {
  id: "ID874320",
  first_name: "Adriano",
  last_name: "Alfaro",
  active: true,
  relationship: "member",
  avatar: "Adriano_Alfaro.jpg",
  membership: "GOLD",
  phone: "+49 171 12 34 567",
  email_address: "Adriano.Alfaro@gmail.com",
}

test('renders user name and id', () => {
  render(
    <SearchProvider>
      <User user={user} />
    </SearchProvider>
  )
  const nameElement = screen.getByText(user.first_name + ' ' + user.last_name)
  expect(nameElement).toBeInTheDocument()

  const idElement = screen.getByText(user.id)
  expect(idElement).toBeInTheDocument()
})
