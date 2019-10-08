import React from 'react';
import { Typography } from '@material-ui/core';
import withHoc from './FormErrorsHoc'


const FormErrors = ({ formErrors, classes }) => (
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            if (formErrors[fieldName].length > 0) {
                return (
                    <Typography className={classes.error} variant="overline" key={i}>{fieldName} {formErrors[fieldName]}</Typography>
                )
            } else {
                return '';
            }
        })}
    </div>
)

export default withHoc(FormErrors)