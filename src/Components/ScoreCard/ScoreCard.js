const ScoreCard = ({ serving, player, playerScore, handleClick }) => {

    return (
        <>
            <div className="col-md-6 mt-4">
                <div className={  serving ? "card text-center bg-dark text-white" : "card text-center"  }>
                    <h5 className="card-header">{ player }</h5>
                    <div className="card-body">
                        <p className="card-text display-1">{ playerScore }</p>
                    </div>
                    <div className="card-footer">
                        <button onClick={ handleClick } className="form-control btn btn-success">+</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ScoreCard;