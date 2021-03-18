import Winner from "../Winner";
import Reset from "../Reset";
import ScoreCardP1 from "../ScoreCard/ScoreCardP1";
import ScoreCardP2 from "../ScoreCard/ScoreCardP2";
import Settings from "../Settings";
import Loading from "../Loading";

const App = ({ gameStarted }) => (
    <>
        <header className="jumbotron mt-4 mb-0">
            <h1>PongPing</h1>
        </header>
        
        <Loading>
            { !gameStarted ? <Settings /> :
              <div>
                <div className="row mb-4">
                      <ScoreCardP1 />
                      <ScoreCardP2 />
                </div>
                <Winner />
                <hr />
                <Reset />
              </div>
            }
        </Loading>
    </>
);

export default App;