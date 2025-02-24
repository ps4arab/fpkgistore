function fetchData() {
  fetch('countries.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let output = '<h2">Countries</h2>'
      data.forEach(function (item) {
        output += `
        <ul>
          <li>description: ${item.description}</li>
          <li>CODE: ${item.link_source}</li>
          <li>CODE: ${item.link_text}</li>
        </ul>
      `
      })
      document.getElementById('description').innerHTML = output
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('description').innerHTML = 'Error Loading Data'
    })
}

fetchData()
