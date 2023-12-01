import React, {  useState ,useCallback } from "react";
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
import SCmp from "./sComponent";

 
function App2(props) {
    const [count,  setCount]= useState(0);
    const [count2,  setCount2]= useState(0);
    
    
    
const inc= () =>{
    setCount (count + 1);
}
 const cb= useCallback(inc,[count]);

    

//   const calc= () => {
//     console.log("Calculation");
//     return "Result of calculation"
//   }
// let result=useMemo(calc,[count]);
//   console.log(result);  
    // useEffect(() => {    
    //     // let list =document.getElementById("list")
        
    //     fetch("https://dummyjson.com/products")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data.products);

    //     });
    
    //      },[]  );

       
 return(
    <>
    <SCmp count={count} inc={cb}/>
    <h1>Hello World!{count}</h1>
    <button onClick={() => setCount(count-1)}>-</button>
    <button onClick={() => setCount(count+1)}>+</button>
    
    <h1>Counter  2   {count2}</h1>
    <button onClick={() => setCount2(count2-1)}>-</button>
    <button onClick={() => setCount2(count2+1)}>+</button>
    
     
    
    </>
 );
}

export default App2;

