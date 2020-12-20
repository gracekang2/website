import React from "react";

export default class ProjectTile extends React.Component {
    state = {
        desc: false
    };

    OnTileClick = (event) => {
        this.setState((prev) => ({
            desc: !prev.desc
        }));
    }

    render() {
        return (
        <div className="projectTile" style={{backgroundColor: this.props.color, color: this.props.textColor , border: "1px solid " + this.props.borderColor}} onClick={this.OnTileClick}>
            <div className="projectDescriptionBlock">
                <h3>{this.props.title}</h3>
                {this.props.image && !this.state.desc ? <img src={this.props.image} className="projectTileImg"/> : <></>}
                {this.props.tech.map(t => {
                    return <span className="techBadge" style={{backgroundColor: this.props.badgeColor}}>{t}</span>
                })}<br/>
                {this.state.desc || !this.props.image ? this.props.description : <></>}
            </div>
        </div>
        );
    }
}