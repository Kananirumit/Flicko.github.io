import React from "react";
import "../assets/css/Navbar.css";

export default function NavbarComponent() {
  return (
  <div>
    <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="header__content">
            <a href="index.html" class="header__logo">
              <img src="img/logo.svg" alt="" />
            </a>
            <div class="header__categories">
              <button class="header__categories-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span></span>
                <span></span>
              </button>
              <div class="dropdown-menu header__dropdown-menu header__dropdown-menu--categories">
                <ul class="header__categories-list">
                  <li><a href="catalog1.html">Films</a></li>
                  <li><a href="catalog2.html">TV Series</a></li>
                  <li><a href="catalog1.html">Anime</a></li>
                  <li><a href="catalog2.html">Cartoons</a></li>
                </ul>
                <ul class="header__categories-list">
                  <li><a href="catalog1.html">Catalog Grid</a></li>
                  <li><a href="catalog2.html">Catalog List</a></li>
                  <li><a href="details1.html">Details Film</a></li>
                  <li><a href="details2.html">Details TV Series</a></li>
                </ul>
              </div>
            </div>
            <ul class="header__nav">
              <li class="header__nav-item">
                <a class="header__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></a>
                <ul class="dropdown-menu header__dropdown-menu">
                  <li><a href="index.html">Home style 1</a></li>
                  <li><a href="index2.html">Home style 2</a></li>
                </ul>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catalog <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></a>
                <ul class="dropdown-menu header__dropdown-menu">
                  <li><a href="catalog1.html">Catalog Grid</a></li>
                  <li><a href="catalog2.html">Catalog List</a></li>
                  <li><a href="details1.html">Details Movie</a></li>
                  <li><a href="details2.html">Details TV Series</a></li>
                </ul>
              </li>
              <li class="header__nav-item">
                <a href="pricing.html" class="header__nav-link">Pricing plans</a>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></a>
                <ul class="dropdown-menu header__dropdown-menu">
                  <li><a href="about.html">About us</a></li>
                  <li><a href="faq.html">Help center</a></li>
                  <li><a href="profile.html">Profile</a></li>
                  <li><a href="actor.html">Actor</a></li>
                  <li><a href="contacts.html">Contacts</a></li>
                  <li><a href="privacy.html">Privacy policy</a></li>
                </ul>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link header__nav-link--more" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"/></svg>
                <a class="header__nav-link header__nav-link--more" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"/></svg>
                </a>
                  <li><a href="signup.html">Sign Up</a></li>
                  <li><a href="forgot.html">Forgot password</a></li>
                  <li><a href="404.html">404 Page</a></li>
                </ul>
                <a class="header__nav-link header__nav-link--more" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              </li>
            </ul>
            <div class="header__actions">
              <form action="#" class="header__search">
                <input type="text" placeholder="Search"></input>
                <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg></button>
              </form>
              <div class="header__language"></div>
                <a class="header__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">EN <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></a>
                <ul class="dropdown-menu header__dropdown-menu header__dropdown-menu--lang">
                  <li><a href="#">English</a></li>
                  <li><a href="#">Spanish</a></li>
                  <li><a href="#">French</a></li>
                </ul>
              </div>
              <a href="signin.html" class="header__sign-in"></a>
              <div class="header__language">
              <a href="signin.html" class="header__sign-in">
                <span>sign in</span>
              </a>
              <span></span>
              <span></span>
            <button class="header__btn" type="button">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <a href="signin.html" class="header__sign-in">
    </div>
  <div class="menu">
    <form action="#" class="menu__search">
      <input type="text" placeholder="Search"></input>
      <button type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path></svg></button>
    </form>
    <ul class="menu__nav">
      <li class="menu__nav-item">
        <a class="menu__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></a>
        <ul class="dropdown-menu menu__dropdown-menu">
          <li><a href="index.html">Home style 1</a></li>
          <li><a href="index2.html">Home style 2</a></li>
        </ul>
      </li>
      <li class="menu__nav-item"></li>
        <a class="menu__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Catalog <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></a>
      <li class="menu__nav-item">
          <li><a href="catalog1.html">Catalog Grid</a></li>
          <li><a href="catalog2.html">Catalog List</a></li>
          <li><a href="details1.html">Details Movie</a></li>
          <li><a href="details2.html">Details TV Series</a></li>
        </ul>
      </li>
      <li class="menu__nav-item">
        <a href="pricing.html" class="menu__nav-link">Pricing plans</a>
      </li>
      <li class="menu__nav-item"></li>
        <a class="menu__nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/></svg></a>
        <ul class="dropdown-menu menu__dropdown-menu">
          <li><a href="about.html">About us</a></li>
          <li><a href="faq.html">Help center</a></li>
          <li><a href="profile.html">Profile</a></li>
          <li><a href="actor.html">Actor</a></li>
          <li><a href="contacts.html">Contacts</a></li>
          <li><a href="privacy.html">Privacy policy</a></li>
        </ul>
      </li>
      <li class="menu__nav-item"></li>
        <a class="menu__nav-link menu__nav-link--more" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z"/></svg>
        </a>
        <ul class="dropdown-menu menu__dropdown-menu">
          <li><a href="signin.html">Sign In</a></li>
          <li><a href="signup.html">Sign Up</a></li>
          <li><a href="forgot.html">Forgot password</a></li>
          <li><a href="404.html">404 Page</a></li>
        </ul>
      </li>
    </ul>
  </div>
  </header>
  </div>
  );
