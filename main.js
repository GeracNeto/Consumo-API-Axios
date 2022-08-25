const url = 'http://localhost:5500/api'

const getUser = () => {
    axios.get(url)
        .then(resposnse => {
            const data = resposnse.data
            renderResults.textContent = JSON.stringify(data)
        })
        .catch(e => console.log(e))
}

getUser()