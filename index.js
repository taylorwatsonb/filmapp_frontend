const finishLine = "http://localhost:3000/api/v1/directors"

document.addEventListener('DOMContentLoaded', () => {
   getDirect()
})

function getDirect() {
    fetch(finishLine)
    .then(response => response.json())
    .then(director => {
        director.data.forEach(director => {
            const directLayout = `
            <div data-id=${director.id}>
            <h3>${director.attributes.name}</h3>
            <button data-id=${director.id}>edit</button>
          </div>
          <br><br>`;
          document.querySelector('#director-container').innerHTML += directLayout;
        })

    })
}