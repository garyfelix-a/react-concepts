// import React from 'react'
import PropTypes from 'prop-types';

export const Child1 = ({ input, setInput }) => {
    return (
        <>
            <label htmlFor="">Child 1 Input</label> <br />
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} /> <br />
        </>
    )
}

export const Child2 = ({ input, setInput}) => {
    return (
        <>
            <label htmlFor="">Child 2 Input</label><br />
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        </>
    )
}


Child1.propTypes = {
    input: PropTypes.string.isRequired,
    setInput: PropTypes.func.isRequired,
};

Child2.propTypes = {
    input: PropTypes.string.isRequired,
    setInput: PropTypes.func.isRequired,
};
  