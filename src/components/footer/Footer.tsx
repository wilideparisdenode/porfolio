import React from 'react'
// import "./footer.css"
export  const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date(Date.now()).getFullYear()} Ndoping wilson. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/wilideparisdenode" aria-label="GitHub">GitHub</a>
          <a href="https://www.linkedin.com/in/wilson-ndoping-91a4a0323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn">LinkedIn</a>
          <a href="https://x.com/@WNdoping" aria-label="Twitter">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
