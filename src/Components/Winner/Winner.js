const Winner = ({ winner }) => {

    return (
        <>
            { winner !== 0 ? <h2 className="alert alert-success">Player { winner } wins!</h2> : <></> }
        </>
    );
};

export default Winner;