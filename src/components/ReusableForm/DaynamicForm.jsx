import React from 'react';
import PropTypes from 'prop-types';

const DaynamicForm = ({handleSubmit, formTitle, submitBtnTitle ='Submit', children}) => {

    const localDataSubmit = e => {
            e.preventDefault()
            const data = {
                name: e.target.name.value,
                email: e.target.email.value,
                password: e.target.password.value,
            }
            handleSubmit(data)
    }
    return (        
        <div>
            <h1>{formTitle}</h1>
            {children}
            <form onSubmit={localDataSubmit} action="">
                <input type="text" name='name' />
                <br />
                <input required type="email" name='email' />
                <br />
                <input required type="password" name="password" />
                <br />
                <input type="submit" value={submitBtnTitle} />
            </form>
        </div>
    );
};

DaynamicForm.propTypes = {
    
};

export default DaynamicForm;