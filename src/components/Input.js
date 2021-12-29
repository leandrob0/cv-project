import React from "react";

class Input extends React.Component {

    render() {

        const {
            classId,
            label,
            type,
            max,
            changeHandler,
            value
        } = this.props;

        return (
            <>
                <label>{label}</label>
                {
                    (type === 'date') ? 
                    <input className={classId} type={type} value={value} required min='2000-01-01' max='2040-01-01' onChange={changeHandler}/> :
                    <input className={classId} type={type} value={value} required maxLength={max} onChange={changeHandler}/>
                }
            </>
        )
    }
}

export { Input };