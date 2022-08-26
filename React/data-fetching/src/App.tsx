import { useFetch } from "./hooks/useFetch"

type RepositoryProps = {
  full_name: string,
  description: string
}

const url = 'http://api.github.com/users/geracneto/repos'

function App() {

  const { data: repositories, isFetching: loading } = useFetch<RepositoryProps[]>(url)

  return (
    <div className="App">
      {loading && (<p>Carregando...</p>)}
      <ul>
        {repositories?.map(repo => (
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
