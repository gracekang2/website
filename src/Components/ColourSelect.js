import React from 'react'

export default class ColourSelect extends React.Component {
    HandleChange = (event) => {
        this.props.ColourChange(event.target.value);
    };

    render() {
        return (
            <div id="colourSelect" className={this.props.BackgroundColour}>
                <select onChange={this.HandleChange} defaultValue={0}>
                    <option className="backgroundColour1" value={1}></option>
                    <option className="backgroundColour2" value={2}></option>
                    <option className="backgroundColour3" value={3}></option>
                    <option className="backgroundColour4" value={4}></option>
                    <option className="backgroundColour6" value={6}></option>
                </select>
            </div>
        )
    }
}