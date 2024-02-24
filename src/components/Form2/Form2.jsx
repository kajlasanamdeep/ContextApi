import React, { useContext } from 'react'
import { Row, Form, Button } from 'react-bootstrap'
import UserContext from '../../context'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Form2() {
    const { currentStep,
        setCurrentStep,
        userData,
        setUserData
    } = useContext(UserContext)
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            password: userData?.password,
            confirmPassword: userData?.confirmPassword,
        },
        validationSchema: Yup.object({
            password: Yup.string("").min(4).required(),
            confirmPassword: Yup.string("").min(4).required().oneOf([Yup.ref('password')], 'Passwords must match'),
        }),
        onSubmit: (values) => {
            console.log(values);
            setUserData(prev => ({
                ...prev,
                ...values
            }))
            alert(`Thanks For Form Submittion ${userData?.firstName}`)
            // window.location.reload();
            // setCurrentStep(3)
        }
    });

    return (
        <Form onSubmit={formik.handleSubmit} className='container' hidden={currentStep !== 2}>
            <Form.Label>STEP 2</Form.Label>
            <Form.Group as={Row} className="mb-3 me-1">
                <Form.Label style={{ textAlign: "left" }}>
                    Password
                </Form.Label>
                <Form.Control name={"password"} placeholder={`Enter Your Password`} onChange={formik.handleChange} value={formik.values.password} type={'password'} onBlur={formik.handleBlur}/>
                <Form.Text style={{ color: "red" }}>{formik.touched?.password && formik.errors?.password}</Form.Text>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 me-1">
                <Form.Label style={{ textAlign: "left" }}>
                    Confirm Password
                </Form.Label>
                <Form.Control name={"confirmPassword"} placeholder={`Confirm Your Password`} onChange={formik.handleChange} value={formik.values.confirmPassword} type={'password'} onBlur={formik.handleBlur}/>
                <Form.Text style={{ color: "red" }}>{formik.touched?.confirmPassword && formik.errors?.confirmPassword}</Form.Text>
            </Form.Group>
            <Button type={'submit'}>Submit</Button>
        </Form>)
}

export default Form2
