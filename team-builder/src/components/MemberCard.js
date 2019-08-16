import React from 'react';


const MemberCard = props =>  {
    console.log(props.teamList)
    return(
        <div>
            
            {props.teamList.map(member => {
                return (
                    <div key={member.id}>
                        <h2>{member.name}</h2>
                        <h4>{member.role}</h4>
                        <p>{member.email}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default MemberCard;