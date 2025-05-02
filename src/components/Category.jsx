import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryProm = fetch("/categories.json")
    .then((res) => res.json())

const Category = () => {

    const categories = use(categoryProm)

    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>

            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    categories.map((category) => (
                        <NavLink className={"btn bg-base-100 hover:bg-base-200 border-0 font-semibold text-accent"} key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>
                    ))
                }
            </div>

        </div>
    );
};

export default Category;