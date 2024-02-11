/*
import logo from './logo.svg';
import './App.css';
function App() {
  let data="Anshu";
  function apple()
  {
  data="peter";
    alert(data);
  }
  return (
    <div className="App">
     <h1>{data}</h1>
     <button onClick={apple}>Click Me</button>
    </div>
  );
}
export default App;
*/


///////state ///////////
/*
import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
class  App extends Component {

  constructor()
  {
    super();
    this.state={
      data:1
    }
  }
  apple()
  {
    this.setState({data:this.state.data+1})
  }
  render()
  {
    return (
      <div className="App">
       <h1>{this.state.data}</h1>
       <button onClick={()=>this.apple()}>Update Data</button>
      </div>
    );
  }
}
*/

//////// PROS///////
/*
import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Student from './Student'
//function App() {
  const [name,setName]=useState("Anil")
  ///function apple()
  //{
  // alert("hello")
  //}
  return (
    <div className="App">
     <h1>Props in React :)</h1>
     <Student name={name}/>
     <button onClick={()=>{setName("Gupta")}} >Update Name</button>
    </div>
  );
}

export default App;
*/

///////PROS AND CLASS COMPONENT/////
/*
import logo from './logo.svg';
import './App.css';
import Student from './Student'
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      name:"Anshu"
    }
  }
  render()
  {
    return (
      <div className="App">
       <h1>Props !</h1>
       <Student name={this.state.name} email="anil@test.com"></Student>
       <button onClick={()=>this.setState({name:"Gupta"})} >Update Name</button>
      </div>
    );
  }
}

export default App;
*/

/////////GET INPUT BOX VALUE//////
/*
import logo from './logo.svg';
import './App.css';
import React ,{useState}from 'react'
function App() {
const [data,setData]=useState(null)
const [print,setPrint]=useState(false)

  function getData(val)
  {
    console.warn(val.target.value)
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
     {
       print?
       <h1> {data}</h1>
       :null
     }
    <input type="text" onChange={getData} />
    <button onClick={()=>setPrint(true)} >Print Data</button>
    </div>
  );
}
//export default MyComponent;


export default App;
*/

///////HIDE AND SHOW ELEMENT//////////
/*
import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
     {
       show?<h1>Hello World !</h1>:null
     }
     {/* <button onClick={()=>setShow(true)} >Show</button>
     <button onClick={()=>setShow(false)} >Hide</button>}
<button onClick={()=>setShow(!show)} >Toggle</button> 
    </div>
  );
}

export default App;
*/
/////CONDITIONAL RENDERING ///////
/*
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const [name,setName]=useState("");
  const [tnc,setTnc]=useState(false);
  const [interest,setInterest]=useState("");
  function getFormData(e)
  {
    console.warn(name,tnc,interest)
    e.preventDefault()
  }
  return (
    <div className="App">
     <h1>Handle Form in React</h1>
     <form onSubmit={getFormData}>
       <input type="text" placeholder="enter name" value={name} onChange={(e)=>setName(e.target.value)} /> <br /><br />
       <select onChange={(e)=>setInterest(e.target.value)}>
         <option>Select Options</option>
         <option>Marvel</option>
         <option>DC</option>
       </select> <br /><br />
       <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)} /><span>Accept Terms and conditions</span>
       <br /><br />
       <button type="submit">Submit</button>
       <button>Clear</button>

     </form>
    </div>
  );
}
export default App;
*/


///////////BASIC FORM VALIDATION//////
/*
import logo from './logo.svg';
import './App.css';
import Profile from './Profile'
function App() {
  return (
    <div className="App">
    <Profile />
    </div>
  );
}

export default App;
*/
///////
/*
import logo from './logo.svg';
import './App.css';
import Login from './Login'
function App() {
  const data = true;
  return (
    <div className="App">
     <Login />
    </div>
  );
}

export default App;
*/
////PASS FUNCTION AS PROPS//////
/*
import logo from './logo.svg';
import './App.css';
import User from './User'
import Student from './Student.'
function App() {
 
  function getData() {
    alert("Hello from app component")
  }
  return (
    <div className="App">
     <User  data={getData} />
     <Student data={getData} />
    </div>
  );
}

export default App;
*/

