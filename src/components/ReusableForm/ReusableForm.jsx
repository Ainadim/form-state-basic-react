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
            formTitle = {"Sign Up"}>
                <div>
                    <h2>Sign Up</h2>
                    <p>Sign Up</p>
                    <p>Please Sign up right now</p>
                </div>
            </DaynamicForm>
           
            <DaynamicForm 
            handleSubmit={updateSubmit} 
            formTitle = {"Profile Update"} 
            submitBtnTitle= {"Update"}>
                <div>
                    <h2>Update your Profile</h2>
                </div>
            </DaynamicForm>
        </div>

        
    );
};

ReusableForm.propTypes = {

};

export default ReusableForm;