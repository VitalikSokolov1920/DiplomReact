import React from "react";
import Card from "./Card";
import Context from "../Context";

export default class MusicList extends React.Component {
    static contextType = Context;

    constructor(props) {
        super(props);

        this.state = {
            tracks: []
        };

        this.URL = process.env.REACT_APP_API_URL;
        this.KEY = process.env.REACT_APP_API_KEY;
    }

    async getTracks() {

        const { request } = this.context;

        if (!request) {
            const result = await fetch(`${this.URL}?method=chart.gettoptracks&limit=25&api_key=${this.KEY}&format=json`).then(res => res.json());

            return result.tracks.track;
        } else {
            const result = await fetch(`${this.URL}?method=track.search&limit=25&track=${request}&api_key=${this.KEY}&format=json`).then(res => res.json());

            return result.results.trackmatches.track;
        }
    }

    componentDidMount() {
        this.isMount = true;

        this.getTracks().then(tracks => this.setState({tracks: tracks}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.getTracks().then(tracks => {
            if (this.isMount) {
                this.setState({tracks: tracks})
            }
        });
    }

    render() {
        return (
            <div className='card-list'>
                {this.state.tracks.map((track, index) => <Card key={index} linkLabel='Страница трека' label='Трек' name={track.name} playcount={track.playcount} artist={track.artist.name} url={track.url}/>)}
            </div>
        );
    }

    componentWillUnmount() {
        this.isMount = false;
    }
}