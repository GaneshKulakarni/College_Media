import { Link } from 'react-router-dom';

export default function Navbar() {
  const getCurrentUserId = () => {
    const token = localStorage.getItem('token');
    if (!token) return null;
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.userId;
    } catch {
      return null;
    }
  };

  const currentUserId = getCurrentUserId();

  return (
    <nav>
      <div className="container nav-container">
        <div className="logo">
          <div className="logo-icon">C</div>
          <span>ProjectX</span>
        </div>

        <div className="nav-links">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#team">Team</a></li>
            {currentUserId && (
              <li>
                <Link to={`/profile/${currentUserId}`}>Profile</Link>
              </li>
            )}
            <li>
              <a href="#get-started" className="btn btn-primary">
                Get Started
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
