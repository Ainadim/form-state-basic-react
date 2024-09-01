import React from 'react';
import PropTypes from 'prop-types';
import DaynamicForm from './DaynamicForm';

const ReusableForm = props => {

    const signUpSubmit = data => {
        console.log("Sign Up data", data);
    }

    const updateSubmit = data => {
        console.log("Update Profile Data", data);
    }


    return (
        <div>
            Here is the daynamic Form:
            <DaynamicForm 
            handleSubmit={signUpSubmit} 
            formTitle = {"Sign Up"}></DaynamicForm>
           
            <DaynamicForm 
            handleSubmit={updateSubmit} 
            formTitle = {"Profile Update"} 
            submitBtnTitle= {"Update"}></DaynamicForm>
        </div>

        
    );
};

ReusableForm.propTypes = {

};

export default ReusableForm;