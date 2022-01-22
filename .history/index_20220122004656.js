


const Component = () =>{
     return(

        <h1>Component</h1>
     )
}

class Component2 extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(

            <h1></h1>
        )
    }
}


const root = document.getElementById('root')
ReactDOM.render(<Component />, root) 

