import React from 'react'
import './style.css'
const Navbar = () => {
	return(
		<nav class="nav-wrapper">
		<img src="Logo.png" alt="logo"></img>
		<a class="lang" href="#">Programming Language</a>
		<ul class="container">
		<a class="right branches" href="#">ML and AI</a>
		<a class="right branches" href="#">Dev and DevOps</a>
		<a class="right branches" href="#">Electrical</a>
		<a class="right branches" href="#">Mechanical</a>
		<img src="Username.png" alt=""></img>
		<a class="right username" href="#">Username</a>
		</ul>
	</nav>
	)
}
export default Navbar
