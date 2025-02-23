function fetchData() {
  fetch('GAMES.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let output = '<h2">Countries</h2>'
      data.forEach(function (item) {
        output += `
        <ul>
          <li>title_id: ${item.title_id}</li>
          <li>name: ${item.name}</li>
        </ul>
      `
      })
      document.getElementById('title_id').innerHTML = output
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('country').innerHTML = 'Error Loading Data'
    })
}

fetchData()
