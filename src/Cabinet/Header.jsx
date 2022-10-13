import React from "react";
import Context from "../Context";

export default class Header extends React.Component {
    static contextType = Context;

    render() {
        const {setMusic, setRequest} = this.context;

        const onKeyPress = (e) => {
            if (e.key === 'Enter') {
                setRequest(e.target.value);
            }
        };

        return (
            <header className="header">
                <a href="index.html">
                    <img className="logo" src="images/icon-logo.png" alt="Logo"/>
                </a>

                <nav className="navigation">
                    <a className="navigation__item" onClick={() => { setMusic(true); setRequest('')}}>Топ треков</a>
                    <a className="navigation__item" onClick={() => { setMusic(false); setRequest('')}}>Исполнители</a>
                    <input onKeyPress={onKeyPress} placeholder="Исполнитель или трек" className="search" type="text"/>
                </nav>
            </header>
        );
    }
}