import axios from "axios"

import { useEffect, useState } from "react"

type RepositoryProps = {
  full_name: string,
  description: string
}

const url = 'http://api.github.com/users/geracneto/repos'

function App() {

  const [repositories, setRepositories] = useState<RepositoryProps[]>([])

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setRepositories(response.data)
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <div className="App">
      <ul>
        {repositories.map(repo => (
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
