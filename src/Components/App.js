
import Winner from "./Winner";
import Reset from "./Reset";
import ScoreCardP1 from "./ScoreCard/ScoreCardP1";
import ScoreCardP2 from "./ScoreCard/ScoreCardP2";

const App = ({ handleP1Increment, handleP2Increment, handleReset }) => (
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
            <ScoreCardP1
                handleClick={ handleP1Increment }
            />
            <ScoreCardP2
                handleClick={ handleP2Increment }
            />
      </div>

      { /* winner message */}
      <Winner />

      <hr />

      { /* reset button */}
      <Reset handleClick={ handleReset } />
  </>
);

export default App;