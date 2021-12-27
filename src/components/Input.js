import React from "react";

class Input extends React.Component {

    render() {

        const {
            id,
            label,
            type,
            changeHandler,
            max
        } = this.props;

        return (
            <>
                <label for={id}>{label}</label><input id={id} type={type} onChange={changeHandler} required maxLength={max}></input>
            </>
        )
    }
}

export { Input };