// 'use client'

// import { Switch } from 'antd';
// import { MdOutlineEditNote } from "react-icons/md";
// import { useState } from 'react';
// const MenuCard = ({ title }) => {
//     const [showText, setShowText] = useState(true);
//     const handleChangeMenu = (checked) => {
//         setShowText(checked);
//     } 

//     return ( 
//         <div className="card card_container mt-3">
//             <h4 className="heading_titles purpleColor">{title}</h4>
//             <div className="card-body">
//                 <table className="table tables_style">
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Menu name</th>
//                             <th scope="col">URL</th>
//                             <th scope="col" style={{ width: '120px' }}>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                         <tr>
//                             <td>1</td>
//                             <td>About us</td>
//                             <td>/about</td>
//                             <td>
//                                 <div className='d-flex gap-3 justify-content-center align-items-center'>
//                                     <span className='edit_menu'>
//                                         <MdOutlineEditNote />
//                                     </span>
//                                     <div className='d-flex gap-2 purpleColor' style={{ width: '90px' }}>
//                                         <Switch defaultChecked onChange={handleChangeMenu} />
//                                         <span style={{ fontSize: '14px', fontWeight: '500' }}>
//                                             {showText ? 'show' : 'Hide'}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </td>
//                         </tr> 

//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default MenuCard;

// component_admin/MenuCard.tsx

"use client";

import { useState } from "react";
import { Switch, Modal, Input } from "antd";
import { MdOutlineEditNote } from "react-icons/md";

export default function MenuCard({ section }) {
  const [links, setLinks] = useState(section?.links || []);
  const [editingLink, setEditingLink] = useState(null);
  const [editedLabel, setEditedLabel] = useState("");

  const toggleVisibility = async (id, current) => {
    const newVisibility = !current;
    console.log(`Toggling visibility for ID: ${id}, New Status: ${newVisibility}`);

    try {
      const res = await fetch(`/api/footer-links/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_visible: newVisibility }),
      });

      if (!res.ok) throw new Error("Failed to toggle visibility");

      setLinks((prev) =>
        prev.map((l) => (l.id === id ? { ...l, is_visible: newVisibility } : l))
      );
    } catch (err) {
      console.error("Toggle failed:", err);
    }
  };

  const openEdit = (link) => {
    setEditingLink(link);
    setEditedLabel(link.label);
  };

  const saveEdit = async () => {
    try {
      const res = await fetch(`/api/footer-links/${editingLink.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label: editedLabel }),
      });

      if (!res.ok) throw new Error("Failed to update label");

      setLinks((prev) =>
        prev.map((l) => (l.id === editingLink.id ? { ...l, label: editedLabel } : l))
      );
      setEditingLink(null);
    } catch (err) {
      console.error("Label update failed:", err);
    }
  }; 
  return (
    <div className="parents">
        <div className="card card_container mt-3">
            <h4 className="heading_titles purpleColor">{section.title}</h4>
            <div className="card-body">
                <table className="table tables_style">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Menu Name</th>
                    <th>URL</th>
                    <th>Visible / Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {links.map((link, idx) => (
                    <tr key={link.id}>
                        <td>{idx + 1}</td>
                        <td>{link.label}</td>
                        <td>{link.url}</td>
                        <td>
                        <div className="d-flex gap-3 justify-content-center align-items-center">
                            <span onClick={() => openEdit(link)} className="edit_menu">
                            <MdOutlineEditNote />
                            </span>
                            <div className="d-flex gap-2 purpleColor" style={{ width: "110px" }}>
                            <Switch
                                checked={link.is_visible}
                                onChange={() => toggleVisibility(link.id, link.is_visible)}
                            />
                            <span style={{ fontSize: "14px", fontWeight: "500" }}>
                                {link.is_visible ? "Show" : "Hide"}
                            </span>
                            </div>
                        </div>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            <Modal
                title="Edit Menu Label"
                open={!!editingLink}
                onOk={saveEdit}
                onCancel={() => setEditingLink(null)}
            >
                <Input value={editedLabel} onChange={(e) => setEditedLabel(e.target.value)} />
            </Modal>
        </div> 
    </div>
  );
}
