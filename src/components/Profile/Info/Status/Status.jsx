import React from 'react';
import cls from './Status.module.css';

class Status extends React.Component {
    state = {
        editMode: false
    }

    // activateEditMode = () => {
    activateEditMode() {
        this.setState({ editMode: true });
    }

    deactivateEditMode() {
        this.setState({ editMode: false });
    }

    render() {
        return (
            <div className={ cls.status }>
                {
                    !this.state.editMode &&
                    <div className={ cls.content }>
                        <span
                            onDoubleClick={ this.activateEditMode.bind(this) }
                        >{ this.props.status }</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div className={ cls.input }>
                        <input
                            type='text'
                            value={ this.props.status }
                            onBlur={  this.deactivateEditMode.bind(this) }
                            autoFocus={ true }
                        />
                    </div>
                }
            </div>
        );
    }
}

export default Status;