'use client';
import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { useState, useEffect } from "react";
import MyEditor from "@/component_admin/MyEditor";
 
const selectedMenu = [
    { label: 'Main Menu', value: 'mainMenu' },
     { label: 'About', value: 'about' },
    { label: 'Why Us', value: 'whyus' },
    { label: 'SOLAQ', value: 'solaq' },
    { label: 'Solutions', value: 'solutions' },
    { label: 'Contact', value: 'contact' },
    { label: 'Awards & Media', value: 'awardMedia' },
];

const PageAdd = () =>
{
    const [pageTitle, setPageTitle] = useState('');
    const [metaTitle, setMetaTitle] = useState('');
    const [editorData, setEditorData] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [selected, setSelected] = useState('mainMenu');
    const [bannerFile, setBannerFile] = useState(null);
    const [footerOptions, setFooterOptions] = useState({
        footerNavigation: false,
        footerSolution: false,
        footerAboutus: false,
    });
    // edit state
    const [allPages, setAllPages] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editSlug, setEditSlug] = useState(null);


    // fetch all page
    const fetchPages = async () => {
        const res = await fetch('/api/pages');
        const data = await res.json();
        setAllPages(data.pages || []);
    };

    useEffect(() => {
        fetchPages();
    }, []);


    const handleFooterChange = (e) =>
    {
        const { id, checked } = e.target;
        setFooterOptions((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    
    const handleBannerChange = (e) => setBannerFile(e.target.files?.[0]);  
    const uploadBanner = async () => {
        if (!bannerFile) return '';
        const formData = new FormData();
        formData.append('banner', bannerFile);

        const res = await fetch('/api/upload/banner', { method: 'POST', body: formData });
        if (res.ok) {
            const { url } = await res.json();
            return url;
        }
        return '';
    };

    const handelSubmitNewPage = async (e) =>
    {
        e.preventDefault();
         const banner = await uploadBanner();
         const slug = pageTitle.trim().toLowerCase().replace(/\s+/g, '-');

           const payload = {
                title: pageTitle,
                slug,
                metaTitle,
                metaDescription,
                banner,
                content: editorData,
                menuPosition: selected,
                footerOptions
            };

         if(isEditing && editSlug){
            await fetch(`/api/pages/${editSlug}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
         }else{
            await fetch('/api/pages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
         
         } 
     
        // Reset form
        setPageTitle(''); setMetaTitle(''); setMetaDescription(''); setEditorData('');
        setBannerFile(null); setIsEditing(false); setEditSlug(null);
         await fetchPages();
         alert(isEditing ? 'Page updated successfully' : 'Page created successfully');
    }


    // edit page function
    const handleEdit = async (page) => {

        try{
               const res = await fetch(`/api/pages/${page.slug}`);
               const fullPage = await res.json();  

                setPageTitle(fullPage.title);
                setMetaTitle(fullPage.meta_title || '');
                setMetaDescription(fullPage.meta_description || '');
                setEditorData(fullPage.content || '');
                setSelected(fullPage.menu_position);
                setFooterOptions({
                    footerNavigation: fullPage.footer_navigation === 1,
                    footerSolution: fullPage.footer_solution === 1,
                    footerAboutus: fullPage.footer_aboutus === 1,
                });
                setIsEditing(true);
                setEditSlug(fullPage.slug);
                window.scrollTo(0, 0); // scroll up to the form

        }catch(error){
              console.error("Failed to load page for editing", error);
              alert("Failed to load page details. Try again.");
        }
 
      
    };

    // delete handal
    const handleDelete = async (slug) => {
       if (!confirm("Are you sure you want to delete this page?")) return;
       await fetch(`/api/pages/${slug}`, { method: 'DELETE' });
       await fetchPages();
    };

    // cleare
    const handalCleare = async () =>{
          setPageTitle(''); setMetaTitle(''); setMetaDescription(''); setEditorData('');
          setBannerFile(null); setIsEditing(false); setEditSlug(null);
         await fetchPages();
    }

    return (
        <>
            <section>
                <h4 className="heading_titles purpleColor">Page Add</h4>
                <div className="card card_container">
                    <form onSubmit={handelSubmitNewPage}>
                        <div className="row">
                            <div className="col-md-5">

                                <div className="formcontrol d-flex gap-2 ">
                                    <label>Page title</label>
                                    <input type="text"
                                        className="form-input"
                                        placeholder="page title...! "
                                        value={pageTitle}
                                        onChange={(e) => setPageTitle(e.target.value.trim())}
                                    ></input>
                                </div>

                                <div className="formcontrol d-flex gap-2 mt-4">
                                    <label>Page Banner</label>
                                    <input type="file"
                                        className="form-input"
                                        placeholder="page banner"
                                        onChange={handleBannerChange}
                                    ></input>
                                </div>

                            </div>

                            <div className="col-md-7">
                                <div className="formcontrol d-flex gap-2 ">
                                    <label>Meta Tag</label>
                                    <input type="text"
                                        className="form-input"
                                        placeholder="Add Meta Tag"
                                        value={metaTitle}
                                        onChange={(e) => setMetaTitle(e.target.value)}
                                    ></input>
                                </div>

                                <div className="formcontrol d-flex gap-2 mt-4">
                                    <label>Meta Discreptions</label>
                                    <textarea className="form-input"
                                        placeholder="Meta discreptions"
                                        value={metaDescription}
                                        onChange={(e) => setMetaDescription(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-md-12">
                                <h6 className="purpleColor mb-3">Your content</h6>
                               
                                <MyEditor editorData={editorData} setEditorData={setEditorData} /> 
                                {
                                    // <div dangerouslySetInnerHTML={{ __html: editorData }} />
                                }

                            </div>

                            <div className="col-12">
                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <h6 className="purpleColor mb-3">Select Menu Position</h6>
                                        {
                                            selectedMenu.map((menu, index) => (
                                                <div className="form-check mt-2" key={index}>
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="menuPosition"
                                                        id={menu.value}
                                                        value={menu.value}
                                                        checked={selected === menu.value}
                                                        onChange={() => setSelected(menu.value)}
                                                    />
                                                    <label className="form-check-label" htmlFor={menu.name}>
                                                        {menu.label}
                                                    </label>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <div className="col-md-6">
                                        <h6 className="purpleColor mb-3">Select Footer Position</h6>
                                        <div className="form-check form-switch mt-2">
                                            <input className="form-check-input" type="checkbox"
                                                role="switch" id="footerNavigation"
                                                checked={footerOptions.footerNavigation}
                                                onChange={handleFooterChange}
                                            ></input>
                                            <label className="form-check-label" htmlFor="footerNavigation">Navigation </label>
                                        </div>

                                        <div className="form-check form-switch mt-2">
                                            <input className="form-check-input" type="checkbox"
                                                role="switch" id="footerSolution"
                                                checked={footerOptions.footerSolution}
                                                onChange={handleFooterChange}
                                            ></input>
                                            <label className="form-check-label" htmlFor="footerSolution">Solutions </label>
                                        </div>

                                        <div className="form-check form-switch mt-2">
                                            <input className="form-check-input" type="checkbox"
                                                role="switch" id="footerAboutus"
                                                checked={footerOptions.footerAboutus}
                                                onChange={handleFooterChange}
                                            ></input>
                                            <label className="form-check-label" htmlFor="footerAboutus">About Us </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 d-flex gap-3 justify-content-end mt-4">
                                <button type="submit" className="submit_button_admin">
                                    {isEditing ? 'Update' : 'Create Page'}
                                </button>

                                 <button type="button" className="clear_button_admin"
                                  onClick={handalCleare}
                                 >
                                    Cleare
                                </button>

                                {isEditing && (
                                    <button
                                        type="button"
                                        className="clear_button_admin ms-3"
                                        onClick={() => {
                                        setIsEditing(false);
                                        setEditSlug(null);
                                        setPageTitle('');
                                        setMetaTitle('');
                                        setMetaDescription('');
                                        setEditorData('');
                                        setFooterOptions({
                                            footerNavigation: false,
                                            footerSolution: false,
                                            footerAboutus: false,
                                        });
                                        }}
                                    >
                                        Cancel Edit
                                    </button>
                                    )}
                            </div>
                        </div>
                    </form>
                </div>


                 <div className="card card_container mt-3">
                        <h4 className="heading_titles purpleColor">New pages</h4>
                        <div className="card-body">
                          <table className="table tables_style">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Menu position</th> 
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
            
                                   {allPages.map((page, index) => (
                                        <tr key={page.slug}>
                                            <td>{index + 1}</td>
                                            <td>{page.title}</td>
                                            <td>{page.menu_position}</td>
                                            <td>
                                                <div className="d-flex gap-3 justify-content-center align-items-center">
                                                    <span className="edit_menu" onClick={() => handleEdit(page)}>
                                                        <MdOutlineEditNote />
                                                    </span>
                                                    <span className="delete_menu" onClick={() => handleDelete(page.slug)}>
                                                        <RiDeleteBin6Line />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))} 
                             
                            </tbody>
                          </table>
                        </div>
                      </div>

            </section>
        </>
    )
}
export default PageAdd;