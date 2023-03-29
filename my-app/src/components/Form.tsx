import React from 'react'

interface FormProps {
    children: React.ReactNode;
    onSubmit ?: React.FormEventHandler;
}

const Form = (props: FormProps) => {

    return(
        <form onSubmit={props.onSubmit}>{props.children}</form>
    )
}

export default Form