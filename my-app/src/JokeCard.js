import React from "react"

function JokeCard(jokes) {
    return (
        <div className="joke-card">
            <p>{jokes.joke.question}</p>
            <p>{jokes.joke.punchline}</p>
        </div>
    )
}

export default JokeCard


