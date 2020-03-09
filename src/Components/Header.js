import React from 'react'
import ColourSelect from './ColourSelect'

export default class Header extends React.Component {
    HandleClick = (event) => {
        this.props.OnLinkClick(event.target.id);
    }
    
    render() {
        return (
            <div id="header">
                <div className="headerLink">
                    <ColourSelect ColourChange={this.props.ColourChange} BackgroundColour={this.props.BackgroundColour}></ColourSelect>
                </div>
                <div className="headerLink">
                    <span className={this.props.Colour} id={1} onClick={this.HandleClick}>home</span>
                </div>
                <div className="headerLink">
                    <span className={this.props.Colour} id={2} onClick={this.HandleClick}>about me</span>
                </div>
                <div className="headerLink">
                    <span className={this.props.Colour} id={3} onClick={this.HandleClick}>skills summary</span>
                </div>
                <div className="headerLink">
                    <span className={this.props.Colour} id={4} onClick={this.HandleClick}>coding experience</span>
                </div>
            </div>
        )
    }
}