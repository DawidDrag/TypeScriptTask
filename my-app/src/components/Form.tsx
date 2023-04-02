import React from 'react'

type FormProps = {
    onSubmit: React.FormEventHandler;
    onChange ? : React.ChangeEventHandler;
    onClick ?: React.MouseEventHandler;
    inputTextValue ? : string;
    
}

const Form = (props: FormProps) => {

    return(
        <form onSubmit={props.onSubmit}>
            <input value={props.inputTextValue} name='dawid' onChange={props.onChange} type='text'></input>
            <input type='submit'></input>
            <input onClick={props.onClick} value='Clear localStore' type='button'></input>
        </form>
    )
}

export default Form