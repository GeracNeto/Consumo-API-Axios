const url = 'http://localhost:5500/api'

const newUser = {
    name: "Spyro",
    avatar: "https://picsum.photos/200",
    city: "Rio de Janeiro"
}

const updatedUser = {
    name: "Crash",
    avatar: "https://picsum.photos/200",
    city: "São Paulo"
}

// GET
const getUser = () => {
    axios.get(url)
        .then(resposnse => {
            const data = resposnse.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(e => console.log(e))
}

getUser()

// POST
const addNewUser = () => {
    axios.post(url, newUser)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(e => console.log(e))
}

//addNewUser()

// PUT
const updateUser = () => {
    axios.put(`${url}/2`, updatedUser)
        .then(response => {
            alert(JSON.stringify(response.data))
        })
        .catch(e => console.log(e))
}

//updateUser()

