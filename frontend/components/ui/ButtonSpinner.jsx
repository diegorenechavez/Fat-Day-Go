import React, { Component } from 'react'

export default class ButtonSpinner extends Component {
    render() {
        return (
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        )
    }
}
