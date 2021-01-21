import React from "react"

import productsData from "./allProducts"
import Product from "./Product"

function App() {
  const productComponents = productsData.map(item => <Product product={item}/>)

  return (
    <div>
      {productComponents}
    </div>
  )
}



export default App


/* import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {
  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />)

  return (
    <div>
      {jokeComponents}
    </div>
  )
} 

export default App */


/*import React from "react"
import ContactCard from "./ContactCard"

function App() {
  return (
    <div className="contacts">
      <ContactCard contact={{name:"a", imgUrl:"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", phone: "1111 111 111", email: "cat@cat.cat"}}></ContactCard>
      <ContactCard contact={{name:"b", imgUrl:"https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=1fdekAh2", phone: "2222 222 222", email: "cat@cat.cat"}}></ContactCard>
      <ContactCard contact={{name:"c", imgUrl:"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", phone: "3333 333 333", email: "cat@cat.cat"}}></ContactCard>
      <ContactCard contact={{name:"d", imgUrl:"https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png", phone: "4444 444 444", email: "cat@cat.cat"}}></ContactCard>
    </div>
  )
}

export default App; */
