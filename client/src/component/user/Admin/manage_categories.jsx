import React from 'react';
import ManageBrands from './manage_brands';
import ManageWoods from './manage_woods';
import UserLayout from '../../../hoc/user';

const ManageCategories = () => {
    return (
        <UserLayout>
            <div>
                <ManageBrands />
                <ManageWoods />
            </div>
        </UserLayout>
    );
}

export default ManageCategories;