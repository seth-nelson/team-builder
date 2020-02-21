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
            <label htmlFor='name'>Name: </label>
            <input 
                type='text'
                id='name'
                name='name'
                value={member.name}
                placeHolder='Enter your Name'
                onChange={handleChanges}
            />

            <label htmlFor='email'>Email: </label>
            <input 
                type='text'
                id='email'
                name='email'
                value={member.email}
                placeHolder='Enter Your Email'
                onChange={handleChanges}
            />

            <select name='team-roles' id='role'>
                <option value=''>Choose your role</option>
                <option value='Student'>Student</option>
                <option value='Photographer'>Photographer</option>
                <option value='Ball Catcher'>Ball Catcher</option>
            </select>

            <button type='submit' value='Click to Submit'>
                Join the Team
            </button>
        </form>
    );
};

export default MemberForm;