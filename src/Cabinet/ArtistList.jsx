import React from "react";
import Context from "../Context";
import Card from "./Card";

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

        const { request } = this.context;

        if (!request) {
            const result = await fetch(`${this.URL}?method=chart.gettopartists&api_key=${this.KEY}&format=json`).then(res => res.json());

            return result.artists.artist;
        } else {
            const result = await fetch(`${this.URL}?method=artist.search&limit=25&artist=${request}&api_key=${this.KEY}&format=json`).then(res => res.json());

            return result.results.artistmatches.artist;
        }
    }

    componentDidMount() {
        this.isMount = true;

        this.getArtists().then(artists => this.setState({artists: artists}));
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.getArtists().then(artists => {
            if (this.isMount) {
                this.setState({artists: artists})
            }
        });
    }

    render() {
        return (
            <div className='card-list'>
                {this.state.artists.map((artist, index) => <Card key={index} linkLabel='Страница автора' label='Артист' name={artist.name} playcount={artist.playcount} listeners={artist.listeners} url={artist.url}/>)}
            </div>
        );
    }

    componentWillUnmount() {
        this.isMount = false;
    }
}