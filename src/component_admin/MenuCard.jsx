'use client'

import { Switch } from 'antd';
import { MdOutlineEditNote } from "react-icons/md";
import { useState } from 'react';

const MenuCard = ({ title }) => {
    const [showText, setShowText] = useState(true);

    const handleChangeMenu = (checked) => {
        setShowText(checked);
    }

    return (
        <div className="card card_container mt-3">
            <h4 className="heading_titles purpleColor">{title}</h4>
            <div className="card-body">
                <table className="table tables_style">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Menu name</th>
                            <th scope="col">URL</th>
                            <th scope="col" style={{ width: '120px' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>About us</td>
                            <td>/about</td>
                            <td>
                                <div className='d-flex gap-3 justify-content-center align-items-center'>
                                    <span className='edit_menu'>
                                        <MdOutlineEditNote />
                                    </span>
                                    <div className='d-flex gap-2 purpleColor' style={{ width: '90px' }}>
                                        <Switch defaultChecked onChange={handleChangeMenu} />
                                        <span style={{ fontSize: '14px', fontWeight: '500' }}>
                                            {showText ? 'show' : 'Hide'}
                                        </span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MenuCard;
