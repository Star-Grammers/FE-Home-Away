import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1> This is Home Page of the Application.</h1>
      <h2>This is publically accessible Page.</h2>
      <br />
      <div>
        <button type="button" style={{ cursor: 'pointer', marginRight: '10px' }}>
          <Link to='/Signin' style={{ textDecoration: 'none' }}>
            Signin
          </Link>
        </button>

      </div>
    </div>
  )
}

export default Home;

// const Home = () => {
//   const navigate = useNavigate();

//   const handleSignIn = () => {
//     navigate('/Signin');
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>This is Home Page of the Application.</h1>
//       <h2>This is publicly accessible Page.</h2>
//       <br />
//       <div>
//         <button style={{ cursor: 'pointer', marginRight: '10px' }} onClick={handleSignIn}>
//           Signin
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React from 'react';
// import axios from "axios";
// import './App.css';
// import { useState, useEffect } from 'react';


// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const auth = async () => {
//     try {
//       const res = await axios.get('http://localhost:3030//authenticate', { auth: { username: 'admin', password: '123' } });
//       console.log(res.data);
//       setIsAuthenticated(true); // update state 
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     auth();
//   }, []); // call the auth function when the component mounts

//   return (
//     <div className="App">
//       {isAuthenticated ? (
//         // render the authenticated content
//         <h1>Welcome, authenticated user!</h1>
//       ) : (
//         // render the login form or an error message
//         <h1>Please log in to access this content.</h1>
//       )}
//     </div>
//   );
// };

// export default App;

