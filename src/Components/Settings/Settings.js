import { Component } from "react";

class Settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            player1Name: "",
            player2Name: "",
            winningScore: this.props.winningScore,
            alternateEvery: this.props.alternateEvery,
        };

        this.handleChangeP1Name=this.handleChangeP1Name.bind(this);
        this.handleChangeP2Name=this.handleChangeP2Name.bind(this);
        this.handleChangeWS=this.handleChangeWS.bind(this);
        this.handleChangeAE=this.handleChangeAE.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChangeP1Name(e) {
        this.setState({ player1Name: e.currentTarget.value });
    }

    handleChangeP2Name(e) {
        this.setState({ player2Name: e.currentTarget.value });
    }

    handleChangeWS(e) {
        this.setState({ winningScore: e.currentTarget.value });
    }

    handleChangeAE(e) {
        this.setState({ alternateEvery: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSave({ ...this.state });
    }

    render() {
        return (
            <>
                <div className="form-group">
                    <label>Player 1 Name</label>
                    <input
                        className="form-control"
                        type="text"
                        value={ this.player1Name }
                        onChange={ this.handleChangeP1Name }
                    />

                    <label>Player 2 Name</label>
                    <input
                        className="form-control"
                        type="text"
                        value={ this.player2Name }
                        onChange={ this.handleChangeP2Name }
                    />

                    <label>Winning Score</label>
                    <input
                        className="form-control"
                        type="number"
                        value={ this.winningScore }
                        placeholder="21"
                        onChange={ this.handleChangeWS }
                    />

                    <label>Alternate Every</label>
                    <input
                        className="form-control"
                        type="number"
                        value={ this.alternateEvery }
                        placeholder="5"
                        onChange={ this.handleChangeAE }
                    />

                    <button
                        className="btn btn-primary"
                        onClick={ this.handleSubmit }
                    >Start Game</button>
                </div>
                
            </>
        )
    }


}

export default Settings;