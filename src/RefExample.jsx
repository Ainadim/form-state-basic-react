import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const RefExample = props => {
    const textRef = useRef()
    const mailRef = useRef()

    useEffect(() => {
        textRef.current.focus()
    }, [])
    const handleForm = (e) => {
        e.preventDefault()
        console.log(textRef, mailRef.current.value);
    }

    return (
        <div>
            <h2>UseRef</h2>
            <form action="" onSubmit={handleForm}>
                <input ref={textRef} type="text" name="Name" id="" />
                <input ref={mailRef} type="email" name="Email" id="" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

RefExample.propTypes = {
    
};

export default RefExample;