import React, { useContext } from 'react'
import UserContext from '../../context'
import { Button } from 'react-bootstrap'

function Stepper() {
    const { currentStep,
        setCurrentStep,
    } = useContext(UserContext)
    return (
        <div className='mt-1'>
            <Button className='me-1' onClick={() => {
                setCurrentStep(1)
            }}>1</Button>
            <Button onClick={() => {
                setCurrentStep(2)
            }} disabled={currentStep !== 2}>2</Button>
        </div>
    )
}

export default Stepper
