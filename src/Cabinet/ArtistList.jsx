import React from "react";
import Context from "../Context";

export default class ArtistList extends React.Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            artists: [],
        };

        this.URL = process.env.REACT_APP_API_URL;
        this.KEY = process.env.REACT_APP_API_KEY;
    }

    async getArtists() {

        const { req } = this.context;

        if (!req) {
            const result = (await fetch(`${this.URL}?method=chart.gettopartists&api_key=${this.KEY}&format=json`)).json()
        }
    }

    componentDidMount() {

    }

    render() {
        return <div></div>;
    }
}