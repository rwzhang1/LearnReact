import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      answer: "yes"
    }
  }
  render() {
    return (
      <div>
        <h1>Is this important?{this.state.answer}</h1>
      </div>
    )
  }
}




export default App


/*
class App extends React.Component {
  render() {
    return(
    <div>
      <Header username="Peter"></Header>
      <Greeting></Greeting>
    </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return(
    <header>
      <p>Welcome, {this.props.username}</p>
    </header>
    )
  }
}

class Greeting extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
      timeOfDay = "morning"
    }
    else if (hours>=12 && hours <17) {
      timeOfDay = "afternoon"
    }
    else {
      timeOfDay = "night"
    }
    return (
      <h1>Good {timeOfDay} to you!</h1>
    )
  }
}

*/



/*
function App() {
  return (
    <div>
      <h1>Code goes here</h1>
    </div>
  )
} 


class App extends React.Component {
  methodHere() {
    const date = new Date();
  }
  render() {
  const style = this.methodHere()//can put styling here
    return (
      <div>
        <h1>{this.props}</h1>
      </div>
    )
  }
}
*/




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
