
import Score from "./Score";

const App = ({ player1, player2, handleP1Increment, handleP2Increment, handleReset, p1serving, winner }) => (
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
            <Score
                player={ player1 }
                handleClick={ handleP1Increment }
                serving={ p1serving ? "card text-center bg-dark text-white" : "card text-center" }
            />
            <Score
                player={ player2 }
                handleClick={ handleP2Increment }
                serving={ !p1serving ? "card text-center bg-dark text-white" : "card text-center" }
            />
      </div>

      { /* winner message */}
      { winner !== 0 ? <h2 className="alert alert-success">Player { winner } wins!</h2> : <></> }

      <hr />

      { /* reset button */}
      <button onClick={ handleReset } className="btn btn-danger">Reset</button>
  </>
);

export default App;