
'use client';

import React from 'react';
 import { useState } from 'react'; 

const Sliders = () => { 
  
    const [selectedSlider, setSelectedSlider] = useState('Slider 1');
    const [sliderData, setSliderData] = useState({
      heading: '',
      heading: '',
      heading: '',
      heading: '',
      banner: null,
    }); 

    const handleChangeSlider = (e) => {
      setSelectedSlider(e.target.value);
    }; 

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setSliderData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleFileChange = (e) => {
      const { name, files } = e.target;
      setSliderData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    };
  


 const handleSubmit = async (e) => {
  
    e.preventDefault();
    const formData = new FormData(e.target);
    let sliderNumber = '';

      console.log("submited")
       switch (selectedSlider) {
        case 'Slider 1':
          formData.append('header', sliderData.slider1Header);
          if (sliderData.banner) {
            formData.append('banner', sliderData.banner);
          }
          sliderNumber = '1';
          break;
        case 'Slider 2':
          formData.append('header', sliderData.slider2Header);
          sliderNumber = '2';
          break;
        case 'Slider 3':
          formData.append('header', sliderData.slider3Header);
          sliderNumber = '3';
          break;
        case 'Slider 4':
          formData.append('header', sliderData.slider4Header);
          sliderNumber = '4';
          break;
        default:
          break;
      } 

    formData.append('slider_number', sliderNumber);

    try {
        const res = await fetch('/api/banner', {
          method: 'POST',
          body: formData,
        });

        const result = await res.json();
           if (result.success) {
           alert('Great! The slider has been updated.');
           e.target.reset();
        } else {
             alert(result.message || 'Save failed');
        }
    } catch (err) {
        console.error('Banner submit error:', err);
        alert('Error saving banner');
    }
};

  return (
    <section>
      <h4 className="heading_titles purpleColor">Sliders</h4>
      
     
      <div className="card card_container mb-4">
        <h4 className="heading_titles purpleColor mb-3">Select Slider</h4>

        <div className="col-md-7 mb-4">
          <select className="form-control" value={selectedSlider} onChange={handleChangeSlider}>
            <option>Slider 1</option>
            <option>Slider 2</option>
            <option>Slider 3</option>
            <option>Slider 4</option>
          </select>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-10 col-12 d-flex gap-3 flex-column">
              {selectedSlider === 'Slider 1' && (
                <>
                  <div className="formcontrol2">
                    <label>Slider 1 Header</label>
                    <input
                      type="text"
                      name="heading"
                      className="form-input"
                      placeholder="Update slider header..."
                      value={sliderData.slider1Header}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="formcontrol2">
                    <label>Banner Image</label>
                    <input
                      type="file"
                      name="banner"
                      className="form-input"
                      onChange={handleFileChange}
                    />
                  </div>
                </>
              )}

              {selectedSlider === 'Slider 2' && (
                <div className="formcontrol2">
                  <label>Slider 2 Header</label>
                  <input
                    type="text"
                    name="heading"
                    className="form-input"
                    placeholder="Update slider header..."
                    value={sliderData.slider2Header}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {selectedSlider === 'Slider 3' && (
                <div className="formcontrol2">
                  <label>Slider 3 Header</label>
                  <input
                    type="text"
                    name="heading"
                    className="form-input"
                    placeholder="Update slider header..."
                    value={sliderData.slider3Header}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              {selectedSlider === 'Slider 4' && (
                <div className="formcontrol2">
                  <label>Slider 4 Header</label>
                  <input
                    type="text"
                    name="heading"
                    className="form-input"
                    placeholder="Update slider header..."
                    value={sliderData.slider4Header}
                    onChange={handleInputChange}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="col-12 d-flex justify-content-end mt-3">
            <button type="submit" className="submit_button_admin">
              Submit
            </button>
          </div>
        </form>
      </div>
  

    </section>
  );
};

export default Sliders;
