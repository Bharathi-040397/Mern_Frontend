import React from 'react'
import {Form} from 'react-bootstrap'

function Input(props) {
    return (
        <div className='input'>
            <Form.Group controlId={props.id}>
                <Form.Label>{ props.label}</Form.Label>
                <Form.Control type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    name={props.name}
                    onChange={props.onChange}
                />
    <Form.Text className="text-muted">
      {props.errorMessage}
    </Form.Text>
  </Form.Group>

            
        </div>
    )
}

export default Input
