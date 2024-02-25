import React, { useContext } from 'react'
import UserContext from '../../context'

function Details() {
    const { currentStep,
        userData,
    } = useContext(UserContext)

    return (
        <div hidden={currentStep !== 3}>
            <h3>Your Details</h3>
            <ul>
                <li><b>First Name</b> {userData?.firstName}</li>
                <li><b>Last Name</b> {userData?.lastName}</li>
                <li><b>Email</b> {userData?.email}</li>
                <li><b>Password</b> {userData?.password}</li>
            </ul>
        </div>
    )
}

export default Details
