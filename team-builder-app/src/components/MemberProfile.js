import React from 'react';
import MemberProfile from './MemberForm';

const memberProfile = props => {
    return (
        <div className='member-profile'>
            {props.members.map(member => (
                <div className='member' key={member.id}>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    );
};

export default MemberProfile;