




//FETCHES

//CATEGORIES
// function handleCategoryRender(){
//     fetch('https://opentdb.com/api_category.php')
//     .then(r=>r.json())
//     .then(cat=>renderCat(cat))
// }
// handleCategoryRender()



function handleAPIcall(){
    fetch('https://opentdb.com/api.php?amount=10&encode=url3986')
    .then(r=>r.json())
    .then(cards=>renderCards(cards))
    .catch(error => console.log(error))
}
handleAPIcall()


//create card
const cardDiv = document.querySelector("#card-container")
cardDiv.classList.add('.card')




function renderCards(cards){
    const card = cards.results

    console.log(card[1].category)
}

// function renderCards(cards){
//     const card = cards.results
//     card.forEach(card => {
//         const category = document.createElement('h4')
//         category.textContent = card.category
//         cardDiv.append(category)

//         const h2 = document.createElement('h2')
//         h2.textContent = card.question

//         const button = document.createElement('button')
//         button.classList.add('.button')
//         button.textContent = "You Sure?"
//         button.addEventListener('submit', ()=>{
//     })
//     cardDiv.append(h2, button)
        
//     })

// }
    









//render question onto card
// function renderCards(cards){    
//     const h2 = document.createElement('h2')
//     h2.textContent = cards.question

//     const button = document.createElement('button')
//     button.classList.add('.button')
//     button.textContent = "You Sure?"
//     button.addEventListener('submit', ()=>{
//     })
//     cardDiv.append(h2, button)
// // }



// //perlin noise 
// let grid = []
// const nodes = 4

// //https://joeiddon.github.io/projects/javascript/perlin.html
// function randomUnitVector(){
//     let theta = Math.random() * 2 * Math.PI;
//     return {x: Mathcos(theta), y: Math.sin(theta)} 

// }

// for (let i = 0; i < nodes, i++){
//     let row = []
//     for (let j = 0; j<nodes; j++){
//         row.push(randomUnitVector())
//     }
//     grid.push(row)
// }

// function perlinGet(x,y){
    
//     return intensity
// }

