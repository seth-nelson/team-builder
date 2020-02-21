import React, { useState } from 'react';

const MemberForm = props => {
    const [member, setMember] = useState({name: '', email: '', role: ''});

    const handleChanges = event => {
        console.log('event', event.target.value);
        setMember({...member, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({name: '', email: '', role: ''});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name Here</label>
            <input 
                type='text'
                id='name'
                name='name'
                value={member.name}
                placeHolder='Type Name Here'
                onChange={handleChanges}
            />

            <label htmlFor='email'>Enter Email</label>
            <input 
                type='email'
                id='email'
                name='email'
                value={member.email}
                placeHolder='Enter Your Email'
                onChange={handleChanges}
            />

            <select name='team-roles' id='role'>
                <option value=''>Choose your role</option>
                <option value='Leader'>Leader</option>
                <option value='Support'>Support</option>
                <option value='Defensive'>Defensive</option>
            </select>

            <button type='submit' value='Click to Submit'>
                Submit Form
            </button>
        </form>
    );
};

export default MemberForm;