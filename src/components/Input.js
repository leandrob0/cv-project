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
                {
                    (type === 'date') ? 
                    <input id={id} type={type} value={value} required min='2000-01-01' max='2040-01-01' onChange={changeHandler}/> :
                    <input id={id} type={type} value={value} required maxLength={max} onChange={changeHandler}/>
                }
            </>
        )
    }
}

export { Input };