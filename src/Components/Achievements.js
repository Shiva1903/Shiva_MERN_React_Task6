import React from 'react';
import './Achievements.css'; 
function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-content">
        <h2>Achievements</h2>
        <ul className="achievements-list">
          <li>
            <p>
              Developed a Student Database Application using Python and MySQL during grade 12.
            </p>
          </li>
          <li>
            <p>
              Secured the first position in Tamil at grade 10 in my School.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Achievements;
