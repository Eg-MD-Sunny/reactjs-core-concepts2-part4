import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
		<Counter></Counter>
		<LoadComments></LoadComments>
    </div>
  );
}

//Counter Component Create
function Counter(){
	//Counuter Even Handler For Increase
	const [count, setCount] = useState(0)
	const handleIncrease = ()=>{
		let value = count + 1;
		setCount(value);
	}
	//Counuter Even Handler For Decrease
	const handleDecrease = ()=>{
		let value = count - 1;
		setCount(value);
	}
	return (
		<div>
			<h1>Counter:{count} </h1>
			<button onClick={handleIncrease}>Increase</button>
			<button onClick={handleDecrease}>Decrease</button>
		</div>
	)
}

//Create Load Comments Componenet
function LoadComments(){
	const [comments, setComments] = useState([])
	useEffect(()=>{
		fetch('https://jsonplaceholder.typicode.com/comments')
		.then(res=>res.json())
		.then(data=>setComments(data))
	},[])
	return (
		<div>
			<h2>Comments: {comments.length}</h2>
			{
				comments.map(comment=><Comment email={comment.email} body={comment.body}></Comment>)
			}
		</div>
	)
}
function Comment(props){
	return(
		<div>
			<h4>Email:{props.email}</h4>
			<p>Comment:{props.body}</p>
		</div>
	)
}
export default App;
