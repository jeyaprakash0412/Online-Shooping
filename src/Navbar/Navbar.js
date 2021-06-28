import React from 'react'





const Navbar = () => {
    return (
        
    <div>
<nav class=" navbar fixed-top navbar-expand-lg navbar navbar-dark bg-primary">
  <div class="container-fluid">
  
      <div class="row">
        <div class="col-2">
      <a class="navbar-brand" style={{color:'black',fontFamily:'Comic Sans MS'}} href="#">REDMI Online Shopping</a></div></div>

    
      <div class="col-10">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">New Arrives</a>
        </li>
        

        <li class="nav-item">
          <a class="nav-link active" href="#">Today's Deals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Best Sellers</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
            Prime
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">70% offers</a></li>
            <li><a class="dropdown-item" href="#">50% offers</a></li>
            <li><a class="dropdown-item" href="#">30% offers</a></li>
            <li><a class="dropdown-item" href="#">20% offers</a></li>
            <li><a class="dropdown-item" href="#">5% offers</a></li>

          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Quantity</a></li>
            <li><a class="dropdown-item" href="#">Quality</a></li>
            <li><a class="dropdown-item" href="#">Rate</a></li>
            <li><a class="dropdown-item" href="#">Customer Service</a></li>
            <li><a class="dropdown-item" href="#">Review</a></li>
            <li><a class="dropdown-item" href="#">Warranty</a></li>

          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Available</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Account</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">SignOut</a>
        </li>



      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-dark" type="submit">Search</button>
      </form>
    </div>
    </div> 
  </div>
</nav>
    
</div>
      
    )


}

export default Navbar
