import { h, render, Component } from 'preact';
import "../styles/main.css";

class App extends Component {
    constructor() {
        super();
        this.state.message = "Preact Starter"
    }

    render(props, state) {
        return <h1 class="large-font text-center">{state.message}</h1>;
    }
}

render(<App />, document.querySelector("#root"));