//////////CONSTRUCTOR LIFE CYCLE METHOD//////
/*
import logo from './logo.svg';
import './App.css';
import React from 'react'
class App extends React.Component{
  constructor()
  {
    super();
    this.state={
      name:"Anshu Gupta"
    }
    console.warn("constructor")
  }
  render()
  {
    console.warn("render")
    return<div>
      <h1>Hello World {this.state.name}</h1>
    </div>
  }
}
export default App;
*/

/////Render CYCLE METHOD////
/*
import logo from './logo.svg';
import './App.css';
import React from 'react'
import User from './User'
function App() {
const [name,setName]=React.useState("Anil")

  return (
    <div className="App">
     <h1>Render Method in React</h1>
     <User />
     {/* <button onClick={()=>setName("Gupta")}>Update Name</button> }
    </div>
  );
}

export default App;
*/
/////////COMPONENT DID MOUNT LIFE CYCLE METHOD ///////////

/*
import './App.css';
import React from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    console.warn("constructor")
    this.state={
      count:0
    }
    
    
    //this.state={name:"anshu"}
  }
  //componentDidMount()
 // {
   // console.warn("componentDidMount")
//
 // }
  render()
  {
    //console.warn("render")

    return (
      <div className="App">
        <h1>Should commponenet update {this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>Update</button>
      </div>
    );
  }
}

export default App;
*/

////COMPONENT WILL UNMOUNT///
/*
import './App.css';
import React from 'react'
import Student from './Student'
class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      show:true
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.show?<Student />
          :<h4>Component is removed</h4>
        }
        <button onClick={()=>this.setState({show:false})}> Toogle Student Component</button>
      </div>
    )
  }
}

export default App;
*/
//////////HOOKS IN REACT JS////////
 /*
import './App.css';
import React,{useState}from 'react'
function App() {
  const [data,setData]=useState("Anshu ")
  return (
    <div className="App">
      <h1>Hooks in React {data}</h1>
      <button onClick={()=>setData("Gupta")}>Update State</button>
    </div>
  );
}

export default App;
*/


////////USE EFFECT//////
/*
import './App.css';
//import React from './react'
import React, { useEffect, useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.warn("use effect")
  })
  return (
    <div className="App">
      <h1>useEffect in React {count}</h1>
      <button onClick={() => setCount(count+1)}>Update Counter</button>
    </div>
  );
}

export default App;
*/
/////////USE EFFECT WITH SPECIFIC STATE AND PROPS///////

/*
import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.warn("use effect")
  })
  return (
    <div className="App">
      <h1>useEffect in React {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
}

export default App;
*/


//STYLE TYPE REACTJS//////
/*
import './App.css';
import './style.css'
import style from './custom.module.css'
import React from 'react'
function App() {
  const styleItem={color:'red',backgroundColor:'black'}
  return (
    <div className="App">
      <h1 className="primary">Style type 1 in React js</h1>
      <h1 style={styleItem}>Style type 2 in React js</h1>
      <h1 className={style.success} >Style type 3 in React js</h1>
    </div>
  );
}

export default App;
*/
/*
import './App.css';
import React from 'react'
import {Button,Badge,Card} from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <h1>Install Bootstrap</h1>
      <h1>
    Example heading <Badge variant="light">New</Badge>
  </h1>

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
  );
}

export default App;
*/

