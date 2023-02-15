import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// if # is used in css, then we have to use the id attribute in HTML
// if . is used in css, then we have to use the className attribute HTML

class Square extends React.Component {
    
  
        render() {
      console.log("reloading square")

          var customClassName=""
          if (this.props.value==="X") {
           customClassName="redsquare"
          }
          else{
            customClassName="bluesquare"
          }
          return (
            <button className={customClassName}  onClick={this.props.onClick}>
             {this.props.value}
            </button>
          );
        }
}

class Board extends React.Component {

    constructor(props){
      super(props)

      this.state={
        squares: Array(9).fill(null),
        xIsNext: true,
        winner: "",
        isTIE: false
        
      }
    }

    calculateWinner(squares) {
      const lines=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      for (let i=0; i<lines.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a]===squares[c]){
          return squares[a];
        }
      }
      return null;
    }

    
   decisionTie(squares){
    console.log(squares)
      for(let k=0; k<squares.length; k++){
        if(squares[k]==null){
          console.log("returning false", k)
           return false;
        }
      }
      console.log("returning true")

      return true;
    }

    handleClick(i) {
      const squares = this.state.squares.slice()
      
      if(this.calculateWinner(squares) || squares[i]){
        return;
      }
      
      squares[i] = this.state.xIsNext ? "X" :"O" ;
      let winner = this.calculateWinner(squares); 
      let dec = this.decisionTie(squares)
      console.log(dec)
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        winner:  winner,
        isTIE:  dec,
      });
    }
    
    renderSquare(i) {
 
      return <Square
        value={this.state.squares[i]}
        
        onClick={() => {this.handleClick(i);
          
        } }
   
      />;
    }
    
   
    // todo: how to pass state from child to parent

    render() {
      console.log("reloading board")
      let status = 'Next player: ' + (this.state.xIsNext ? "X" :"O");
      
       var winner = this.state.winner;
       if (winner) {
        status = "Winner is " + this.state.winner
       }
       
      if(this.state.isTIE){
        status="TIE"
      }
      console.log(this.state.isTIE)
      return (
        <div>
          <p className="status">{status}</p>
         
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
}

class Game extends React.Component {
    constructor(props){
      super(props)

      this.state={
        isReset:true
      }
   }

    render() {
      console.log("reloading Game")
 
      return (
                        <div className="game">
                            <div className="game-board">  <Board isReset={this.state.isReset} />  </div>
                            <button className="Reset" onclick ={()=>{(this.setState({
                              isReset: isReset
                            }))}}>Reset</button>
                                <div className="game-info">
                                              <div>{/* status */}</div>
                                              <ol>{/* TODO */}</ol>
                                </div>
                                        
                          </div>
                      );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
