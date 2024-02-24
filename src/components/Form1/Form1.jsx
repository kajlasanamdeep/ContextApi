import React, { useContext } from 'react'
import { Row, Form, Button } from 'react-bootstrap'
import UserContext from '../../context'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Form1() {
    const { currentStep,
        setCurrentStep,
        userData,
        setUserData
    } = useContext(UserContext)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            firstName: userData?.firstName,
            lastName: userData?.lastName,
            email: userData?.email,
        },
        validationSchema: Yup.object({
            firstName: Yup.string("").min(4).required(),
            lastName: Yup.string("").min(4).required(),
            email: Yup.string("").email().min(4).required(),
        }),
        onSubmit: (values) => {
            console.log(values);
            setUserData(prev => ({
                ...prev,
                ...values
            }))
            setCurrentStep(2)
        }
    });
    return (
        <Form onSubmit={formik.handleSubmit} className='container' hidden={currentStep !== 1}>
            <Form.Label>STEP 1</Form.Label>
            <Form.Group as={Row} className="mb-3 me-1">
                <Form.Label style={{ textAlign: "left" }}>
                    First Name
                </Form.Label>
                <Form.Control name={"firstName"} value={formik.values?.firstName} placeholder={`Enter Your First Name`} onChange={formik.handleChange} type={'text'} onBlur={formik.handleBlur} />
                <Form.Text style={{ color: "red" }}>{formik.touched?.firstName && formik.errors?.firstName}</Form.Text>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 me-1">
                <Form.Label style={{ textAlign: "left" }}>
                    Last Name
                </Form.Label>
                <Form.Control name={"lastName"} value={formik.values?.lastName} placeholder={`Enter Your Last Name`} onChange={formik.handleChange} type={'text'} onBlur={formik.handleBlur} />
                <Form.Text style={{ color: "red" }}>{formik.touched?.lastName && formik.errors?.lastName}</Form.Text>
            </Form.Group>
            <Form.Group as={Row} className="mb-3 me-1">
                <Form.Label style={{ textAlign: "left" }}>
                    Email
                </Form.Label>
                <Form.Control name={"email"} value={formik.values?.email} placeholder={`Enter Your Email`} onChange={formik.handleChange} type={'email'} onBlur={formik.handleBlur} />
                <Form.Text style={{ color: "red" }}>{formik.touched?.email && formik.errors?.email}</Form.Text>
            </Form.Group>
            <Button type={'submit'}>Next</Button>
        </Form >)
}

export default Form1
