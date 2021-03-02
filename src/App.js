import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import './App.scss';


const App = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
  }
  return (
    <div style={styles.container}>
      <ul style={styles.navLinksUl}>
        <li style={styles.navLinksli}><Link style={styles.mainLink} to="/" >Feature Toggle</Link></li></ul>

      {localStorage.getItem('token') ?
        <ul style={styles.navLinksUl}>
          <li style={styles.navLinksli}><Link style={styles.mainLink} to="/aboutus">About Us</Link></li>
          <li style={styles.navLinksli}><Link style={styles.mainLink} to="/tandc">Terms and Conditions</Link></li>
          <li style={styles.navLinksli}><Link style={styles.mainLink} to="/privacypolicy">Privacy Policy</Link></li>
          <li style={styles.navLinksli}>
            <Link style={styles.mainLink} to="" onClick={handleLogout}>LogOut</Link></li>
        </ul> :
        <ul style={styles.navLinksUl}>

          <li style={styles.navLinksli}><Link style={styles.mainLink} to="/aboutus">About Us</Link></li>
          <li style={styles.navLinksli}><Link style={styles.mainLink} to="/tandc">Terms and Conditions</Link></li>
          <li style={styles.navLinksli}><Link style={styles.mainLink} to="/privacypolicy">Privacy Policy</Link></li>
          <li style={styles.navLinksli}><Link style={styles.mainLink} to="/signup">Sign-Up</Link></li>
          <li style={styles.navLinksli}><Link style={styles.mainLink} to="/login">Login</Link></li>
        </ul>
      }
    </div >
  );
}
const styles = {
  heading:
  {
    alignItems: "center",
    fontFamily: "Roboto"

  },
  container:
  {
    display: "flex",
    justifyContent: "space-between",
    margin: 25,
    backgroundColor: "skyblue",
    color: "white",
    borderRadius: 15,
    paddingRight: 10,
  },
  navLinksUl:
  {
    display: "flex",
    listStyleType: "none",

  },
  navLinksli: {
    margin: 10,
    fontSize: 28,

  },
  mainLink: {
    color: "#fff",
    textDecoration: "none",
    fontFamily: "Roboto"
  }

}

export default App;
