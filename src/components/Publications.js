import '../CSS/Publications.css'
import React from 'react';

function Publications() {
  return (
    <section id="publications" className="section-publications">
    {/* <section id="publications" className="section-publications" style="background-image: url('images/backgrounds/AdobeStock_132147953.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"> */}
        <h2 className="publications-heading">Publications</h2>
        <ul className="publication-list">
            {/* <li className="publication-item">Author1, Author2, Author3. "Title of the paper." Journal Name, Year, Volume(Issue), Pages.</li>
            <li className="publication-item">Author1, Author2. "Title of the paper." Journal Name, Year, Volume(Issue), Pages.</li> */}
            <li className="publication-item"><strong>Nicoly, J. B.</strong>, Masters, R., Gaddy, V., Interrante, V., & Ortega, F. (2024). The restorative influence of virtual reality environment design. <em>ACM Symposium on Applied Perception 2024</em>. <a href="https://doi.org/10.1145/3675231.3675244" rel="noopener noreferrer" target="_blank" aria-label="DOI link for The restorative influence of virtual reality environment design. Opens in a new tab"  style={{ color: '#022943' }}>https://doi.org/10.1145/3675231.3675244</a></li>
            <li className="publication-item">Masters, R., <strong>Nicoly, J.</strong>, Gaddy, V., Interrante, V., & Ortega, F. (2024). The impact of nature realism on the restorative quality of virtual reality forest bathing. <em>ACM Transactions on Applied Perception 2024</em>, <em>17</em>(2). <a href="https://doi.org/10.1145/3670406" rel="noopener noreferrer" target="_blank" aria-label="DOI link for The impact of nature realism on the restorative quality of virtual reality forest bathing. Opens in a new tab" style={{ color: '#022943' }}>https://doi.org/10.1145/3670406</a></li>
        </ul>
    </section>
  );
}

export default Publications;
