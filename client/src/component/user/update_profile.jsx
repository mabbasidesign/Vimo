import React from 'react';
import UserLayout from '../../hoc/user';
import UpdatePersonalInfo from './update_personal_info';

const UpdateProfile = () => {
    return (
        <UserLayout>
            <h1>
                Profile -1 
            </h1>
            <UpdatePersonalInfo />
        </UserLayout>
    );
}

export default UpdateProfile;