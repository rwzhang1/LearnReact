import React from "react"
import "./style.css"
import randomData from "./dataFile"
import Random from "./Random"

function App() {
  const randomQuestions = randomData.map(asd => {
    return (
      <Random key={asd.id} question={asd.question} answer={asd.answer}></Random>
    )
  })
  return (
    <div>
      {randomQuestions}
    </div>
  )
}


export default App




/*test oaskdoaskdoakdokwa


/*
function App() {
 const quizQuestions = quizData.map(quiz => {
    return (
      <Quiz question={quiz.question} answer={quiz.answer}></Quiz>
    )

    return (
      <div>
        {quizQuestions}
      </div>
    )
  })
}*/
/*
import Quiz from "./Quiz"
import quizData from "./dataFile"

function App() {
  const quizQuestions = quizData.map(quiz => {
    return (
      <Quiz key={quiz.id} question={quiz.question} answer={quiz.answer}></Quiz>
    )
  })

  return (
    <div>
      {quizQuestions}
    </div>
  )
} 

export default App
*/

/*
function App() {
  return (
    <div>
      <input type="checkbox"></input>
      <p className="checklist">placeholder</p>
    </div>
  )
}
*/


/*

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

    
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count +1
      }
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    )
  }
}










/*
function buttonfunction() {
    console.log('abcdefokadokaswodkoawkdokwodk')
}


function App() {
  return (
    <div>
      <button onClick={buttonfunction}>Button here</button>
    </div>
  )
}
*/





/*
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: 0
    }
  }
    render() {
      let wordDisplay
      if (this.state.isLoggedIn === 1) {
        wordDisplay = "in"
      }
      else {
        wordDisplay = "out"
      }
      return (
        <div>You are logged {wordDisplay}</div>
      )
    }
  }

*/

/*
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "peter",
      age: "24"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old</h3>
      </div>
    )
  }
}
*/

/*
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
*/

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
