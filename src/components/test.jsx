import React, { Component } from 'react';

class Test extends Component {
    state = {
        titre: "salut"
    }

    supprimerJoueur =() => {
        // ...
    }

    render() {
        return (
            <div>
                <h1>Salut à tous</h1>
                {this.state.titre}
            </div>
        );
    }
}

export default Test;