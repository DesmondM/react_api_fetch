import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{
    state={advice:''};

    componentDidMount(){
        this.fetchAdvice();
    }
        // co const keyword to the function because it belongs to a class a
        fetchAdvice =()=>{
            axios.get('https://api.adviceslip.com/advice')
            .then((response)=>{
                const{ advice}= response.data.slip
                this.setState({advice});
            })
            .catch((error)=>{
                console.log(error);
            });
        
    }
    
    render(){
        // to make 'advice available outside the fetchAdvice function'
        const {advice}=this.state;
        return(
            <div className= "app">
            <div className="card">
                {/* <h1 className="heading"> Advice</h1> */}
                 <h3 className="body-cpy"> {advice}</h3>
                 <button className="button" onClick= {this.fetchAdvice}>
                     <span>GET SOME ADVICE</span>
                 </button>
            </div>
            </div>
        )
    }
}

export default App;