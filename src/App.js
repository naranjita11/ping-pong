
const App = ({ player1, player2, handleP1Increment, handleP2Increment, handleReset }) => (
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
          <div className="col-md-6 mt-4">
              <div className="card text-center bg-dark text-white">
                  <h5 className="card-header">Player 1</h5>
                  <div className="card-body">
                      <p className="card-text display-1">{ player1 }</p>
                  </div>
                  <div className="card-footer">
                      <button onClick={ handleP1Increment } className="form-control btn btn-success">+</button>
                  </div>
              </div>
          </div>

          <div className="col-md-6 mt-4">
              <div className="card text-center">
                  <h5 className="card-header">Player 2</h5>
                  <div className="card-body">
                      <p className="card-text display-1">{ player2 }</p>
                  </div>
                  <div className="card-footer">
                      <button onClick={ handleP2Increment } className="form-control btn btn-success">+</button>
                  </div>
              </div>
          </div>
      </div>

      { /* winner message */}
      <h2 className="alert alert-success">Player {/* winning player here */} wins!</h2>

      <hr />

      { /* reset button */}
      <button onClick={ handleReset } className="btn btn-danger">Reset</button>
  </>
);

export default App;