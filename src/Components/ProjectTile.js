import React from "react";

export default class ProjectTile extends React.Component {
    render() {
        return (
        <div className="projectTile" style={{backgroundColor: this.props.color}} onClick={this.OnTileClick}>
            <div className="projectDescriptionBlock">
                <h3>{this.props.title}</h3>
                {this.props.tech.map(t => {
                    return <span className="techBadge" style={{backgroundColor: this.props.badgeColor}}>{t}</span>
                })}<br/>
                {this.props.description}
            </div>
        </div>
        );
    }
}