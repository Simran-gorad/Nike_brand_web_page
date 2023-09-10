function Navigation (params) {
    return (
    <nav>
      <div className="brand-logo"> 
      <img className="logo" src= '/src/assets/nikelogo.png' alt="Brand logo"/>
      </div>
      <ul>
        <li href= '#' >Home</li>
        <li href= '#' >Menu</li>
        <li href= '#' >Blog</li>
        <li href= '#' >Contact Us</li>
      </ul>

      <button className="login-btn" href= "#">Login</button>
    </nav>
    )
};

export default Navigation;