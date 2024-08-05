import '../CSS/Gallery.css'
import React, { useState } from 'react';
import PreviouslyWorkingGallery from './PreviouslyWorkingGallery';

function Gallery() {
    const [currentGallery, setCurrentGallery] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // const openGallery = (galleryId) => {
    //     // Your gallery opening logic here
    //     console.log(`Opening gallery: ${galleryId}`);
    // };

    const galleries = {
        /*
        gallery10: [
            { src: 'images/Gallery/FNIRS/PXL_20240620_130607751.MP.jpg', caption: 'Photo 1 Caption' },
        ],
        */
    
        gallery11: [
            { src: `${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0852.jpg`, caption: 'Photo 1 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0880.jpg`, caption: 'Photo 2 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0881.jpg`, caption: 'Photo 3 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0845.jpg`, caption: 'Photo 4 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0847.jpg`, caption: 'Photo 5 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0867.jpg`, caption: 'Photo 6 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0873.jpg`, caption: 'Photo 7 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0887.jpg`, caption: 'Photo 8 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0860.jpg`, caption: 'Photo 9 Caption' }
        ],
    
        gallery10: [
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240620_130607751.MP.jpg`, caption: 'Photo 1 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240619_204253808.MP.jpg`, caption: 'Photo 2 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240620_142725768.MP.jpg`, caption: 'Photo 3 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240621_184636884.jpg`, caption: 'Photo 4 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/Snapchat-1784787313.jpg`, caption: 'Photo 5 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/Snapchat-182933321.jpg`, caption: 'Photo 6 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240621_001751528.jpg`, caption: 'Photo 7 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240621_000629644.jpg`, caption: 'Photo 8 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240620_002056865.jpg`, caption: 'Photo 9 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240619_220724391.jpg`, caption: 'Photo 10 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240619_220707094.jpg`, caption: 'Photo 11 Caption' },
            { src: `${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240619_215749749.jpg`, caption: 'Photo 12 Caption' }
        ],
    };

    // return (
    //     <section id="gallery" className="section-gallery">
    //         <h2 className="gallery-heading">Gallery</h2>
    //         <div className="gallery-container">

    //             <div className="gallery-item" onClick={() => openGallery('gallery11')}>
    //                 <h3>The Prepared Warfighter Portfolio Review 2024</h3>
    //                 <img src={`${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0852 (1).jpg`} alt="Conference 11 Thumbnail"/>
    //             </div>

    //             <div className="gallery-item" onClick={() => openGallery('gallery10')}>
    //                 <h3>FNIRS Data Analysis Workshop 2024</h3>
    //                 <img src={`${process.env.PUBLIC_URL}/images/Gallery/FNIRS/PXL_20240620_130607751.MP (1).jpg`} alt="Conference 10 Thumbnail"/>
    //             </div>

    //             <div className="gallery-item" onClick={() => openGallery('gallery9')}>
    //                 <h3>IEEE VR 2024</h3>
    //                 <img src={`${process.env.PUBLIC_URL}/images/Gallery/IEEEVR/StandingByPoster (1).jpeg`} alt="Conference 9 Thumbnail"/>
    //             </div>

    //             <div className="gallery-item" onClick={() => openGallery('gallery8')}>
    //                 <h3>CES 2024</h3>
    //                 <img src={`${process.env.PUBLIC_URL}/images/Gallery/CES/PXL_20240111_215446570 (1).jpg`} alt="Conference 8 Thumbnail"/>
    //             </div> 

    //             <div className="gallery-item" onClick={() => openGallery('gallery7')}>
    //                 <h3>Grace Hopper Conference 2023</h3>
    //                 <img src={`${process.env.PUBLIC_URL}/images/Gallery/GHC/PXL_20230927_171157989 (1).jpg`} alt="Conference 7 Thumbnail"/>
    //             </div>

    //             <div className="gallery-item" onClick={() => openGallery('gallery6')}>
    //                 <h3>TAPIA / STAR Celebration 2023</h3>
    //                 <img src={`${process.env.PUBLIC_URL}/images/Gallery/TAPIA2023/Presenting.jpg`} alt="Conference 6 Thumbnail"/>
    //             </div>

    //             <div className="gallery-item" onClick={() => openGallery('gallery5')}>
    //                 <h3>Quantico Virginia 2023</h3>
    //                 <img src={`${process.env.PUBLIC_URL}/images/Gallery/Virginia/IMG_3783 (1).jpg`} alt="Conference 5 Thumbnail"/>
    //             </div>

    //             <div className="gallery-item" onClick={() => openGallery('gallery4')}>
    //                 <h3>XR Access 2023</h3>
    //                 <img src={`${process.env.PUBLIC_URL}/images/Gallery/XRAccess/20230615_174907.jpg`} alt="Conference 4 Thumbnail"/>
    //             </div>

    //             <div className="gallery-item" onClick={() => openGallery('gallery3')}>
    //                 <h3>Multicultural Undergraduate Research Art and Leadership Symposium 2023</h3>
    //                 <img src={`${process.env.PUBLIC_URL}/images/Gallery/MURALS/20230331_082633.jpg`} alt="Conference 3 Thumbnail"/>
    //             </div>

    //             <div className="gallery-item" onClick={() => openGallery('gallery2')}>
    //                 <h3>Rocky Mountain Celebration for Women 2022</h3>
    //                 <img src={`${process.env.PUBLIC_URL}/images/Gallery/RockyMountainCelebration/20220929_200412 (1).jpg`} alt="Conference 2 Thumbnail"/>
    //             </div>

    //             <div className="gallery-item" onClick={() => openGallery('gallery1')}>
    //                 <h3>TAPIA 2022</h3>
    //                 <img src={`${process.env.PUBLIC_URL}/images/Gallery/TAPIA2022/ConventionCenter (1).jpg`} alt="Conference 1 Thumbnail"/>
    //             </div>
    //         </div>

    //         <div id="lightbox" className="lightbox">
    //             <span className="close" onclick="closeGallery()">&times;</span>
    //             <div id="lightbox-thumbnails" className="lightbox-thumbnails"></div>
    //             <img className="lightbox-img" id="lightbox-img"/>
    //             <div className="caption-container">
    //                 <div className="caption" id="lightbox-caption"></div>
    //             </div>
    //             <a className="prev" onclick="changeSlide(-1)">&#10094;</a>
    //             <a className="next" onclick="changeSlide(1)">&#10095;</a>
    //         </div>
    //     </section>
    // );

    const openGallery = (galleryId) => {
        setCurrentGallery(galleries[galleryId]);
        setCurrentIndex(0);
        displaySlide(0);
        document.getElementById('lightbox').style.display = 'block';
        displayThumbnails();
    };

    const closeGallery = () => {
        document.getElementById('lightbox').style.display = 'none';
    };

    const changeSlide = (n) => {
        let newIndex = currentIndex + n;
        if (newIndex < 0) {
            newIndex = currentGallery.length - 1;
        } else if (newIndex >= currentGallery.length) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
        displaySlide(newIndex);
    };

    const displaySlide = (index) => {
        const { src, caption } = currentGallery[index];
        document.getElementById('lightbox-img').src = src;
        document.getElementById('lightbox-caption').textContent = caption;
        highlightThumbnail(index);
    };

    const displayThumbnails = () => {
        const thumbnailContainer = document.getElementById('lightbox-thumbnails');
        thumbnailContainer.innerHTML = ''; // Clear existing thumbnails
        currentGallery.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.caption;
            img.onclick = () => {
                console.log(`Thumbnail ${index} clicked`);
                displaySlide(index);
            };
            thumbnailContainer.appendChild(img);
        });
        highlightThumbnail(currentIndex);
    };

    const highlightThumbnail = (index) => {
        const thumbnails = document.querySelectorAll('#lightbox-thumbnails img');
        thumbnails.forEach((thumb, i) => {
            thumb.classList.toggle('selected', i === index);
        });
    };

    return (
        <section id="gallery" className="section-gallery">
            <h2 className="gallery-heading">Gallery</h2>
            <div className="gallery-container">
                <div className="gallery-item" onClick={() => openGallery('gallery11')}>
                    <h3>The Prepared Warfighter Portfolio Review 2024</h3>
                    <img src={`${process.env.PUBLIC_URL}/images/Gallery/PWPR/_DSC0852 (1).jpg`} alt="Conference 11 Thumbnail" />
                </div>
                {/* Add other gallery items */}
            </div>

            <div id="lightbox" className="lightbox">
                <button className="prev" onClick={() => changeSlide(-1)} aria-label="Previous slide">&#10094;</button>
                <button className="next" onClick={() => changeSlide(1)} aria-label="Next slide">&#10095;</button>
                <span className="close" onClick={closeGallery}>&times;</span>
                <div id="lightbox-thumbnails" className="lightbox-thumbnails"></div>
                <img className="lightbox-img" id="lightbox-img" alt="alternative"/>
                <div className="caption-container">
                    <div className="caption" id="lightbox-caption"></div>
                </div>
            </div>
        </section>
    );
}

export default Gallery;
