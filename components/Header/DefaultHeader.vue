<template>
  <!-- <header id="topnav" :class="{ 'bg-green-custom': !isWhite }">
    <div class="container">
      <div>
        <nuxt-link class="logo" to="/">
          <img src="~assets/images/logo.png" height="24" alt="" />
        </nuxt-link>
      </div>
      <ul class="buy-button list-inline mb-0">
        <li class="list-inline-item mb-0">
          <div class="dropdown">
            <button
              type="button"
              class="btn btn-link text-decoration-none dropdown-toggle p-0 pr-2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="mdi mdi-magnify h4 text-muted"></i>
            </button>
            <div
              class="dropdown-menu dd-menu dropdown-menu-right bg-white shadow rounded border-0 mt-3 py-0"
              style="width: 300px"
            >
              <form>
                <input
                  type="text"
                  id="text"
                  name="name"
                  class="form-control border bg-white"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>
        </li>
        <li class="list-inline-item mb-0 pr-1">
          <nuxt-link to="/wishlist" class="btn btn-icon btn-primary"
            ><i class="uil uil-heart align-middle icons"></i
          ></nuxt-link>
        </li>
        <li class="list-inline-item mb-0">
          <nuxt-link
            to="/profile"
            type="button"
            class="btn btn-icon btn-primary"
          >
            <i class="uil uil-user align-middle icons"></i>
          </nuxt-link>
        </li>
      </ul>
      <div class="menu-extras">
        <div class="menu-item">
          <a class="navbar-toggle">
            <div class="lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>

      <div id="navigation">
        <ul class="navigation-menu">
          <li v-for="(nuxtItem, index) in navbarList" :key="index">
            <nuxt-link :to="nuxtItem.path" :class="{ 'text-white': !isWhite }">{{ nuxtItem.title }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </header> -->
  <header id="header">
    <div class="header-banner"></div>

    <nav class="header-nav tablet-h">
      <div class="container">
        <div class="row">
          <div class="hidden-md-down header-nav-inside vertical-center">
            <div class="col-md-4 col-xs-12">
              <div id="_desktop_contact_link">
                <div id="contact-link">
                  <a
                    href="https://themes12.anvanto.com/super/themes/pascal/en/contact-us"
                    >Contact us</a
                  >
                </div>
              </div>
            </div>
            <div class="col-md-8 right-nav">
              <div id="_desktop_language_selector" class="lang_and_сr">
                <div class="language-selector-wrapper">
                  <div class="language-selector">
                    <ul
                      class="hidden-md-down"
                      aria-labelledby="language-selector-label"
                    >
                      <li class="current">
                        <a
                          href="https://themes12.anvanto.com/super/themes/pascal/en/"
                          class="dropdown-item"
                          >en</a
                        >
                      </li>
                      <li>
                        <a
                          href="https://themes12.anvanto.com/super/themes/pascal/fr/"
                          class="dropdown-item"
                          >vi</a
                        >
                      </li>
                    </ul>
                    <select
                      class="link } hidden-lg-up"
                      aria-labelledby="language-selector-label"
                    >
                      <option
                        value="https://themes12.anvanto.com/super/themes/pascal/en/"
                        selected="selected"
                      >
                        en
                      </option>
                      <option
                        value="https://themes12.anvanto.com/super/themes/pascal/fr/"
                      >
                        vi
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div id="_desktop_user_info">
                <div class="user-info">
                  <a
                    href="https://themes12.anvanto.com/super/themes/pascal/en/my-account"
                    title="Log in to your customer account"
                    rel="nofollow"
                  >
                    <span class="account-login">
                      <svg
                        class="hidden-md-down"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="21px"
                        height="21px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(0, 0, 0)"
                          d="M17.925,13.576 C16.781,12.432 15.420,11.585 13.935,11.073 C15.525,9.977 16.570,8.144 16.570,6.070 C16.570,2.723 13.847,0.000 10.500,0.000 C7.153,0.000 4.430,2.723 4.430,6.070 C4.430,8.144 5.475,9.977 7.065,11.073 C5.580,11.585 4.219,12.432 3.075,13.576 C1.092,15.558 -0.000,18.195 -0.000,21.000 L1.641,21.000 C1.641,16.115 5.615,12.141 10.500,12.141 C15.385,12.141 19.359,16.115 19.359,21.000 L21.000,21.000 C21.000,18.195 19.908,15.558 17.925,13.576 ZM10.500,10.500 C8.058,10.500 6.070,8.513 6.070,6.070 C6.070,3.628 8.058,1.641 10.500,1.641 C12.943,1.641 14.930,3.628 14.930,6.070 C14.930,8.513 12.943,10.500 10.500,10.500 Z"
                        />
                      </svg>
                      <span class="hidden-lg-up">Sign in</span>
                    </span>
                  </a>
                </div>
              </div>
              <div class="an_wishlist-nav-link" id="_desktop_an_wishlist-nav">
                <a
                  href="https://themes12.anvanto.com/super/themes/pascal/en/module/an_wishlist/list"
                  title="My wishlist"
                >
                  <svg
                    class="hidden-md-down"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="24px"
                    height="20px"
                  >
                    <path
                      fill-rule="evenodd"
                      fill="rgb(0, 0, 0)"
                      d="M17.625,0.000 C15.068,0.000 13.171,1.486 12.000,3.595 C10.829,1.486 8.932,0.000 6.375,0.000 C2.690,0.000 0.000,2.929 0.000,6.501 C0.000,11.225 4.761,14.191 11.537,19.803 C11.802,20.023 12.198,20.023 12.463,19.803 C19.233,14.196 24.000,11.226 24.000,6.501 C24.000,2.929 21.309,0.000 17.625,0.000 L17.625,0.000 ZM12.000,18.419 C5.760,13.288 1.406,10.438 1.406,6.501 C1.406,3.554 3.542,1.331 6.375,1.331 C9.106,1.331 10.798,3.725 11.322,5.502 C11.512,6.150 12.486,6.153 12.678,5.502 C13.195,3.749 14.868,1.331 17.625,1.331 C20.458,1.331 22.594,3.554 22.594,6.501 C22.594,10.440 18.233,13.294 12.000,18.419 Z"
                    />
                  </svg>
                  <span class="hidden-md-up">Wishlist</span>
                </a>
              </div>

              <div id="_desktop_cart">
                <div
                  class="blockcart cart-preview js-sidebar-cart-trigger inactive"
                  data-refresh-url="//themes12.anvanto.com/super/themes/pascal/en/module/ps_shoppingcart/ajax"
                >
                  <div class="header">
                    <a
                      class="blockcart-link"
                      rel="nofollow"
                      href="//themes12.anvanto.com/super/themes/pascal/en/cart?action=show"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="26px"
                        height="22px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(0, 0, 0)"
                          d="M25.593,3.469 C25.244,3.044 24.726,2.800 24.171,2.800 L4.354,2.800 L4.177,1.551 C4.051,0.667 3.273,0.000 2.366,0.000 L0.812,0.000 C0.364,0.000 -0.000,0.358 -0.000,0.800 C-0.000,1.242 0.364,1.600 0.812,1.600 L2.366,1.600 C2.467,1.600 2.553,1.674 2.567,1.772 L4.760,17.249 C4.886,18.133 5.664,18.800 6.571,18.800 L7.452,18.800 C7.362,19.050 7.312,19.320 7.312,19.600 C7.312,20.923 8.406,22.000 9.750,22.000 C11.094,22.000 12.187,20.923 12.187,19.600 C12.187,19.320 12.138,19.050 12.047,18.800 L16.389,18.800 C16.299,19.050 16.249,19.320 16.249,19.600 C16.249,20.923 17.343,22.000 18.687,22.000 C20.031,22.000 21.124,20.923 21.124,19.600 C21.124,19.320 21.075,19.050 20.985,18.800 L22.749,18.800 C23.198,18.800 23.562,18.442 23.562,18.000 C23.562,17.558 23.198,17.200 22.749,17.200 L6.571,17.200 C6.470,17.200 6.384,17.126 6.370,17.028 L6.167,15.600 L22.168,15.600 C23.024,15.600 23.776,15.002 23.956,14.177 L25.958,4.977 C26.075,4.443 25.941,3.893 25.593,3.469 L25.593,3.469 ZM10.562,19.600 C10.562,20.041 10.198,20.400 9.750,20.400 C9.302,20.400 8.937,20.041 8.937,19.600 C8.937,19.159 9.302,18.800 9.750,18.800 C10.198,18.800 10.562,19.159 10.562,19.600 ZM19.499,19.600 C19.499,20.041 19.135,20.400 18.687,20.400 C18.239,20.400 17.874,20.041 17.874,19.600 C17.874,19.159 18.239,18.800 18.687,18.800 C19.135,18.800 19.499,19.159 19.499,19.600 ZM24.369,4.642 L22.367,13.841 C22.347,13.933 22.264,14.000 22.168,14.000 L5.941,14.000 L4.580,4.400 L24.171,4.400 C24.251,4.400 24.301,4.440 24.329,4.474 C24.357,4.508 24.386,4.565 24.369,4.642 L24.369,4.642 Z"
                        />
                      </svg>

                      <span class="cart-item-count">0</span>
                    </a>
                  </div>
                  <div class="cart-dropdown js-cart-source hidden-xs-up">
                    <div class="cart-dropdown-wrapper">
                      <div class="cart-title">
                        <p class="h4 text-center">Shopping Cart</p>
                      </div>
                      <div class="no-items">
                        There are no more items in your cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="header-top tablet-h" data-mobilemenu="992">
      <div class="container">
        <div id="_mobile_search"></div>
        <div class="row vertical-center header-top-wrapper">
          <div class="header-topline-wrapper">
            <div class="header-topline row">
              <div class="col-md-5 position-static header-left">
                <div class="header-options dropdown js-dropdown">
                  <button
                    data-target="#"
                    data-toggle="dropdown"
                    class="menu-button btn-unstyle"
                    aria-haspopup="true"
                    aria-expanded="false"
                    aria-label=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="21px"
                      height="15px"
                    >
                      <path
                        fill-rule="evenodd"
                        fill="rgb(0, 0, 0)"
                        d="M20.125,8.365 L0.875,8.365 C0.392,8.365 -0.000,7.978 -0.000,7.500 C-0.000,7.022 0.392,6.635 0.875,6.635 L20.125,6.635 C20.608,6.635 21.000,7.022 21.000,7.500 C21.000,7.978 20.608,8.365 20.125,8.365 ZM20.125,1.731 L0.875,1.731 C0.392,1.731 -0.000,1.343 -0.000,0.865 C-0.000,0.388 0.392,-0.000 0.875,-0.000 L20.125,-0.000 C20.608,-0.000 21.000,0.388 21.000,0.865 C21.000,1.343 20.608,1.731 20.125,1.731 ZM0.875,13.269 L20.125,13.269 C20.608,13.269 21.000,13.657 21.000,14.135 C21.000,14.612 20.608,15.000 20.125,15.000 L0.875,15.000 C0.392,15.000 -0.000,14.612 -0.000,14.135 C-0.000,13.657 0.392,13.269 0.875,13.269 Z"
                      />
                    </svg>
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="currency-selector-label"
                  >
                    <div id="_desktop_language_selector" class="lang_and_сr">
                      <div class="language-selector-wrapper">
                        <div class="language-selector">
                          <ul
                            class="hidden-md-down"
                            aria-labelledby="language-selector-label"
                          >
                            <li class="current">
                              <a
                                href="https://themes12.anvanto.com/super/themes/pascal/en/"
                                class="dropdown-item"
                                >en</a
                              >
                            </li>
                            <li>
                              <a
                                href="https://themes12.anvanto.com/super/themes/pascal/fr/"
                                class="dropdown-item"
                                >vi</a
                              >
                            </li>
                          </ul>
                          <select
                            class="link } hidden-lg-up"
                            aria-labelledby="language-selector-label"
                          >
                            <option
                              value="https://themes12.anvanto.com/super/themes/pascal/en/"
                              selected="selected"
                            >
                              en
                            </option>
                            <option
                              value="https://themes12.anvanto.com/super/themes/pascal/fr/"
                            >
                              vi
                            </option>
                          </select>
                        </div>
                        <div class="mobile_item_wrapper hidden-lg-up">
                          <span>en</span>
                          <span class="mobile-toggler">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              width="5px"
                              height="9px"
                            >
                              <path
                                fill-rule="evenodd"
                                fill="rgb(0, 0, 0)"
                                d="M4.913,4.292 L0.910,0.090 C0.853,0.030 0.787,-0.000 0.713,-0.000 C0.639,-0.000 0.572,0.030 0.515,0.090 L0.086,0.541 C0.029,0.601 -0.000,0.670 -0.000,0.749 C-0.000,0.827 0.029,0.896 0.086,0.956 L3.462,4.500 L0.086,8.044 C0.029,8.104 -0.000,8.173 -0.000,8.251 C-0.000,8.330 0.029,8.399 0.086,8.459 L0.515,8.910 C0.572,8.970 0.639,9.000 0.713,9.000 C0.787,9.000 0.853,8.970 0.910,8.910 L4.913,4.707 C4.970,4.647 4.999,4.578 4.999,4.500 C4.999,4.422 4.970,4.353 4.913,4.292 Z"
                              />
                            </svg>
                          </span>
                        </div>
                        <div class="adropdown-mobile">
                          <a
                            href="https://themes12.anvanto.com/super/themes/pascal/en/"
                            class=""
                            >en</a
                          >
                          <a
                            href="https://themes12.anvanto.com/super/themes/pascal/fr/"
                            class=""
                            >vi</a
                          >
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>

                <div id="_desktop_search" class="search-dropdown dropdown">
                  <div
                    class="search-button-wrapper dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <div class="search-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="20px"
                        height="20px"
                      >
                        <path
                          fill-rule="evenodd"
                          fill="rgb(0, 0, 0)"
                          d="M19.772,18.673 L14.891,13.792 C16.104,12.333 16.835,10.459 16.835,8.418 C16.835,3.776 13.059,0.000 8.418,0.000 C3.776,0.000 0.000,3.776 0.000,8.418 C0.000,13.059 3.776,16.835 8.418,16.835 C10.459,16.835 12.333,16.104 13.792,14.891 L18.673,19.772 C18.824,19.924 19.023,20.000 19.222,20.000 C19.421,20.000 19.620,19.924 19.772,19.772 C20.076,19.468 20.076,18.976 19.772,18.673 ZM1.555,8.418 C1.555,4.634 4.634,1.555 8.418,1.555 C12.202,1.555 15.280,4.634 15.280,8.418 C15.280,12.202 12.202,15.280 8.418,15.280 C4.634,15.280 1.555,12.202 1.555,8.418 Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    id="search_widget"
                    class="search-widget dropdown-menu"
                    data-search-controller-url="//themes12.anvanto.com/super/themes/pascal/en/search"
                  >
                    <div class="container">
                      <form
                        method="get"
                        action="//themes12.anvanto.com/super/themes/pascal/en/search"
                      >
                        <button type="submit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="20px"
                            height="20px"
                          >
                            <path
                              fill-rule="evenodd"
                              fill="rgb(0, 0, 0)"
                              d="M19.772,18.673 L14.891,13.792 C16.104,12.333 16.835,10.459 16.835,8.418 C16.835,3.776 13.059,0.000 8.418,0.000 C3.776,0.000 -0.000,3.776 -0.000,8.418 C-0.000,13.059 3.776,16.835 8.418,16.835 C10.459,16.835 12.332,16.104 13.791,14.891 L18.673,19.772 C18.824,19.924 19.023,20.000 19.222,20.000 C19.421,20.000 19.620,19.924 19.772,19.772 C20.076,19.468 20.076,18.976 19.772,18.673 ZM1.555,8.418 C1.555,4.634 4.634,1.555 8.418,1.555 C12.202,1.555 15.280,4.634 15.280,8.418 C15.280,12.202 12.202,15.280 8.418,15.280 C4.634,15.280 1.555,12.202 1.555,8.418 Z"
                            />
                          </svg>
                        </button>
                        <input type="hidden" name="controller" value="search" />
                        <input
                          type="text"
                          name="s"
                          value=""
                          desktop-placeholder="Search"
                          mobile-placeholder="Search"
                          placeholder="Search"
                          aria-label="Search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2 hidden-sm-down" id="_desktop_logo">
                <a href="https://themes12.anvanto.com/super/themes/pascal/">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="175"
                    viewBox="0 0 174 18.62"
                  >
                    <defs>
                      <style>
                        .cls-1 {
                          fill: #fff;
                        }
                      </style>
                    </defs>
                    <title>pascal_logo</title>
                    <path
                      d="M25.65,3A8.41,8.41,0,0,0,20.09,1.3H13V19.5h2.59V14h4.5a8.47,8.47,0,0,0,5.56-1.69,5.75,5.75,0,0,0,2-4.66A5.74,5.74,0,0,0,25.65,3Zm-1.87,7.68A5.82,5.82,0,0,1,20,11.73H15.59V3.56H20a5.88,5.88,0,0,1,3.77,1.05,3.71,3.71,0,0,1,1.3,3A3.69,3.69,0,0,1,23.78,10.67ZM50.36,1.3,42.12,19.5H44.8l2-4.55h9.66l2,4.55h2.73L52.93,1.3ZM47.71,12.87,51.63,4l3.92,8.92ZM87.49,10.3a26.2,26.2,0,0,0-3.3-1,22.25,22.25,0,0,1-2.51-.69,4.39,4.39,0,0,1-1.55-.91,2,2,0,0,1-.62-1.52,2.48,2.48,0,0,1,1.1-2.08,5.6,5.6,0,0,1,3.32-.81,9.1,9.1,0,0,1,2.54.38,9.42,9.42,0,0,1,2.44,1.1l.86-2.08A8.39,8.39,0,0,0,87.1,1.51a12.16,12.16,0,0,0-3.17-.42,9.58,9.58,0,0,0-3.88.7,5.32,5.32,0,0,0-2.32,1.88A4.68,4.68,0,0,0,77,6.29a4,4,0,0,0,.9,2.77A5.46,5.46,0,0,0,80,10.58a25.91,25.91,0,0,0,3.31,1c1.09.26,1.93.49,2.53.7a4.13,4.13,0,0,1,1.51.9A2,2,0,0,1,88,14.69a2.35,2.35,0,0,1-1.12,2,6,6,0,0,1-3.38.77,9.74,9.74,0,0,1-3.33-.59,7.89,7.89,0,0,1-2.67-1.52l-1,2a8.05,8.05,0,0,0,3,1.65,12.35,12.35,0,0,0,4,.64,9.72,9.72,0,0,0,3.9-.69,5.21,5.21,0,0,0,2.37-1.87,4.66,4.66,0,0,0,.78-2.62,4,4,0,0,0-.9-2.73A5.62,5.62,0,0,0,87.49,10.3Zm25.72-6a7.36,7.36,0,0,1,3.66-.91A6.81,6.81,0,0,1,122,5.56l1.69-1.63a7.86,7.86,0,0,0-3-2.12,10.77,10.77,0,0,0-8.83.49,8.91,8.91,0,0,0-3.45,3.33,9.13,9.13,0,0,0-1.25,4.77,9.13,9.13,0,0,0,1.25,4.77,8.88,8.88,0,0,0,3.44,3.33,10.71,10.71,0,0,0,8.83.48,8.17,8.17,0,0,0,3-2.13L122,15.21a6.77,6.77,0,0,1-5.12,2.18,7.36,7.36,0,0,1-3.66-.91A6.51,6.51,0,0,1,110.65,14a6.93,6.93,0,0,1-.92-3.57,6.93,6.93,0,0,1,.92-3.57A6.51,6.51,0,0,1,113.21,4.32Zm33.51-3-8.23,18.2h2.67l2-4.55h9.67l2,4.55h2.73L149.3,1.3Zm-2.65,11.57L148,4l3.92,8.92Zm33.08,4.37V1.3h-2.6V19.5H187V17.24Z"
                      transform="translate(-13 -1.09)"
                    />
                    <path
                      class="cls-1"
                      d="M35.76,8.62a1.45,1.45,0,0,0-1.06.43,1.43,1.43,0,0,0-.44,1.06,1.49,1.49,0,0,0,1.5,1.52,1.39,1.39,0,0,0,1-.43,1.45,1.45,0,0,0,.43-1.09A1.42,1.42,0,0,0,36.79,9,1.4,1.4,0,0,0,35.76,8.62Zm31,0a1.45,1.45,0,0,0-1.06.43,1.43,1.43,0,0,0-.44,1.06,1.49,1.49,0,0,0,1.5,1.52,1.39,1.39,0,0,0,1-.43,1.49,1.49,0,0,0,.43-1.09A1.42,1.42,0,0,0,67.77,9,1.4,1.4,0,0,0,66.74,8.62Zm30,0a1.49,1.49,0,0,0-1.5,1.49,1.46,1.46,0,0,0,.44,1.09,1.43,1.43,0,0,0,1.06.43,1.39,1.39,0,0,0,1-.43,1.49,1.49,0,0,0,.43-1.09A1.42,1.42,0,0,0,97.75,9,1.4,1.4,0,0,0,96.72,8.62Zm34,0a1.43,1.43,0,0,0-1.05.43,1.39,1.39,0,0,0-.44,1.06,1.49,1.49,0,0,0,1.49,1.52,1.36,1.36,0,0,0,1-.43,1.45,1.45,0,0,0,.43-1.09A1.42,1.42,0,0,0,131.72,9,1.38,1.38,0,0,0,130.69,8.62Zm34,.42a1.4,1.4,0,0,0-1-.42,1.46,1.46,0,0,0-1.06.43,1.43,1.43,0,0,0-.44,1.06,1.49,1.49,0,0,0,1.5,1.52,1.38,1.38,0,0,0,1-.43,1.45,1.45,0,0,0,.43-1.09A1.42,1.42,0,0,0,164.7,9Z"
                      transform="translate(-13 -1.09)"
                    />
                  </svg>
                </a>
              </div>
              <div class="col-md-5 position-static header-right">
                <div id="_desktop_user_info">
                  <div class="user-info">
                    <a
                      href="https://themes12.anvanto.com/super/themes/pascal/en/my-account"
                      title="Log in to your customer account"
                      rel="nofollow"
                    >
                      <span class="account-login">
                        <svg
                          class="hidden-md-down"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="21px"
                          height="21px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(0, 0, 0)"
                            d="M17.925,13.576 C16.781,12.432 15.420,11.585 13.935,11.073 C15.525,9.977 16.570,8.144 16.570,6.070 C16.570,2.723 13.847,0.000 10.500,0.000 C7.153,0.000 4.430,2.723 4.430,6.070 C4.430,8.144 5.475,9.977 7.065,11.073 C5.580,11.585 4.219,12.432 3.075,13.576 C1.092,15.558 -0.000,18.195 -0.000,21.000 L1.641,21.000 C1.641,16.115 5.615,12.141 10.500,12.141 C15.385,12.141 19.359,16.115 19.359,21.000 L21.000,21.000 C21.000,18.195 19.908,15.558 17.925,13.576 ZM10.500,10.500 C8.058,10.500 6.070,8.513 6.070,6.070 C6.070,3.628 8.058,1.641 10.500,1.641 C12.943,1.641 14.930,3.628 14.930,6.070 C14.930,8.513 12.943,10.500 10.500,10.500 Z"
                          />
                        </svg>

                        <span class="hidden-lg-up">Sign in</span>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="an_wishlist-nav-link" id="_desktop_an_wishlist-nav">
                  <a
                    href="https://themes12.anvanto.com/super/themes/pascal/en/module/an_wishlist/list"
                    title="My wishlist"
                  >
                    <svg
                      class="hidden-md-down"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="20px"
                    >
                      <path
                        fill-rule="evenodd"
                        fill="rgb(0, 0, 0)"
                        d="M17.625,0.000 C15.068,0.000 13.171,1.486 12.000,3.595 C10.829,1.486 8.932,0.000 6.375,0.000 C2.690,0.000 0.000,2.929 0.000,6.501 C0.000,11.225 4.761,14.191 11.537,19.803 C11.802,20.023 12.198,20.023 12.463,19.803 C19.233,14.196 24.000,11.226 24.000,6.501 C24.000,2.929 21.309,0.000 17.625,0.000 L17.625,0.000 ZM12.000,18.419 C5.760,13.288 1.406,10.438 1.406,6.501 C1.406,3.554 3.542,1.331 6.375,1.331 C9.106,1.331 10.798,3.725 11.322,5.502 C11.512,6.150 12.486,6.153 12.678,5.502 C13.195,3.749 14.868,1.331 17.625,1.331 C20.458,1.331 22.594,3.554 22.594,6.501 C22.594,10.440 18.233,13.294 12.000,18.419 Z"
                      />
                    </svg>
                    <span class="hidden-md-up">Wishlist</span>
                  </a>
                </div>

                <div id="_desktop_cart">
                  <div
                    class="blockcart cart-preview js-sidebar-cart-trigger inactive"
                    data-refresh-url="//themes12.anvanto.com/super/themes/pascal/en/module/ps_shoppingcart/ajax"
                  >
                    <div class="header">
                      <a
                        class="blockcart-link"
                        rel="nofollow"
                        href="//themes12.anvanto.com/super/themes/pascal/en/cart?action=show"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="26px"
                          height="22px"
                        >
                          <path
                            fill-rule="evenodd"
                            fill="rgb(0, 0, 0)"
                            d="M25.593,3.469 C25.244,3.044 24.726,2.800 24.171,2.800 L4.354,2.800 L4.177,1.551 C4.051,0.667 3.273,0.000 2.366,0.000 L0.812,0.000 C0.364,0.000 -0.000,0.358 -0.000,0.800 C-0.000,1.242 0.364,1.600 0.812,1.600 L2.366,1.600 C2.467,1.600 2.553,1.674 2.567,1.772 L4.760,17.249 C4.886,18.133 5.664,18.800 6.571,18.800 L7.452,18.800 C7.362,19.050 7.312,19.320 7.312,19.600 C7.312,20.923 8.406,22.000 9.750,22.000 C11.094,22.000 12.187,20.923 12.187,19.600 C12.187,19.320 12.138,19.050 12.047,18.800 L16.389,18.800 C16.299,19.050 16.249,19.320 16.249,19.600 C16.249,20.923 17.343,22.000 18.687,22.000 C20.031,22.000 21.124,20.923 21.124,19.600 C21.124,19.320 21.075,19.050 20.985,18.800 L22.749,18.800 C23.198,18.800 23.562,18.442 23.562,18.000 C23.562,17.558 23.198,17.200 22.749,17.200 L6.571,17.200 C6.470,17.200 6.384,17.126 6.370,17.028 L6.167,15.600 L22.168,15.600 C23.024,15.600 23.776,15.002 23.956,14.177 L25.958,4.977 C26.075,4.443 25.941,3.893 25.593,3.469 L25.593,3.469 ZM10.562,19.600 C10.562,20.041 10.198,20.400 9.750,20.400 C9.302,20.400 8.937,20.041 8.937,19.600 C8.937,19.159 9.302,18.800 9.750,18.800 C10.198,18.800 10.562,19.159 10.562,19.600 ZM19.499,19.600 C19.499,20.041 19.135,20.400 18.687,20.400 C18.239,20.400 17.874,20.041 17.874,19.600 C17.874,19.159 18.239,18.800 18.687,18.800 C19.135,18.800 19.499,19.159 19.499,19.600 ZM24.369,4.642 L22.367,13.841 C22.347,13.933 22.264,14.000 22.168,14.000 L5.941,14.000 L4.580,4.400 L24.171,4.400 C24.251,4.400 24.301,4.440 24.329,4.474 C24.357,4.508 24.386,4.565 24.369,4.642 L24.369,4.642 Z"
                          />
                        </svg>

                        <span class="cart-item-count">0</span>
                      </a>
                    </div>
                    <div class="cart-dropdown js-cart-source hidden-xs-up">
                      <div class="cart-dropdown-wrapper">
                        <div class="cart-title">
                          <p class="h4 text-center">Shopping Cart</p>
                        </div>
                        <div class="no-items">
                          There are no more items in your cart
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-xs-12 position-static">
            <div class="row vertical-center header-menu-wrapper">
              <div class="amega-menu hidden-sm-down">
                <div id="amegamenu" class="">
                  <div class="fixed-menu-container">
                    <div class="col-md-2 hidden-sm-down" id="_desktop_logo">
                      <a
                        href="https://themes12.anvanto.com/super/themes/pascal/"
                      >
                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="175"
                          viewBox="0 0 174 18.62"
                        >
                          <defs>
                            <style>
                              .cls-1 {
                                fill: #fff;
                              }
                            </style>
                          </defs>
                          <title>pascal_logo</title>
                          <path
                            d="M25.65,3A8.41,8.41,0,0,0,20.09,1.3H13V19.5h2.59V14h4.5a8.47,8.47,0,0,0,5.56-1.69,5.75,5.75,0,0,0,2-4.66A5.74,5.74,0,0,0,25.65,3Zm-1.87,7.68A5.82,5.82,0,0,1,20,11.73H15.59V3.56H20a5.88,5.88,0,0,1,3.77,1.05,3.71,3.71,0,0,1,1.3,3A3.69,3.69,0,0,1,23.78,10.67ZM50.36,1.3,42.12,19.5H44.8l2-4.55h9.66l2,4.55h2.73L52.93,1.3ZM47.71,12.87,51.63,4l3.92,8.92ZM87.49,10.3a26.2,26.2,0,0,0-3.3-1,22.25,22.25,0,0,1-2.51-.69,4.39,4.39,0,0,1-1.55-.91,2,2,0,0,1-.62-1.52,2.48,2.48,0,0,1,1.1-2.08,5.6,5.6,0,0,1,3.32-.81,9.1,9.1,0,0,1,2.54.38,9.42,9.42,0,0,1,2.44,1.1l.86-2.08A8.39,8.39,0,0,0,87.1,1.51a12.16,12.16,0,0,0-3.17-.42,9.58,9.58,0,0,0-3.88.7,5.32,5.32,0,0,0-2.32,1.88A4.68,4.68,0,0,0,77,6.29a4,4,0,0,0,.9,2.77A5.46,5.46,0,0,0,80,10.58a25.91,25.91,0,0,0,3.31,1c1.09.26,1.93.49,2.53.7a4.13,4.13,0,0,1,1.51.9A2,2,0,0,1,88,14.69a2.35,2.35,0,0,1-1.12,2,6,6,0,0,1-3.38.77,9.74,9.74,0,0,1-3.33-.59,7.89,7.89,0,0,1-2.67-1.52l-1,2a8.05,8.05,0,0,0,3,1.65,12.35,12.35,0,0,0,4,.64,9.72,9.72,0,0,0,3.9-.69,5.21,5.21,0,0,0,2.37-1.87,4.66,4.66,0,0,0,.78-2.62,4,4,0,0,0-.9-2.73A5.62,5.62,0,0,0,87.49,10.3Zm25.72-6a7.36,7.36,0,0,1,3.66-.91A6.81,6.81,0,0,1,122,5.56l1.69-1.63a7.86,7.86,0,0,0-3-2.12,10.77,10.77,0,0,0-8.83.49,8.91,8.91,0,0,0-3.45,3.33,9.13,9.13,0,0,0-1.25,4.77,9.13,9.13,0,0,0,1.25,4.77,8.88,8.88,0,0,0,3.44,3.33,10.71,10.71,0,0,0,8.83.48,8.17,8.17,0,0,0,3-2.13L122,15.21a6.77,6.77,0,0,1-5.12,2.18,7.36,7.36,0,0,1-3.66-.91A6.51,6.51,0,0,1,110.65,14a6.93,6.93,0,0,1-.92-3.57,6.93,6.93,0,0,1,.92-3.57A6.51,6.51,0,0,1,113.21,4.32Zm33.51-3-8.23,18.2h2.67l2-4.55h9.67l2,4.55h2.73L149.3,1.3Zm-2.65,11.57L148,4l3.92,8.92Zm33.08,4.37V1.3h-2.6V19.5H187V17.24Z"
                            transform="translate(-13 -1.09)"
                          />
                          <path
                            class="cls-1"
                            d="M35.76,8.62a1.45,1.45,0,0,0-1.06.43,1.43,1.43,0,0,0-.44,1.06,1.49,1.49,0,0,0,1.5,1.52,1.39,1.39,0,0,0,1-.43,1.45,1.45,0,0,0,.43-1.09A1.42,1.42,0,0,0,36.79,9,1.4,1.4,0,0,0,35.76,8.62Zm31,0a1.45,1.45,0,0,0-1.06.43,1.43,1.43,0,0,0-.44,1.06,1.49,1.49,0,0,0,1.5,1.52,1.39,1.39,0,0,0,1-.43,1.49,1.49,0,0,0,.43-1.09A1.42,1.42,0,0,0,67.77,9,1.4,1.4,0,0,0,66.74,8.62Zm30,0a1.49,1.49,0,0,0-1.5,1.49,1.46,1.46,0,0,0,.44,1.09,1.43,1.43,0,0,0,1.06.43,1.39,1.39,0,0,0,1-.43,1.49,1.49,0,0,0,.43-1.09A1.42,1.42,0,0,0,97.75,9,1.4,1.4,0,0,0,96.72,8.62Zm34,0a1.43,1.43,0,0,0-1.05.43,1.39,1.39,0,0,0-.44,1.06,1.49,1.49,0,0,0,1.49,1.52,1.36,1.36,0,0,0,1-.43,1.45,1.45,0,0,0,.43-1.09A1.42,1.42,0,0,0,131.72,9,1.38,1.38,0,0,0,130.69,8.62Zm34,.42a1.4,1.4,0,0,0-1-.42,1.46,1.46,0,0,0-1.06.43,1.43,1.43,0,0,0-.44,1.06,1.49,1.49,0,0,0,1.5,1.52,1.38,1.38,0,0,0,1-.43,1.45,1.45,0,0,0,.43-1.09A1.42,1.42,0,0,0,164.7,9Z"
                            transform="translate(-13 -1.09)"
                          />
                        </svg>
                      </a>
                    </div>
                    <ul class="anav-top">
                      <li class="amenu-item mm-1 plex">
                        <nuxt-link to="/" class="amenu-link"> Home </nuxt-link>
                      </li>
                      <li class="amenu-item mm-1 plex">
                        <nuxt-link to="/about" class="amenu-link">
                          About
                        </nuxt-link>
                      </li>
                      <li class="amenu-item mm-1 plex">
                        <nuxt-link to="/products" class="amenu-link">
                          Products
                        </nuxt-link>
                      </li>
                      <li class="amenu-item mm-1 plex">
                        <nuxt-link to="/contact" class="amenu-link">
                          Contact
                        </nuxt-link>
                      </li>
                    </ul>
                    <div class="col-md-2 fixed-menu-right">
                      <div
                        class="an_wishlist-nav-link"
                        id="_desktop_an_wishlist-nav"
                      >
                        <a
                          href="https://themes12.anvanto.com/super/themes/pascal/it/module/an_wishlist/list"
                          title="La mia lista dei desideri"
                        >
                          <svg
                            class="hidden-md-down"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="24px"
                            height="20px"
                          >
                            <path
                              fill-rule="evenodd"
                              fill="rgb(0, 0, 0)"
                              d="M17.625,0.000 C15.068,0.000 13.171,1.486 12.000,3.595 C10.829,1.486 8.932,0.000 6.375,0.000 C2.690,0.000 0.000,2.929 0.000,6.501 C0.000,11.225 4.761,14.191 11.537,19.803 C11.802,20.023 12.198,20.023 12.463,19.803 C19.233,14.196 24.000,11.226 24.000,6.501 C24.000,2.929 21.309,0.000 17.625,0.000 L17.625,0.000 ZM12.000,18.419 C5.760,13.288 1.406,10.438 1.406,6.501 C1.406,3.554 3.542,1.331 6.375,1.331 C9.106,1.331 10.798,3.725 11.322,5.502 C11.512,6.150 12.486,6.153 12.678,5.502 C13.195,3.749 14.868,1.331 17.625,1.331 C20.458,1.331 22.594,3.554 22.594,6.501 C22.594,10.440 18.233,13.294 12.000,18.419 Z"
                            />
                          </svg>
                          <span class="hidden-md-up">Wishlist</span>
                        </a>
                      </div>

                      <div id="_fixed_cart">
                        <a
                          class="blockcart-link"
                          rel="nofollow"
                          href="https://themes12.anvanto.com/super/themes/pascal/en/cart"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="26px"
                            height="22px"
                          >
                            <path
                              fill-rule="evenodd"
                              fill="rgb(0, 0, 0)"
                              d="M25.593,3.469 C25.244,3.044 24.726,2.800 24.171,2.800 L4.354,2.800 L4.177,1.551 C4.051,0.667 3.273,0.000 2.366,0.000 L0.812,0.000 C0.364,0.000 -0.000,0.358 -0.000,0.800 C-0.000,1.242 0.364,1.600 0.812,1.600 L2.366,1.600 C2.467,1.600 2.553,1.674 2.567,1.772 L4.760,17.249 C4.886,18.133 5.664,18.800 6.571,18.800 L7.452,18.800 C7.362,19.050 7.312,19.320 7.312,19.600 C7.312,20.923 8.406,22.000 9.750,22.000 C11.094,22.000 12.187,20.923 12.187,19.600 C12.187,19.320 12.138,19.050 12.047,18.800 L16.389,18.800 C16.299,19.050 16.249,19.320 16.249,19.600 C16.249,20.923 17.343,22.000 18.687,22.000 C20.031,22.000 21.124,20.923 21.124,19.600 C21.124,19.320 21.075,19.050 20.985,18.800 L22.749,18.800 C23.198,18.800 23.562,18.442 23.562,18.000 C23.562,17.558 23.198,17.200 22.749,17.200 L6.571,17.200 C6.470,17.200 6.384,17.126 6.370,17.028 L6.167,15.600 L22.168,15.600 C23.024,15.600 23.776,15.002 23.956,14.177 L25.958,4.977 C26.075,4.443 25.941,3.893 25.593,3.469 L25.593,3.469 ZM10.562,19.600 C10.562,20.041 10.198,20.400 9.750,20.400 C9.302,20.400 8.937,20.041 8.937,19.600 C8.937,19.159 9.302,18.800 9.750,18.800 C10.198,18.800 10.562,19.159 10.562,19.600 ZM19.499,19.600 C19.499,20.041 19.135,20.400 18.687,20.400 C18.239,20.400 17.874,20.041 17.874,19.600 C17.874,19.159 18.239,18.800 18.687,18.800 C19.135,18.800 19.499,19.159 19.499,19.600 ZM24.369,4.642 L22.367,13.841 C22.347,13.933 22.264,14.000 22.168,14.000 L5.941,14.000 L4.580,4.400 L24.171,4.400 C24.251,4.400 24.301,4.440 24.329,4.474 C24.357,4.508 24.386,4.565 24.369,4.642 L24.369,4.642 Z"
                            />
                          </svg>
                          <span class="cart-item-count">0</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="amegamenu_mobile-cover"></div>
        <div class="amegamenu_mobile-modal">
          <div
            id="mobile_top_menu_wrapper"
            class="row hidden-lg-up"
            data-level="0"
          >
            <div class="mobile-menu-header">
              <div class="megamenu_mobile-btn-back">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="26px"
                  height="12px"
                >
                  <path
                    fill-rule="evenodd"
                    fill="rgb(0, 0, 0)"
                    d="M25.969,6.346 C25.969,5.996 25.678,5.713 25.319,5.713 L3.179,5.713 L7.071,1.921 C7.324,1.673 7.324,1.277 7.071,1.029 C6.817,0.782 6.410,0.782 6.156,1.029 L1.159,5.898 C0.905,6.145 0.905,6.542 1.159,6.789 L6.156,11.658 C6.283,11.782 6.447,11.844 6.616,11.844 C6.785,11.844 6.949,11.782 7.076,11.658 C7.330,11.411 7.330,11.014 7.076,10.767 L3.184,6.975 L25.329,6.975 C25.678,6.975 25.969,6.697 25.969,6.346 Z"
                  />
                </svg>
              </div>
              <div class="megamenu_mobile-btn-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="16px"
                  height="16px"
                >
                  <path
                    fill-rule="evenodd"
                    fill="rgb(0, 0, 0)"
                    d="M16.002,0.726 L15.274,-0.002 L8.000,7.273 L0.725,-0.002 L-0.002,0.726 L7.273,8.000 L-0.002,15.274 L0.725,16.002 L8.000,8.727 L15.274,16.002 L16.002,15.274 L8.727,8.000 L16.002,0.726 Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class Header extends Vue {
  navbarList: Array<object> = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Products',
      path: '/products'
    },
    {
      title: 'Contact',
      path: '/contact'
    },
    {
      title: 'Cart',
      path: '/cart'
    }
  ]

  // isWhite: Boolean = true
  // lastScrollPosition: Number = 0
  // scrollValue: Number = 0

  // mounted() {
  //   this.lastScrollPosition = window.pageYOffset
  //   window.addEventListener('scroll', this.onScroll)
  //   const viewportMeta = document.createElement('meta')
  //   viewportMeta.name = 'viewport'
  //   viewportMeta.content = 'width=device-width, initial-scale=1'
  //   document.head.appendChild(viewportMeta)
  // }

  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.onScroll)
  // }

  // onScroll() {
  //   if (window.pageYOffset < 0) {
  //     return
  //   }
  //   if (Math.abs(window.pageYOffset - this.lastScrollPosition) < 12) {
  //     return
  //   }
  //   this.isWhite = window.pageYOffset < this.lastScrollPosition
  //   this.lastScrollPosition = window.pageYOffset
  // }
}
</script>
