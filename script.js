function fetchData() {
  fetch('countries.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let output = '<h2">Countries</h2>'
      data.forEach(function (item) {
        output += `
        <ul>
          <li>Country: ${item.link_source}</li>
          <li>CODE: ${item.ISO2}</li>
        </ul>
      `
      })
      document.getElementById('link_source').innerHTML = output
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('link_source').innerHTML = 'Error Loading Data'
    })
}

fetchData()
