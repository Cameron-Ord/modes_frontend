axios.request({

    url: 'http://127.0.0.1:5000/api/painting'
}).then(response =>{
    let p_container = document.querySelector('#painting_container')
    let paintings = response['data']
    for(let i=0; i<paintings.length; i++){
        p_container.insertAdjacentHTML(`beforeend`, `
        <article>
        <h3>${paintings[i]['name']}</h3>
        <img src="${paintings[i]['image_url']}">
        <p>${paintings[i]['date_painted']}</p>
        <h5>${paintings[i]['artist']}</h5>
        </article>
        `);
    }
}).catch(error => {

    console.log(error)
});