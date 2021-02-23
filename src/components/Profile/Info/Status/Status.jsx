import React from 'react';
import cls from './Status.module.css';

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status });
        }
    }

    activateEditMode = () => {
        this.setState({ editMode: true });
    }

    deactivateEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({ status: e.currentTarget.value });
    }

    render() {
        return (
            <div className={ cls.status }>
                {
                    !this.state.editMode &&
                    <div className={ cls.content }>
                        <span
                            onDoubleClick={ this.activateEditMode }
                        >{ this.props.status || '---' }</span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div className={ cls.input }>
                        <input
                            type='text'
                            value={ this.state.status }
                            onBlur={  this.deactivateEditMode }
                            autoFocus={ true }
                            onChange={ this.onStatusChange }
                        />
                    </div>
                }
            </div>
        );
    }
}

export default Status;