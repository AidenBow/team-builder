import React, {useState} from 'react';

const Form = props => {
    const [member, setMember] = useState({ name: "", email: "", role: "" });

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
        console.log(event.target.value)
        console.log(event.target.name)
    }

   const submitForm = event => {
        event.preventDefault();
        const newMember = {
          ...member,
          id: Date.now()
        };
        props.addNewMember(newMember);
      }; 

    return (
        <div>
            <form onSubmit={submitForm}>
                <lable>Name</lable>
                    <input 
                        type="text"
                        name="name"
                        value={member.name}
                        onChange={changeHandler}
                    />

                <lable>Email</lable>
                    <input 
                        type="text"
                        name="email"
                        value={member.email}
                        onChange={changeHandler}
                    />

                <lable>Role</lable>
                <input 
                    type="text"
                    name="role"
                    value={member.role}
                    onChange={changeHandler}
                />

                <button type="submit">Add Member</button>
            </form>
            
        </div>
    )
}

export default Form;
