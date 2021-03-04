import React, { useState, useEffect } from 'react';
import cls from './Status.module.css';

const Status = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    // useEffect(() => {
    //     if (status !== props.status) {
    //         setStatus(props.status);
    //     }
    // });

    return (
        <div className={ cls.status }>
            {
                !editMode &&
                <div className={ cls.content }>
                    <span
                        onDoubleClick={ activateEditMode }
                    >{ props.status ? props.status : '---' }</span>
                </div>
            }
            {
                editMode &&
                <div className={ cls.input }>
                    <input
                        type='text'
                        value={ status }
                        onBlur={ deactivateEditMode }
                        autoFocus={ true }
                        onChange={ onStatusChange }
                    />
                </div>
            }
        </div>
    );
}

export default Status;

/*
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

export default Status;*/
