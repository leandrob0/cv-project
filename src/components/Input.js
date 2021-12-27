import React from "react";

class Input extends React.Component {

    render() {

        const {
            id,
            label,
            type,
            max,
            changeHandler,
            value
        } = this.props;

        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type} value={value} required maxLength={max} onChange={changeHandler}/>
            </>
        )
    }
}

export { Input };