//////NESTED LIST IN REACTJS////
/*
import './App.css';
import React from 'react'
import {Table} from 'react-bootstrap'
function App() {
  const users = [
    { name: 'Anil', email: 'anil@test.com', contact: '111' },
    { name: 'Burce', email: 'bruce@test.com', contact: '222' },
    { name: 'Peter', email: 'peter@test.com', contact: '111' },
    { name: 'Sam', email: 'sam@test.com', contact: '777' },
  ]
  return (
    <div className="App">
      <h1>List With Bootstrap Table</h1>
      <Table striped variant="dark" >
        <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Contacts</td>
        </tr>
        {
          users.map((item,i)=>
          item.contact==='111'?
          <tr key={i}>
          <td>{item.name}</td>
          <td>{item.email}</td>
        <td>{item.contact}</td>
        </tr>:null
          )
        }
        </tbody>
      </Table>
    </div>
  );
}

export default App;
*/
/*
import './App.css';
import React from 'react'
import { Table } from 'react-bootstrap'
function App() {
  const users = [
    {
      name: 'Anshu', email: 'anshu@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Burce', email: 'bruce@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Gupta', email: 'gupta@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
    {
      name: 'Sam', email: 'sam@test.com', address: [
        { hm: '101', city: 'Noida', country: 'India' },
        { hm: '10', city: 'Gurgaon', country: 'India' },
        { hm: '23', city: 'Noida', country: 'India' },
        { hm: '45', city: 'Delhi', country: 'India' },
      ]
    },
  ]
  return (
    <div className="App">
      <h1>List with Nested Array</h1>
      <Table variant="dark"  >
        <tbody>
          <tr>
          <td>S.N</td>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
          {
            users.map((item,i)=>
            <tr key={i}>
               <td>{i+1}</td>
            <td>{item.name}</td>
          <td>{item.email}</td>
            <td>
             
              <Table variant="dark"  >
        <tbody>
              {
                item.address.map((data)=>

                <tr>
                  <td>{data.hm}</td>
                  <td>{data.city}</td>
                  <td>{data.country}</td>
                </tr>
                )
              }
              </tbody>
              </Table>
              
            </td>
          </tr>
          )
          }
        </tbody>
      </Table>

    </div>
  );
}
export default App;
*/
//////REACT FRAGMENT///////
/*
import './App.css';
import React from 'react'
import Cols from './Cols'
function App() {
  return (
    <>
      <h1>React Fragment</h1>
     <table>
       <tbody>
         <tr>
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />
          <Cols />

         </tr>
       </tbody>
     </table>
      </>
      
  );
}

export default App;
*/

///////send data child to parent component//////

/*
import React from 'react'
import './App.css';
import User from './User'
function App() {
  function getName(name)
  {
    alert(name)
  }
  return (
    <div className="App">
      <h1>Lifting State Up</h1>
      <User getData={getName} />
    </div>
  );
}

export default App;
*/

