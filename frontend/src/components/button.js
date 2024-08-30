import React from "react"
import PropTypes from 'prop-types'

const styles = {
    WebkitTextStrokeColor: '#312A21',
    fontFamily: 'Viga',
    marginBottom: 160,
    padding: '10px 35px',
    fontWeight: '3px',
    fontSize: 35,
    color: '#fff',
    backgroundColor: '#908A27',
    borderRadius: 30,
    cursor: 'pointer',
    margin: '10px',
    border: '4px solid black'
}

const Button = ({
    children,
    className="btn1",
    ...restProps
}) => {
    return (
    <button
     className={`${className}`}
     style={styles}
     {...restProps}
    >
        {children}
    </button>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
}

export {Button}