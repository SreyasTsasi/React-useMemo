import React, { useEffect, useState,useRef, useCallback ,useMemo} from "react";
// import "./style.css";
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             products: []
//         };


//     }
//     componentDidMount() {
//         fetch("https://dummyjson.com/products")
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 this.setState({ products: data.products })
//             })
//     }
//     render() {
//      const style={
//         display:"flex",
//         height: "8rem"
//      }   
//         return (
//             <>
//                 {
//                     this.state.products.map((item, index) => (
//                         <React.Fragment key={index}>
//                             <img src={item.thumbnail} alt="Products" loading="lazy" />
//                             <h3>{item.title}</h3>
//                             <p>{item.description}</p>
//                             <div style={style}>
//                                 {item.images.map((img, ind) => (
//                                     <img src={img} key={ind} loading="lazy" />
//                                 ))}
//                             </div>
//                             <br />
//                         </React.Fragment>

//                     ))
//                     }
//             </>
//              );
             
//    }            
        
// }

 
function App2(props) {
    const [count,  setCount]= useState(0);
    const[data,setData]= useState(null);
    const listRef = useRef(null);

  const calc= () => {
    console.log("Calculation");
    return "Result of calculation"
  }
let result=useMemo(calc,[count]);
  console.log(result);  
    useEffect(() => {    
        // let list =document.getElementById("list")
        
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setData(data.products);

        });
    
         },[]  );

       
 return(
    <>
    <h1>Hello World!{count}</h1>
    <button onClick={() => setCount(count-1)}>-</button>
    <button onClick={() => setCount(count+1)}>+</button>
    
     
    
    </>
 );
}

export default App2;


function Hcmp({children}) {

    return<div>{children}</div>
        
}