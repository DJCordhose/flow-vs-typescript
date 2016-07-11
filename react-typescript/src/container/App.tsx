import * as React from "react";

import Hello from "../components/Hello";
import store from '../stores/dataStore';

type State = { compiler: string; framework: string; }
export default class App extends React.Component<void, State> {

    constructor(props: any) {
        super(props);
        this.state = store.model || {
            compiler: null,
            framework: null
        };
    }

    componentDidMount() {
        store.register(() => this.setState(store.model));
    }

    render() {
        const {compiler, framework} = this.state;
        return <Hello compiler={compiler} framework={framework} />;
    }
}