//////REF///////
/*
import './App.css';
import React,{createRef} from 'react'
class App extends React.Component {
  constructor()
  {
    super();
    this.inputRef=createRef();
  }
  componentDidMount()
  {
    // console.warn(this.inputRef.current.value="1000")
  }
  getVal()
  {
    console.warn(this.inputRef.current.value)
    this.inputRef.current.style.color="red"
    this.inputRef.current.style.backgroundColor="black"

  }
  render() {
    return (
      <div className="App">
        <h1>Ref in React </h1>
        <input type="text" ref={this.inputRef}  />
        <button onClick={()=>this.getVal()}>Check Ref</button>
      </div>
    );
  }
}

export default App;
*/
///////CONTROLLED COMPONENT//////
/*
import './App.css';
import React ,{useRef} from 'react'
import User from './User'
function App() {
  let inputRef=useRef(null)
  function updateInput()
  {
    inputRef.current.value="1000";
    inputRef.current.style.color="red"
    inputRef.current.focus()


  }
  return (
    <div className="App">
      <h1>forwardRef in React </h1>
      <User ref={inputRef} />
      <button onClick={updateInput} >Update Input Box</button>
    </div>
  );

}
export default App;
*/
////HIGHT CORDER COMPONENT////////
/*
import './App.css';
import React, { useRef, useState } from 'react'
function App() {
  return (
    <div className="App">
      <h1>HOC </h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />

    </div>
  );
}
function HOCRed(props)
{
  return <h2 style={{backgroundColor:'red',width:100}}>Red<props.cmp /></h2>
}
function HOCGreen(props)
{
  return <h2 style={{backgroundColor:'green',width:100}}>Green<props.cmp /></h2>
}
function HOCBlue(props)
{
  return <h2 style={{backgroundColor:'blue',width:100}}>blue <props.cmp /></h2>
}
function Counter()
{
  const [count,setCount]=useState(0)
  return<div>
    <h3>{count}</h3>
    <button onClick={()=>setCount(count+1)}>Update</button>
  </div>
}

export default App;
*/
//import {BrowserRouter} from 'React-router-dom';
///////ROUTER//////////
/*
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/home" >Home</Link>
        <br></br>
        <Link to="/about" >About</Link>
        <Route path="/home" > <Home /></Route>
        <Route path="/about" > <About /></Route>


      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is my Home Page</p>
    </div>
  )
}
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is my About Page</p>
    </div>
  )
}
export default App;
*/
/*
import './App.css';
import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from './User'
function App() {
  let user=[
    {name:'anil',id:1},
    {name:'peter',id:2},
    {name:'bruce',id:3},
    {name:'tony',id:4},
  ]
  return (
    <div className="App">
      <Router>
      <h1>React Dynamic Routing</h1>
      {
        user.map((item)=>
      <div><Link to={"/user/"+item.id+"/"+item.name}>{item.name}</Link></div>)
      }
      <Route path="/user/:id/:name" ><User /></Route>
      </Router>
    </div>
  );
}
export default App;
*/


///////Get API Call ///

/*
import React,{useEffect,useState} from 'react'
function App() {
  const [users,setUser]=useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/todo").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="App">
      <h1>Get API Call </h1>
      <table border="1">
       <tbody>
       <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Email</td>
          <td>Mobile</td>
        </tr>
        {
          users.map((item,i)=>
            <tr key={i}>
            <td>{item.userId}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
            <td>{item.mobile}</td>
          </tr>
          )
        }
       </tbody>
      </table>
    </div>
  );
}
export default App;
*/
//////////POST API Example /////
/*
import './App.css';
import React, { useEffect, useState } from 'react'
function App() {
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [mobile,setMobile]=useState("");
function saveData()
{
  let data={name,email,mobile}
// console.warn(data);
  fetch("http://localhost:4000/todo", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(data)
  }).then((resp)=>{
    // console.warn("resp",resp);;
    resp.json().then((result)=>{
      console.warn("result",result)
    })
  })
}
  return (
    <div className="App">
      <h1>POST API Example </h1>  
      <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}  /> <br /> <br />
      <input type="text" name="email"  value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br /> <br />
      <input type="text" name="mobile"  value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/> <br /> <br />
      <button type="button" onClick={saveData} >Save New User</button>
    </div>
  );
}
export default App;
*/
//////PREVIOUS STATE FUNCTION/////
/*
import './App.css';
import React, { useState } from 'react'
function App() {
  const [count,setCount]=useState(0)
  function updateCounter()
  {
    // let item=Math.floor(Math.random()*10)
    // setCount((pre)=>{
    //   if(pre<3)
    //   {
    //     alert("last value is very low")
    //   }
    //   return item
    // })
    for(let i=0;i<5;i++)
    {
      setCount((pre)=>pre+8)
    }
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button  onClick={updateCounter}>Click Me to Update counter</button>
    </div>
  );
}
export default App;
*/
///////state with object/////
/*
import './App.css';
import React from 'react'
import Child from './Child'
function App() {
  const [count,setCount]=React.useState(0)
  return (
    <div className="App">
      <Child count={count} />
      <button onClick={()=>{setCount( Math.floor(Math.random()*10) )}} >Update Counter</button>
    </div>
  );
}



export default App;
*/