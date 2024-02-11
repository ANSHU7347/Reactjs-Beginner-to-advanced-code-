
/*
import React from 'react'
export default class Student extends React.Component {

    
    render() {
        console.warn(this.props.name)
        return (
            <div style={{backgroundColor:"skyblue",margin:20}}>
                <h1>Hello {this.props.name}</h1>
        <h2>Email: {this.props.email}</h2>
            </div>
        )
    }

} 
*/
////PASS FUNCTION AS PROPS//////
/*
function Student(props) {
    
    return(
        <div>
            <h1>Student Component</h1>
            <button onClick={props.data}>Call Function</button>
        </div>
    )
}


export default Student;
*/
////COMPONENT WILL UNMOUNT///
/*
import React from 'react'
class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1>component will unmount</h1>
        <button>Toggle</button>
      </div>
    )
  }
}
export default App;
*/