import '../CSS/Gallery.css'
import React from 'react';

function Gallery() {
    const openGallery = (galleryId) => {
        // Your gallery opening logic here
        console.log(`Opening gallery: ${galleryId}`);
    };

    return (
        <section id="gallery" className="section-gallery">
            <h2 className="gallery-heading">Gallery</h2>
            <div className="gallery-container">

                <div className="gallery-item" onClick={() => openGallery('gallery11')}>
                    <h3>The Prepared Warfighter Portfolio Review 2024</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0852 (1).jpg`} alt="Conference 11 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery10')}>
                    <h3>FNIRS Data Analysis Workshop 2024</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240620_130607751.MP (1).jpg`} alt="Conference 10 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery9')}>
                    <h3>IEEE VR 2024</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/IEEEVR/StandingByPoster (1).jpeg`} alt="Conference 9 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery8')}>
                    <h3>CES 2024</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/CES/PXL_20240111_215446570 (1).jpg`} alt="Conference 8 Thumbnail"/>
                </div> 

                <div className="gallery-item" onClick={() => openGallery('gallery7')}>
                    <h3>Grace Hopper Conference 2023</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/GHC/PXL_20230927_171157989 (1).jpg`} alt="Conference 7 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery6')}>
                    <h3>TAPIA / STAR Celebration 2023</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/TAPIA2023/Presenting.jpg`} alt="Conference 6 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery5')}>
                    <h3>Quantico Virginia 2023</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/Virginia/IMG_3783 (1).jpg`} alt="Conference 5 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery4')}>
                    <h3>XR Access 2023</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/XRAccess/20230615_174907.jpg`} alt="Conference 4 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery3')}>
                    <h3>Multicultural Undergraduate Research Art and Leadership Symposium 2023</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/MURALS/20230331_082633.jpg`} alt="Conference 3 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery2')}>
                    <h3>Rocky Mountain Celebration for Women 2022</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/RockyMountainCelebration/20220929_200412 (1).jpg`} alt="Conference 2 Thumbnail"/>
                </div>

                <div className="gallery-item" onClick={() => openGallery('gallery1')}>
                    <h3>TAPIA 2022</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/TAPIA2022/ConventionCenter (1).jpg`} alt="Conference 1 Thumbnail"/>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
