
import ScoreCard from "./ScoreCard";
import Winner from "./Winner";
import Reset from "./Reset";

const App = ({ player1, player2, handleP1Increment, handleP2Increment, handleReset, p1serving, winner }) => (
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
            <ScoreCard
                player="1"
                playerScore={ player1 }
                handleClick={ winner === 0 ? handleP1Increment : null }
                serving={ p1serving ? "card text-center bg-dark text-white" : "card text-center" }
            />
            <ScoreCard
                player="2"
                playerScore={ player2 }
                handleClick={ winner === 0 ? handleP2Increment : null }
                serving={ !p1serving ? "card text-center bg-dark text-white" : "card text-center" }
            />
      </div>

      { /* winner message */}
      <Winner winner={ winner } />

      <hr />

      { /* reset button */}
      <Reset handleClick={ handleReset } />
  </>
);

export default App;