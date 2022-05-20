import { users } from '../data'

const match = (user, term, fields = []) => {
  return fields.some(field => user[field].toLowerCase().includes(term))
}

export async function searchUsers(query = '') {
  const term = query.toLowerCase()

  return users.filter(user => match(user, term, ['id', 'first_name', 'last_name', 'email_address']));
}
