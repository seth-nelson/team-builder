import React from 'react';

const MemberProfile = props => {
    return (
        <div className='member-profile'>
            {props.members.map(member => (
                <div className='member' key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                    <h5>{member.email}</h5>
                </div>
            ))}
        </div>
    );
};

export default MemberProfile;