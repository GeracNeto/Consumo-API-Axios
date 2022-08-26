import axios from 'axios'
import { useQuery } from 'react-query'

type RepositoryProps = {
  full_name: string,
  description: string
}

const url = 'http://api.github.com/users/geracneto/repos'

function App() {

  const { data, isFetching: loading } = useQuery<RepositoryProps[]>('repos', async () => {
    const response = await axios.get(url)

    return response.data
  })

  return (
    <div className="App">
      {loading && (<p>Carregando...</p>)}
      <ul>
        {data?.map(repo => (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
