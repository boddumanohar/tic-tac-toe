import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// if # is used in css, then we have to use the id attribute in HTML
// if . is used in css, then we have to use the className attribute HTML

class Square extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
        };
    }

    // requirements:
    // to know Game state

    render() {
      return (
        <button className="square"
                onClick={() => {this.setState({value: "X"});}}>

          {this.state.value}

        </button>
      );
    }
  }

  // Board --> {Square,Square..)
  class Board extends React.Component {
    constructor(props){
        props.state = {
            squares: Array(9).fill(null)
        }
    }

    handleClick(i) {

    }

    renderSquare(i) {
      return <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />;
    }

    // todo: how to pass state from child to parent
    
    render() {
      const status = 'Next player: X';

      return (
        <div>
          <div className="status">{status}</div>
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
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  // ========================================

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
