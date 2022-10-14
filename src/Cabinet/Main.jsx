import React from "react";
import MusicList from "./MusicList";
import ArtistList from "./ArtistList";
import Context from "../Context";

export default class Main extends React.Component {
    static contextType = Context;

    render() {
        const { music } = this.context;

        return (
            <main className="wrapper">
                { music ? <MusicList/> : <ArtistList/> }
            </main>
        );
    }
}