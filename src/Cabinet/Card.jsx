import React from "react";

export default class Card extends React.Component{
    render() {
        return (
            <div className='card'>
                <span className='label'>
                    {this.props.label}
                </span>
                <div className='name'>
                    {this.props.name}
                </div>
                <div className='info'>
                    Прослушиваний: {this.props.playcount}
                </div>
                <div className='info'>
                    {
                        this.props.listeners ?
                            `Слушателей: ${this.props.listeners}` :
                            `Исполнитель: ${this.props.artist}`
                    }
                </div>
                <a target='_blank' href={this.props.url} className='info-link'>{this.props.linkLabel}</a>
            </div>
        );
    }
}