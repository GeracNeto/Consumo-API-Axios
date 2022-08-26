import axios from 'axios'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

type RepositoryProps = {
  full_name: string,
  description: string
}

const url = 'http://api.github.com/users/geracneto/repos'

export function Repos() {

  const { data, isFetching: loading } = useQuery<RepositoryProps[]>('repos', async () => {
    const response = await axios.get(url)

    return response.data
  }, {
    staleTime: 1000 * 60 // Mantém os dados em cache por 1min antes de fazer um novo GET
  })

  return (
    <div className="Repos">
      {loading && (<p>Carregando...</p>)}
      <ul>
        {data?.map(repo => (
          <li key={repo.full_name}>
            <Link to={`repos/${repo.full_name}`}>{repo.full_name}</Link>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}