import React, { Component } from 'react'

// function components (Stateless)
// function Greet(){
//     return <h1>Hello Greet</h1>
// }

// export const Greet = () => <h1>Hello Greet</h1>

// export default Greet

// Class Component (Statefull)
class Greet extends Component {
    render() {
        return <h1>Class Component</h1>
    }
}

export default Greet