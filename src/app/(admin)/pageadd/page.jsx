
const PageAdd = () =>{
    return(
        <>
            <section>
                    <h4 className="heading_titles purpleColor">Page Add</h4>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="card card_container">
                                    <div className="card-body">
                                        
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-7"> 
                                <div className="card card_container">
                                    
                                        <div className="formcontrol d-flex gap-2 ">
                                                <label>Meta Tag</label>
                                                <input type="text" className="form-input" placeholder="Add Meta Tag"></input>
                                        </div>

                                        <div className="formcontrol d-flex gap-2 mt-4">
                                                <label>Meta Discreptions</label> 
                                                <textarea className="form-input" placeholder="Meta discreptions"></textarea>
                                        </div>
                                    
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}
    export default PageAdd;