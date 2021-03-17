
import Winner from "./Winner";
import Reset from "./Reset";
import ScoreCardP1 from "./ScoreCard/ScoreCardP1";
import ScoreCardP2 from "./ScoreCard/ScoreCardP2";
import Form from "./Form/Form";

const App = () => (
  <>
      <header className="jumbotron mt-4 mb-0">
          <h1>PongPing</h1>
      </header>

      <div className="row mb-4">
            <ScoreCardP1 />
            <ScoreCardP2 />
      </div>

      <Winner />

      <hr />

      <Reset />

      <Form />
  </>
);

export default App;