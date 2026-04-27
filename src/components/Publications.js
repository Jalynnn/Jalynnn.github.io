import '../CSS/publications.css'
import React from 'react';

function Publications() {
  return (
    <section id="publications" className="section-publications">
    {/* <section id="publications" className="section-publications" style="background-image: url('images/backgrounds/AdobeStock_132147953.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat;"> */}
        <h2 className="publications-heading">Publications</h2>

        {/* GOOGLE PROFILE BUTTON */}

        <div className="filter-bar">
          <a 
            href="https://scholar.google.com/citations?user=BtFs_D8AAAAJ&hl=en&oi=ao" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="filter-btn active" /* 'active' gives it the navy/blue high contrast */
            style={{ textDecoration: 'none', marginBottom: '40px' }}
          >
            View Full Google Scholar Profile
          </a>
        </div>

        {/* PUBLICATION LIST*/}

        <ul className="publication-list">
            {/* <li className="publication-item">Author1, Author2, Author3. "Title of the paper." Journal Name, Year, Volume(Issue), Pages.</li>
            <li className="publication-item">Author1, Author2. "Title of the paper." Journal Name, Year, Volume(Issue), Pages.</li> */}
            
            <li className="publication-item"><strong>Blu Nicoly, J.</strong> (2025, October). Towards seamless interaction: Neuroadaptive virtual reality interfaces for target selection. In Proceedings of the 27th International Conference on Multimodal Interaction (pp. 745-748).</li>
            <li className="publication-item">Pharmer, R. L., Wickens, C. D., Plabst, L., Clegg, B. A., Hirshfield, L. M., Lewis, J. E., <strong>Nicoly, J. B.</strong>, Spencer, C. A., & Ortega, F. R. (2025). The Impact of Simple, Brief, and Adaptive Instructions within Virtual Reality Training: Components of Cognitive Load Theory in an Assembly Task. arXiv preprint arXiv:2507.20943.</li>
            <li className="publication-item">Spencer, C. A., <strong>Nicoly, J. B.</strong>, Plabst, L., Pharmer, R. L., Wickens, C. D., Ortega, F., ... & Hirshfield, L. (2025, September). Investigating Cognitive Engagement from Training to Application Under Varied Workload Manipulations in Virtual Reality. In Proceedings of the Human Factors and Ergonomics Society Annual Meeting (Vol. 69, No. 1, pp. 1435-1440). Sage CA: Los Angeles, CA: SAGE Publications.</li>
            {/* <li className="publication-item">Segal, J., Pugh, C., <strong>Nicoly, J.</strong>, Ortega, F., & Taylor, A. AR application design for Healthcare Teams.</li> */}
            <li className="publication-item">Taylor, A., Tanjim, T., Cao, H., <strong>Nicoly, J. B.</strong>, Segal, J. I., George, J. S., ... & Lee, H. R. (2025). Co-designing augmented reality tools for high-stakes clinical teamwork. arXiv preprint arXiv:2502.17295.</li>
            <li className="publication-item">Ortega, F. R., Interrante, V., Lotemplio, S., Masters, R., <strong>Nicoly, J.</strong>, Borhani, Z., ... & Zielasko, D. (2024). Enhancing Well-Being Through Positive Technology: VR Forest Bathing. arXiv preprint arXiv:2411.06293.</li>
            <li className="publication-item"><strong>Nicoly, J. B.</strong>, Masters, R., Gaddy, V., Interrante, V., & Ortega, F. (2024). The restorative influence of virtual reality environment design. <em>ACM Symposium on Applied Perception 2024</em>. <a href="https://doi.org/10.1145/3675231.3675244" rel="noopener noreferrer" target="_blank" aria-label="DOI link for The restorative influence of virtual reality environment design. Opens in a new tab"  style={{ color: '#022943' }}>https://doi.org/10.1145/3675231.3675244</a></li>
            <li className="publication-item">Masters, R., <strong>Nicoly, J.</strong>, Gaddy, V., Interrante, V., & Ortega, F. (2024). The impact of nature realism on the restorative quality of virtual reality forest bathing. <em>ACM Transactions on Applied Perception 2024</em>, <em>17</em>(2). <a href="https://doi.org/10.1145/3670406" rel="noopener noreferrer" target="_blank" aria-label="DOI link for The impact of nature realism on the restorative quality of virtual reality forest bathing. Opens in a new tab" style={{ color: '#022943' }}>https://doi.org/10.1145/3670406</a></li>
        </ul>
    </section>
  );
}

export default Publications;
