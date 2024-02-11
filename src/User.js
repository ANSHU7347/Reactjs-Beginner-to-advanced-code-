
/*
function Users()
 {
    return (
      //<div className="App">
        
        //<h1> Hello Users component</h1>
       
      //</div>
   // );
  //}
  <div>Anshu</div>
    )
}
  
  export default Users;
  */

  ////PASS FUNCTION AS PROPS//////
  /*
  function User(props) {
    
    return(
        <div>
            <h1>User Component</h1>
            <button onClick={props.data}>Call Function</button>
        </div>
    )
}


export default User;
*/
/////Render CYCLE METHOD////
/*
import React from 'react'
class User extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "anshu@test.com"
        }
    }
    render() {
        console.warn("Render method", this.state.email)
        return (
            <div>
                <h1>User Component </h1>
                <button onClick={() => this.setState({ email: "sidhu@test.com" })}>Update Email</button>
            </div>
        )
    }
}

export default User;
*/
////PURE COMPONENT/////send data child to parent component
/*
function User(props)
{
    const name="Anshu Gupta"
    return(
        <div>
            <h1>User Name is : </h1>
            <button onClick={()=>props.getData(name)} >Click Me</button>
        </div>
    )
}

export default User;
*/
///////CONTROLLED COMPONENT//////
/*
import React,{forwardRef} from 'react'
function User(props,ref)
{
    return(
        <div>
            <input ref={ref} type="text" />
        </div>
    )
}

export default forwardRef(User);
*/

import {withRouter} from 'react-router-dom'
function User(props)
{
    console.warn(props)
    return(
    <div><h1>User No {props.match.params.id}</h1>
    <h1>User Name {props.match.params.name}</h1></div>

    )
}

export default withRouter(User);