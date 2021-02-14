const header = async (headerType) => {
  let _header_menues = [];
  let headerMenus;
 let fetchHeaderJson = async () =>{
	let response = await fetch(`${apiEndPoint}/api/get-header-data`)	 
	let responseJson = await response.json()
	return responseJson
} 




 return new Promise (async(resolve, reject)=>{
	await fetchHeaderJson().then((response)=>{
		let services = response?.data?.services?.constructor === Array ? response?.data?.services.slice(0,3) : response?.data?.services
		if (headerType === "dark") {
			headerMenus = `
				<div class="brk-header-mobile">
						<div class="brk-header-mobile__open brk-header-mobile__open_white">
							<span></span>
						</div>
						<div class="brk-header-mobile__logo">
							<a href="#">
								<img class="brk-header-mobile__logo-1 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/logo-2.png" alt="alt">
								<img class="brk-header-mobile__logo-2 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/logo-dark-2.png" alt="alt">
							</a>
						</div>
					</div>
					<header class="brk-header brk-header_style-1 brk-header_skin-1 position-fixed d-lg-flex flex-column brk-header_color-dark position-fixed" style="display: none;" data-logo-src="img/logo-dark-2.png" data-bg-mobile="img/brk-bg-mobile-menu.jpg" data-brk-library="component__header">
						<div class="brk-header__top-bar order-lg-1 order-2 font__family-montserrat brk-header__top-bar_scroll" style="height: 46px;">
							<div class="brk-header__title font__family-montserrat font__weight-bold">Contact Us</div>
							<div class="container-fluid">
								<div class="row align-items-center">
									<div class="col-lg-6 align-self-lg-stretch text-left">
										<div class="brk-header__element brk-header__element_skin-2 brk-header__item">
											<a href="tel:88002003040" class="brk-header__element--wrap">
												<i class="fa fa-phone"></i>
												<span class="brk-header__element--label font__weight-semibold">+91 74186 99369</span>
											</a>
										</div>
										<div class="brk-header__element brk-header__element_skin-2 brk-header__item">
											<a href="#" class="brk-header__element--wrap">
												<i class="fa fa-envelope"></i>
												<span class="brk-header__element--label font__weight-medium">wrapupeventz@gmail.com</span>
											</a>
										</div>
									</div>
									<div class="col-lg-6 align-self-lg-stretch text-left text-lg-right">
										<div class="brk-mini-cart brk-header__item brk-header__element_skin-2">
											<a href="cart.html" class="brk-mini-cart__open d-flex">
												<i class="fa fa-shopping-basket" aria-hidden="true"></i>
												<span class="brk-mini-cart__label font__family-montserrat font__weight-medium text-uppercase letter-spacing-60 font__size-10 opacity-80">My cart</span>
												<span class="brk-mini-cart__title">Shopping Cart</span>
												<span class="brk-mini-cart__count brk-mini-cart__count_skin-1 brk-mini-cart__count_white">4</span>
											</a>
											<div class="brk-mini-cart__menu">
												<div class="brk-mini-cart__header">
													<span class="font__family-montserrat font__weight-bold font__size-18">Your Cart</span>
												</div>
												<div class="brk-mini-cart__products">
													<div class="brk-mini-cart__product">
														<div class="brk-mini-cart__product--img">
															<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt">
														</div>
														<div class="brk-mini-cart__product--title-price">
															<a href="#">
																<h4 class="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
															</a>
															<span class="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
															<span class="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
														</div>
														<div class="brk-quantity">
															<span class="brk-quantity__arrows minus"></span>
															<input class="brk-quantity__value" name="quantity" type="text" value="2">
															<span class="brk-quantity__arrows plus"></span>
														</div>
														<a href="#" class="brk-mini-cart__product--remove remove"><i class="fa fa-times-circle" aria-hidden="true"></i></a>
													</div>
													<div class="brk-mini-cart__product">
														<div class="brk-mini-cart__product--img">
															<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt">
														</div>
														<div class="brk-mini-cart__product--title-price">
															<a href="#">
																<h4 class="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
															</a>
															<span class="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
															<span class="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
														</div>
														<div class="brk-quantity">
															<span class="brk-quantity__arrows minus"></span>
															<input class="brk-quantity__value" name="quantity" type="text" value="2">
															<span class="brk-quantity__arrows plus"></span>
														</div>
														<a href="#" class="brk-mini-cart__product--remove remove"><i class="fa fa-times-circle" aria-hidden="true"></i></a>
													</div>
													<div class="brk-mini-cart__product">
														<div class="brk-mini-cart__product--img">
															<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt">
														</div>
														<div class="brk-mini-cart__product--title-price">
															<a href="#">
																<h4 class="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
															</a>
															<span class="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
															<span class="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
														</div>
														<div class="brk-quantity">
															<span class="brk-quantity__arrows minus"></span>
															<input class="brk-quantity__value" name="quantity" type="text" value="2">
															<span class="brk-quantity__arrows plus"></span>
														</div>
														<a href="#" class="brk-mini-cart__product--remove remove"><i class="fa fa-times-circle" aria-hidden="true"></i></a>
													</div>
													<div class="brk-mini-cart__product">
														<div class="brk-mini-cart__product--img">
															<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt">
														</div>
														<div class="brk-mini-cart__product--title-price">
															<a href="#">
																<h4 class="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
															</a>
															<span class="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
															<span class="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
														</div>
														<div class="brk-quantity">
															<span class="brk-quantity__arrows minus"></span>
															<input class="brk-quantity__value" name="quantity" type="text" value="2">
															<span class="brk-quantity__arrows plus"></span>
														</div>
														<a href="#" class="brk-mini-cart__product--remove remove"><i class="fa fa-times-circle" aria-hidden="true"></i></a>
													</div>
												</div>
												<div class="brk-mini-cart__links">
													<div class="brk-mini-cart__links--wrap">
														<a class="brk-mini-cart__links--cart" href="cart.html"><i class="fa fa-shopping-basket"></i> Cart</a>
														<a class="brk-mini-cart__links--checkout" href="checkout.html">Proceed to checkout <i class="far fa-arrow-right"></i></a>
													</div>
												</div>
											</div>
										</div>
										<div class="brk-header__element brk-header__element_skin-2 brk-header__item">
											<a href="#" class="brk-header__element--wrap">
												<i class="fa fa-heart"></i>
												<span class="brk-header__element--label font__weight-medium">My wishlist</span>
												<span class="brk-header__compare brk-header__compare_white brk-header__compare_skin-1">12</span>
											</a>
										</div>
										<div class="brk-lang brk-lang_interactive brk-header__item">
											<span class="brk-lang__selected">US <i class="fa fa-caret-down" aria-hidden="true"></i></span>
											<span class="brk-lang__open"><i class="fa fa-language"></i> Language <span class="brk-lang__active-lang text-white brk-bg-primary">US</span></span>
											<ul class="brk-lang__option">
												<li><a href="#">UA</a></li>
												<li><a href="#">US</a></li>
												<li><a href="#">PL</a></li>
												<li><a href="#">ES</a></li>
											</ul>
										</div>
										<div class="brk-header__element brk-header__element_skin-2 brk-header__item">
											<a href="login.html" class="brk-header__element--wrap">
												<i class="fa fa-user"></i>
												<span class="brk-header__element--label font__weight-medium">Login</span>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="brk-header__main-bar brk-header_border-top-dark order-lg-2 order-1" style="height: 72px;">
							<div class="container-fluid">
								<div class="row align-items-center">
									<div class="col-lg-3 align-self-lg-center d-none d-lg-flex ml-10">
										<div class="brk-open-top-bar brk-header__item">
											<div class="brk-open-top-bar__circle"></div>
											<div class="brk-open-top-bar__circle"></div>
											<div class="brk-open-top-bar__circle"></div>
										</div>
										<a href="/" class="brk-header__logo brk-header__item @@modifier">
											<img class="brk-header__logo-1 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/logo-dark-1.png" alt="alt">
											<img class="brk-header__logo-2 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/logo-dark-1.png" alt="alt">
										</a>
									</div>
									<div class="col-lg align-self-lg-stretch text-lg-center">
										<nav class="brk-nav brk-header__item">
											<ul class="brk-nav__menu">
												<li class="brk-nav__children brk-nav__full-width">
													<a href="/" data-brk-library="component__tabs">
														<span>Home</span>
													</a>
													<div class="brk-nav__mega-menu brk-nav-drop-down">
														<div class="bg-white">
															<div class="brk-tabs brk-tabs-hovers" data-index="0">
																<ul class="brk-tabs-nav font__family-open-sans">
																	<li class="brk-tab font__weight-bold">
																		<i class="fa fa-tasks"></i>
																		Demos
																	</li>
																	<li class="brk-tab font__weight-bold">
																		<i class="fa fa-trophy"></i>
																		HomePages
																	</li>
																	<li class="brk-tab font__weight-bold">
																		<i class="fa fa-life-ring"></i>
																		Support & Info
																	</li>
																</ul>
																<div class="brk-tabs-content">
																	<div class="brk-tab-item">
																		<div class="row no-gutters">
																			<div class="col-lg">
																				<div class="brk-nav__header font__family-montserrat">Check</div>
																				<div class="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
																					<ul class="brk-header-list font__family-montserrat">
																						<li>
																							<a href="/demo_agency_animation.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-paper-plane"></i>
																								</span>
																								Agency Animation
																							</a>
																						</li>
																						<li>
																							<a href="/demo_agency_fluid.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-tint"></i>
																								</span>
																								Agency Fluid
																							</a>
																						</li>
																						<li>
																							<a href="/demo_agency_modern.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-gift"></i>
																								</span>
																								Agency Modern
																							</a>
																						</li>
																						<li>
																							<a href="/demo_agency_urban.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-university"></i>
																								</span>
																								Agency Urban
																							</a>
																						</li>
																						<li>
																							<a href="/demo_art.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-newspaper"></i>
																								</span>
																								Art
																							</a>
																						</li>
																						<li>
																							<a href="/demo_saas.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-camera-retro"></i>
																								</span>
																								SAAS
																								<span class="brk-header-list__info bg-success font__family-montserrat">Ver. 1.5</span>
																							</a>
																						</li>
																						<li>
																							<a href="/demo_winter_trip_agency.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-snowflake"></i>
																								</span>
																								Winter Trip Agency
																								<span class="brk-header-list__info bg-success font__family-montserrat">Ver. 1.6</span>
																							</a>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div class="col-lg">
																				<div class="brk-nav__header font__family-montserrat">Out</div>
																				<div class="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
																					<ul class="brk-header-list font__family-montserrat">
																						<li>
																							<a href="/demo_construction.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-home"></i>
																								</span>
																								Construction
																							</a>
																						</li>
																						<li>
																							<a href="/demo_creative_agency.html">
																								<span class="brk-header-list__icon">
																									<i class="fab fa-angrycreative"></i>
																								</span>
																								Creative Agency
																							</a>
																						</li>
																						<li>
																							<a href="/demo_freelance_blog.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-user-friends"></i>
																								</span>
																								Freelance Blog
																							</a>
																						</li>
																						<li>
																							<a href="/demo_freelance_portfolio.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-portrait"></i>
																								</span>
																								Freelance Portfolio
																							</a>
																						</li>
																						<li>
																							<a href="/demo_logistic.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-truck"></i>
																								</span>
																								Logistic
																							</a>
																						</li>
																						<li>
																							<a href="/demo_website_agency.html">
																								<span class="brk-header-list__icon">
																									<i class="far fa-images"></i>
																								</span>
																								Website Agency
																							</a>
																						</li>
																						<li>
																							<a href="/demo_winter_trip_agency_cta.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-snowflake"></i>
																								</span>
																								Winter Event Anounce
																								<span class="brk-header-list__info bg-success font__family-montserrat">Ver. 1.7</span>
																							</a>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div class="col-lg">
																				<div class="brk-nav__header font__family-montserrat">Our</div>
																				<div class="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
																					<ul class="brk-header-list font__family-montserrat">
																						<li>
																							<a href="/demo_shop_clothes.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-tshirt"></i>
																								</span>
																								Shop Clothes
																								<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																							</a>
																						</li>
																						<li>
																							<a href="/demo_shop_drone.html">
																								<span class="brk-header-list__icon">
																									<i class="fab fa-phoenix-squadron"></i>
																								</span>
																								Shop Drone
																								<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																							</a>
																						</li>
																						<li>
																							<a href="/demo_shop_electronics.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-bolt"></i>
																								</span>
																								Shop Electronics
																								<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																							</a>
																						</li>
																						<li>
																							<a href="/demo_shop_modern.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-people-carry"></i>
																								</span>
																								Shop Modern
																								<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																							</a>
																						</li>
																						<li>
																							<a href="/demo_shop_trendy.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-dollar-sign"></i>
																								</span>
																								Shop Trendy
																								<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																							</a>
																						</li>
																						<li>
																							<a href="/demo_shop_video.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-video"></i>
																								</span>
																								Shop Video
																								<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																							</a>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div class="col-lg">
																				<div class="brk-nav__header font__family-montserrat">Demos</div>
																				<div class="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
																					<ul class="brk-header-list font__family-montserrat">
																						<li>
																							<a href="/demo_magazine.html">
																								<span class="brk-header-list__icon">
																									<i class="far fa-window-restore"></i>
																								</span>
																								Magazine
																							</a>
																						</li>
																						<li>
																							<a href="/demo_photography.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-camera-retro"></i>
																								</span>
																								Photography
																							</a>
																						</li>
																						<li>
																							<a href="/demo_product_landing.html">
																								<span class="brk-header-list__icon">
																									<i class="fab fa-product-hunt"></i>
																								</span>
																								Product Landing
																								<span class="brk-header-list__info bg-success font__family-montserrat">New</span>
																							</a>
																						</li>
																						<li>
																							<a href="/demo_product_sport.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-futbol"></i>
																								</span>
																								Sports Products
																								<span class="brk-header-list__info bg-success font__family-montserrat">New</span>
																							</a>
																						</li>
																						<li>
																							<a href="/demo_spa.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-dove"></i>
																								</span>
																								Spa & Beauty
																								<span class="brk-header-list__info bg-success font__family-montserrat">New</span>
																							</a>
																						</li>
																						<li>
																							<a href="/demo_minimalistic_portfolio.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-camera-retro"></i>
																								</span>
																								Portfolio Minimalistic
																								<span class="brk-header-list__info bg-success font__family-montserrat">Ver. 1.3</span>
																							</a>
																						</li>
																						<li>
																							<a href="/demo_travel_agency.html">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-plane"></i>
																								</span>
																								Travel Agency
																								<span class="brk-header-list__info bg-success font__family-montserrat">Ver. 1.1</span>
																							</a>
																						</li>
																					</ul>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="brk-tab-item">
																		<div class="row no-gutters">
																			<div class="col-lg d-none d-lg-block">
																				<div class="brk-nav__header font__family-montserrat">Preview</div>
																				<div class="brk-element-base brk-header_border-right text-center lazyload" data-bg="img/662x295.jpg" style="height: calc(100% - 76px)">
																					<div class="brk-element-base__before"></div>
																					<div class="brk-element-base__after lazyload" data-bg="img/shape-01.png"></div>
																					<div class="brk-element-base__content center-absolute">
																						<div class="mb-20">
																							<img src="img/logo.svg" alt="alt">
																						</div>
																						<div class="pb-10">
																							<a href="#" class="btn btn-inside-out btn-md border-radius-25 font__family-open-sans font__weight-bold btn-inside-out-invert" data-brk-library="component__button">
																								<span class="before">Purchase</span><span class="text">Click Me</span><span class="after">Purchase</span>
																							</a>
																						</div>
																					</div>
																				</div>
																			</div>
																			<div class="col-lg">
																				<div class="brk-nav__header font__family-montserrat">Our</div>
																				<div class="brk-header_border-right pt-lg-20 pb-lg-60 pb-20" style="height: calc(100% - 76px)">
																					<ul class="brk-header-list font__family-montserrat">
																						<li>
																							<a href="home-page-1.html">
																								<span class="brk-header-list__icon">
																									<i class="fa fa-male" aria-hidden="true"></i>
																								</span>
																								Home page 1
																							</a>
																						</li>
																						<li>
																							<a href="home-page-2.html">
																								<span class="brk-header-list__icon">
																									<i class="fa fa-cube" aria-hidden="true"></i>
																								</span>
																								Home page 2
																							</a>
																						</li>
																						<li>
																							<a href="home-page-3.html">
																								<span class="brk-header-list__icon">
																									<i class="fa fa-qrcode" aria-hidden="true"></i>
																								</span>
																								Home page 3
																							</a>
																						</li>
																						<li>
																							<a href="home-page-4.html">
																								<span class="brk-header-list__icon">
																									<i class="fa fa-sign-language" aria-hidden="true"></i>
																								</span>
																								Home page 4
																							</a>
																						</li>
																						<li>
																							<a href="home-page-5.html">
																								<span class="brk-header-list__icon">
																									<i class="fa fa-university" aria-hidden="true"></i>
																								</span>
																								Home page 5
																							</a>
																						</li>
																						<li>
																							<a href="home-page-6.html">
																								<span class="brk-header-list__icon">
																									<i class="fa fa-cube" aria-hidden="true"></i>
																								</span>
																								Home page 6
																							</a>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div class="col-lg">
																				<div class="brk-nav__header font__family-montserrat">Home</div>
																				<div class="brk-header_border-right pt-lg-20 pb-lg-60 pb-20" style="height: calc(100% - 76px)">
																					<ul class="brk-header-list font__family-montserrat">
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 7
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 8
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 9
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 10
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 11
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 12
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																					</ul>
																				</div>
																			</div>
																			<div class="col-lg">
																				<div class="brk-nav__header font__family-montserrat">Pages</div>
																				<div class="brk-header_border-right pt-lg-20 pb-lg-60 pb-20" style="height: calc(100% - 76px)">
																					<ul class="brk-header-list font__family-montserrat">
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 13
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 14
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 15
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 16
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 17
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																						<li>
																							<a href="/">
																								<span class="brk-header-list__icon">
																									<i class="fas fa-archive"></i>
																								</span>
																								Home page 18
																								<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																							</a>
																						</li>
																					</ul>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="brk-tab-item">
																		<div class="row">
																			<div class="col-lg-5">
																				<div class="mt-30 mb-30 pr-15 pr-lg-0 pl-15 pl-lg-15">
																					<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/tiles-simple-1.jpg" alt="alt">
																				</div>
																			</div>
																			<div class="col-lg-7">
																				<div class="pr-15 pr-lg-0 pl-15 pl-lg-15">
																					<h2 class="font__family-montserrat text-uppercase font__size-24 mb-40 mt-30">How Glossier Hacked Social
																						Media</h2>
																					<p class="brk-dark-font-color text-left mb-20">On a Thursday afternoon in late spring, 32-year-old
																						Glossier founder and CEO Emily Weiss rides the elevator
																						to the penthouse level of her company's downtown Manhattan headquarters. She's a thoroughly millennial
																						girlboss in jeans, sneakers and a royal blue sweatshirt with weiss embroidered in small white script.
																						Her
																						hair is pulled back in a ponytail, and for the founder of a beauty products company, she wears notably
																						little makeup - just some mascara and possibly a swipe of Glossier Lip Gloss, a recent product release
																						touted online as having a "fuzzy doe-foot applicator."</p>
																					<p class="brk-dark-font-color text-left mb-20">A former teen model, Weiss is beautiful but not
																						intimidating, either by nature or by design (probably a little
																						of both). After all, her company’s popularity is directly related to her ability to cultivate a
																						feeling
																						of friendship with and among her customers. Just enough relatability is key.</p>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</li>
											
												
												${
													services.map(val=>{
														return 	`<li class="brk-nav__children brk-nav__drop-down-effect">`+
														`<a href="#">`+
															`<span>`+val?.service_name+`</span>`+
														`</a>`+
														`<ul class="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">`+
														val.sub_services_masters.map(subServices=>{
														return	`<li class="dd-effect brk-nav__children brk-nav__drop-down-effect">`+
															// `<a href="#">`+subServices.sub_service_name+`<i class="fas fa-angle-right"></i></a>`+
															`<a href="#">`+subServices.sub_service_name+`</i></a>`+
														`</li>`
														}).join('')
														+
														
														`</ul>`+
													`</li>`
													})
													}
											</ul>
											</ul>
										</nav>
									</div>
									<div class="col-lg-3 align-self-lg-stretch text-lg-right">
										<div class="brk-header__title font__family-montserrat font__weight-bold">Info</div>
										<div class="brk-search brk-header__item">
											<div class="brk-search__open">
												<i class="fal fa-search" aria-hidden="true"></i>
												<div class="brk-search__title">Search website</div>
											</div>
											<div class="brk-search__block">
												<div class="brk-search__header">
													<span class="font__family-montserrat font__weight-bold font__size-18">Search</span>
												</div>
												<form class="brk-search__form" role="search" method="get" action="#">
													<input name="s" maxlength="50" type="search" value="" placeholder="Enter search text">
													<button type="submit"><i class="fas fa-search"></i></button>
												</form>
												<span class="brk-search__close font__family-montserrat font__weight-medium">Close <i class="fas fa-times"></i></span>
											</div>
										</div>
										<a href="#" class="btn btn-inside-out btn- brk-header__item brk-header__btn brk-header__btn_white btn-sm-1 brk-base-box-shadow border-radius-25 font__family-open-sans font__weight-bold pr-30 pl-30" data-brk-library="component__button">
											<span class="before">Buy now <span class="font__family-times-new-roman text-lowercase font__style-italic">for</span> 39$</span><span class="text">Click Me</span><span class="after">Buy now <span class="font__family-times-new-roman text-lowercase font__style-italic">for</span> 39$</span>
										</a>
										<div class="brk-info-menu-open brk-info-menu-open_skin-2 brk-header__item">
											<span class="brk-lines">
												<span class="brk-center-line"></span>
											</span>
											<div class="brk-info-menu-open__title">Side Menu</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="brk-info-menu">
							<div class="brk-info-menu__bar">
								<button class="brk-info-menu__close"></button>
								<h3 class="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">More info</h3>
								<div class="brk-categories mb-20" data-brk-library="component__widgets">
									<div class="brk-categories__list font__family-open-sans font__size-14 font__weight-normal">
										<a href="#" class="brk-categories__item">
											<span class="brk-categories__item-name">General</span>
											<span class="brk-categories__item-count">12</span>
										</a>
										<a href="#" class="brk-categories__item active">
											<span class="brk-categories__item-name">Mockups</span>
											<span class="brk-categories__item-count">14</span>
										</a>
										<a href="#" class="brk-categories__item">
											<span class="brk-categories__item-name">HTML & CSS</span>
											<span class="brk-categories__item-count">18</span>
										</a>
										<a href="#" class="brk-categories__item">
											<span class="brk-categories__item-name">Logo</span>
											<span class="brk-categories__item-count">21</span>
										</a>
										<a href="#" class="brk-categories__item">
											<span class="brk-categories__item-name">Web Design</span>
											<span class="brk-categories__item-count">6</span>
										</a>
									</div>
								</div>
								<h3 class="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">Our instagram</h3>
								<div class="default-slider dots-base-skin dots-base-color slick-loading mt-15" data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "autoplay": false, "autoplaySpeed": 4000}' data-brk-library="slider__slick">
									<div>
										<div class="brk-header-slider">
											<div class="brk-header-slider__img">
												<img src="img/309x206_1.jpg" alt="alt">
											</div>
											<div class="brk-header-slider__content">
												<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt">
												<div class="brk-header-slider__content--title">
													<h4 class="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
													<span class="font__size-14">17 Hours ago</span>
												</div>
											</div>
											<p class="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
												ante, dapibus in, viverra</p>
										</div>
									</div>
									<div>
										<div class="brk-header-slider">
											<div class="brk-header-slider__img">
												<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/309x206_2.jpg" alt="alt">
											</div>
											<div class="brk-header-slider__content">
												<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt">
												<div class="brk-header-slider__content--title">
													<h4 class="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
													<span class="font__size-14">17 Hours ago</span>
												</div>
											</div>
											<p class="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
												ante, dapibus in, viverra</p>
										</div>
									</div>
									<div>
										<div class="brk-header-slider">
											<div class="brk-header-slider__img">
												<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/309x206_3.jpg" alt="alt">
											</div>
											<div class="brk-header-slider__content">
												<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt">
												<div class="brk-header-slider__content--title">
													<h4 class="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
													<span class="font__size-14">17 Hours ago</span>
												</div>
											</div>
											<p class="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
												ante, dapibus in, viverra</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</header>
					<div class="brk-info-menu">
						<div class="brk-info-menu__bar">
							<button class="brk-info-menu__close"></button>
							<h3 class="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">More info</h3>
							<div class="brk-categories mb-20" data-brk-library="component__widgets">
								<div class="brk-categories__list font__family-open-sans font__size-14 font__weight-normal">
									<a href="#" class="brk-categories__item">
										<span class="brk-categories__item-name">General</span>
										<span class="brk-categories__item-count">12</span>
									</a>
									<a href="#" class="brk-categories__item active">
										<span class="brk-categories__item-name">Mockups</span>
										<span class="brk-categories__item-count">14</span>
									</a>
									<a href="#" class="brk-categories__item">
										<span class="brk-categories__item-name">HTML & CSS</span>
										<span class="brk-categories__item-count">18</span>
									</a>
									<a href="#" class="brk-categories__item">
										<span class="brk-categories__item-name">Logo</span>
										<span class="brk-categories__item-count">21</span>
									</a>
									<a href="#" class="brk-categories__item">
										<span class="brk-categories__item-name">Web Design</span>
										<span class="brk-categories__item-count">6</span>
									</a>
								</div>
							</div>
							<h3 class="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">Our instagram</h3>
							<div class="default-slider dots-base-skin dots-base-color slick-loading mt-15" data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "autoplay": false, "autoplaySpeed": 4000}' data-brk-library="slider__slick">
								<div>
									<div class="brk-header-slider">
										<div class="brk-header-slider__img">
											<img src="img/309x206_1.jpg" alt="alt">
										</div>
										<div class="brk-header-slider__content">
											<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt">
											<div class="brk-header-slider__content--title">
												<h4 class="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
												<span class="font__size-14">17 Hours ago</span>
											</div>
										</div>
										<p class="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
											ante, dapibus in, viverra</p>
									</div>
								</div>
								<div>
									<div class="brk-header-slider">
										<div class="brk-header-slider__img">
											<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/309x206_2.jpg" alt="alt">
										</div>
										<div class="brk-header-slider__content">
											<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt">
											<div class="brk-header-slider__content--title">
												<h4 class="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
												<span class="font__size-14">17 Hours ago</span>
											</div>
										</div>
										<p class="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
											ante, dapibus in, viverra</p>
									</div>
								</div>
								<div>
									<div class="brk-header-slider">
										<div class="brk-header-slider__img">
											<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/309x206_3.jpg" alt="alt">
										</div>
										<div class="brk-header-slider__content">
											<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt">
											<div class="brk-header-slider__content--title">
												<h4 class="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
												<span class="font__size-14">17 Hours ago</span>
											</div>
										</div>
										<p class="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
											ante, dapibus in, viverra</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				`;
		  } else {
			headerMenus = `	<div class="brk-header-mobile">
				<div class="brk-header-mobile__open brk-header-mobile__open_white">
					<span></span>
				</div>
				<div class="brk-header-mobile__logo">
					<a href="#">
						<img class="brk-header-mobile__logo-1 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://wrapupeventz.com/WRAP%20UP%20LOGO%20TEXT.png" alt="alt">
						<img class="brk-header-mobile__logo-2 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://wrapupeventz.com/WRAP%20UP%20LOGO%20TEXT.png" alt="alt">
					</a>
				</div>
			</div>
			<header class="brk-header brk-header_style-1 brk-header_color-white brk-header_skin-1 position-fixed d-lg-flex flex-column" style="display: none;" data-logo-src="img/logo-dark-2.png" data-bg-mobile="img/brk-bg-mobile-menu.jpg" data-brk-library="component__header">
				<div class="brk-header__top-bar order-lg-1 order-2 font__family-montserrat brk-header__top-bar_scroll" style="height: 46px;">
					<div class="brk-header__title font__family-montserrat font__weight-bold">Contact Us</div>
					<div class="container-fluid">
						<div class="row align-items-center">
							<div class="col-lg-6 align-self-lg-stretch text-left">
								<div class="brk-header__element brk-header__element_skin-2 brk-header__item">
									<a href="tel:88002003040" class="brk-header__element--wrap">
										<i class="fa fa-phone"></i>
										<span class="brk-header__element--label font__weight-semibold">+91 74186 99369</span>
									</a>
								</div>
								<div class="brk-header__element brk-header__element_skin-2 brk-header__item">
									<a href="#" class="brk-header__element--wrap">
										<i class="fa fa-envelope"></i>
										<span class="brk-header__element--label font__weight-medium">wrapupeventz@gmail.com</span>
									</a>
								</div>
							</div>
							<div class="col-lg-6 align-self-lg-stretch text-left text-lg-right">
								<div class="brk-mini-cart brk-header__item">
									<a href="cart.html" class="brk-mini-cart__open d-flex brk-mini-cart__open_skin-1">
										<i class="fa fa-shopping-basket" aria-hidden="true"></i>
										<span class="brk-mini-cart__label font__family-montserrat font__weight-medium text-uppercase letter-spacing-60 font__size-10 opacity-80">My cart</span>
										<span class="brk-mini-cart__title">Shopping Cart</span>
										<span class="brk-mini-cart__count brk-mini-cart__count_skin-1">4</span>
									</a>
									<div class="brk-mini-cart__menu">
										<div class="brk-mini-cart__header">
											<span class="font__family-montserrat font__weight-bold font__size-18">Your Cart</span>
										</div>
										<div class="brk-mini-cart__products">
											<div class="brk-mini-cart__product">
												<div class="brk-mini-cart__product--img">
													<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt">
												</div>
												<div class="brk-mini-cart__product--title-price">
													<a href="#">
														<h4 class="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
													</a>
													<span class="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
													<span class="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
												</div>
												<div class="brk-quantity">
													<span class="brk-quantity__arrows minus"></span>
													<input class="brk-quantity__value" name="quantity" type="text" value="2">
													<span class="brk-quantity__arrows plus"></span>
												</div>
												<a href="#" class="brk-mini-cart__product--remove remove"><i class="fa fa-times-circle" aria-hidden="true"></i></a>
											</div>
											<div class="brk-mini-cart__product">
												<div class="brk-mini-cart__product--img">
													<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt">
												</div>
												<div class="brk-mini-cart__product--title-price">
													<a href="#">
														<h4 class="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
													</a>
													<span class="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
													<span class="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
												</div>
												<div class="brk-quantity">
													<span class="brk-quantity__arrows minus"></span>
													<input class="brk-quantity__value" name="quantity" type="text" value="2">
													<span class="brk-quantity__arrows plus"></span>
												</div>
												<a href="#" class="brk-mini-cart__product--remove remove"><i class="fa fa-times-circle" aria-hidden="true"></i></a>
											</div>
											<div class="brk-mini-cart__product">
												<div class="brk-mini-cart__product--img">
													<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt">
												</div>
												<div class="brk-mini-cart__product--title-price">
													<a href="#">
														<h4 class="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
													</a>
													<span class="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
													<span class="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
												</div>
												<div class="brk-quantity">
													<span class="brk-quantity__arrows minus"></span>
													<input class="brk-quantity__value" name="quantity" type="text" value="2">
													<span class="brk-quantity__arrows plus"></span>
												</div>
												<a href="#" class="brk-mini-cart__product--remove remove"><i class="fa fa-times-circle" aria-hidden="true"></i></a>
											</div>
											<div class="brk-mini-cart__product">
												<div class="brk-mini-cart__product--img">
													<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt">
												</div>
												<div class="brk-mini-cart__product--title-price">
													<a href="#">
														<h4 class="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
													</a>
													<span class="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
													<span class="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
												</div>
												<div class="brk-quantity">
													<span class="brk-quantity__arrows minus"></span>
													<input class="brk-quantity__value" name="quantity" type="text" value="2">
													<span class="brk-quantity__arrows plus"></span>
												</div>
												<a href="#" class="brk-mini-cart__product--remove remove"><i class="fa fa-times-circle" aria-hidden="true"></i></a>
											</div>
										</div>
										<div class="brk-mini-cart__links">
											<div class="brk-mini-cart__links--wrap">
												<a class="brk-mini-cart__links--cart" href="cart.html"><i class="fa fa-shopping-basket"></i> Cart</a>
												<a class="brk-mini-cart__links--checkout" href="checkout.html">Proceed to checkout <i class="far fa-arrow-right"></i></a>
											</div>
										</div>
									</div>
								</div>
								<div class="brk-header__element brk-header__element_skin-2 brk-header__item">
									<a href="#" class="brk-header__element--wrap">
										<i class="fa fa-heart"></i>
										<span class="brk-header__element--label font__weight-medium">My wishlist</span>
										<span class="brk-header__compare brk-header__compare_dark brk-header__compare_skin-1">12</span>
									</a>
								</div>
								<div class="brk-lang brk-lang_interactive brk-header__item">
									<span class="brk-lang__selected">US <i class="fa fa-caret-down" aria-hidden="true"></i></span>
									<span class="brk-lang__open"><i class="fa fa-language"></i> Language <span class="brk-lang__active-lang text-white brk-bg-primary">US</span></span>
									<ul class="brk-lang__option">
										<li><a href="#">UA</a></li>
										<li><a href="#">US</a></li>
										<li><a href="#">PL</a></li>
										<li><a href="#">ES</a></li>
									</ul>
								</div>
								<div class="brk-header__element brk-header__element_skin-2 brk-header__item">
									<a href="login.html" class="brk-header__element--wrap">
										<i class="fa fa-user"></i>
										<span class="brk-header__element--label font__weight-medium">Login</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="brk-header__main-bar brk-header_border-top order-lg-2 order-1" style="height: 72px;">
					<div class="container-fluid">
						<div class="row align-items-center">
							<div class="col-lg-3 align-self-lg-center d-none d-lg-flex ml-10">
								<div class="brk-open-top-bar brk-header__item">
									<div class="brk-open-top-bar__circle"></div>
									<div class="brk-open-top-bar__circle"></div>
									<div class="brk-open-top-bar__circle"></div>
								</div>
								<a href="/" class="brk-header__logo brk-header__item @@modifier">
									<img class="brk-header__logo-1 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://wrapupeventz.com/WRAP%20UP%20LOGO%20TEXT.png" alt="alt">
									<img class="brk-header__logo-2 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/logo-dark-1.png" alt="alt">
								</a>
							</div>
							<div class="col-lg align-self-lg-stretch text-lg-center">
								<nav class="brk-nav brk-header__item">
									<ul class="brk-nav__menu">
										<li class="brk-nav__children brk-nav__full-width">
											<a href="/" data-brk-library="component__tabs">
												<span>Home</span>
											</a>
											<div class="brk-nav__mega-menu brk-nav-drop-down">
												<div class="bg-white">
													<div class="brk-tabs brk-tabs-hovers" data-index="0">
														<ul class="brk-tabs-nav font__family-open-sans">
															<li class="brk-tab font__weight-bold">
																<i class="fa fa-tasks"></i>
																Demos
															</li>
															<li class="brk-tab font__weight-bold">
																<i class="fa fa-trophy"></i>
																HomePages
															</li>
															<li class="brk-tab font__weight-bold">
																<i class="fa fa-life-ring"></i>
																Support & Info
															</li>
														</ul>
														<div class="brk-tabs-content">
															<div class="brk-tab-item">
																<div class="row no-gutters">
																	<div class="col-lg">
																		<div class="brk-nav__header font__family-montserrat">Check</div>
																		<div class="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
																			<ul class="brk-header-list font__family-montserrat">
																				<li>
																					<a href="/demo_agency_animation.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-paper-plane"></i>
																						</span>
																						Agency Animation
																					</a>
																				</li>
																				<li>
																					<a href="/demo_agency_fluid.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-tint"></i>
																						</span>
																						Agency Fluid
																					</a>
																				</li>
																				<li>
																					<a href="/demo_agency_modern.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-gift"></i>
																						</span>
																						Agency Modern
																					</a>
																				</li>
																				<li>
																					<a href="/demo_agency_urban.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-university"></i>
																						</span>
																						Agency Urban
																					</a>
																				</li>
																				<li>
																					<a href="/demo_art.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-newspaper"></i>
																						</span>
																						Art
																					</a>
																				</li>
																				<li>
																					<a href="/demo_saas.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-camera-retro"></i>
																						</span>
																						SAAS
																						<span class="brk-header-list__info bg-success font__family-montserrat">Ver. 1.5</span>
																					</a>
																				</li>
																				<li>
																					<a href="/demo_winter_trip_agency.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-snowflake"></i>
																						</span>
																						Winter Trip Agency
																						<span class="brk-header-list__info bg-success font__family-montserrat">Ver. 1.6</span>
																					</a>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div class="col-lg">
																		<div class="brk-nav__header font__family-montserrat">Out</div>
																		<div class="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
																			<ul class="brk-header-list font__family-montserrat">
																				<li>
																					<a href="/demo_construction.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-home"></i>
																						</span>
																						Construction
																					</a>
																				</li>
																				<li>
																					<a href="/demo_creative_agency.html">
																						<span class="brk-header-list__icon">
																							<i class="fab fa-angrycreative"></i>
																						</span>
																						Creative Agency
																					</a>
																				</li>
																				<li>
																					<a href="/demo_freelance_blog.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-user-friends"></i>
																						</span>
																						Freelance Blog
																					</a>
																				</li>
																				<li>
																					<a href="/demo_freelance_portfolio.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-portrait"></i>
																						</span>
																						Freelance Portfolio
																					</a>
																				</li>
																				<li>
																					<a href="/demo_logistic.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-truck"></i>
																						</span>
																						Logistic
																					</a>
																				</li>
																				<li>
																					<a href="/demo_website_agency.html">
																						<span class="brk-header-list__icon">
																							<i class="far fa-images"></i>
																						</span>
																						Website Agency
																					</a>
																				</li>
																				<li>
																					<a href="/demo_winter_trip_agency_cta.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-snowflake"></i>
																						</span>
																						Winter Event Anounce
																						<span class="brk-header-list__info bg-success font__family-montserrat">Ver. 1.7</span>
																					</a>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div class="col-lg">
																		<div class="brk-nav__header font__family-montserrat">Our</div>
																		<div class="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
																			<ul class="brk-header-list font__family-montserrat">
																				<li>
																					<a href="/demo_shop_clothes.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-tshirt"></i>
																						</span>
																						Shop Clothes
																						<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																					</a>
																				</li>
																				<li>
																					<a href="/demo_shop_drone.html">
																						<span class="brk-header-list__icon">
																							<i class="fab fa-phoenix-squadron"></i>
																						</span>
																						Shop Drone
																						<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																					</a>
																				</li>
																				<li>
																					<a href="/demo_shop_electronics.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-bolt"></i>
																						</span>
																						Shop Electronics
																						<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																					</a>
																				</li>
																				<li>
																					<a href="/demo_shop_modern.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-people-carry"></i>
																						</span>
																						Shop Modern
																						<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																					</a>
																				</li>
																				<li>
																					<a href="/demo_shop_trendy.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-dollar-sign"></i>
																						</span>
																						Shop Trendy
																						<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																					</a>
																				</li>
																				<li>
																					<a href="/demo_shop_video.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-video"></i>
																						</span>
																						Shop Video
																						<span class="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
																					</a>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div class="col-lg">
																		<div class="brk-nav__header font__family-montserrat">Demos</div>
																		<div class="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
																			<ul class="brk-header-list font__family-montserrat">
																				<li>
																					<a href="/demo_magazine.html">
																						<span class="brk-header-list__icon">
																							<i class="far fa-window-restore"></i>
																						</span>
																						Magazine
																					</a>
																				</li>
																				<li>
																					<a href="/demo_photography.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-camera-retro"></i>
																						</span>
																						Photography
																					</a>
																				</li>
																				<li>
																					<a href="/demo_product_landing.html">
																						<span class="brk-header-list__icon">
																							<i class="fab fa-product-hunt"></i>
																						</span>
																						Product Landing
																						<span class="brk-header-list__info bg-success font__family-montserrat">New</span>
																					</a>
																				</li>
																				<li>
																					<a href="/demo_product_sport.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-futbol"></i>
																						</span>
																						Sports Products
																						<span class="brk-header-list__info bg-success font__family-montserrat">New</span>
																					</a>
																				</li>
																				<li>
																					<a href="/demo_spa.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-dove"></i>
																						</span>
																						Spa & Beauty
																						<span class="brk-header-list__info bg-success font__family-montserrat">New</span>
																					</a>
																				</li>
																				<li>
																					<a href="/demo_minimalistic_portfolio.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-camera-retro"></i>
																						</span>
																						Portfolio Minimalistic
																						<span class="brk-header-list__info bg-success font__family-montserrat">Ver. 1.3</span>
																					</a>
																				</li>
																				<li>
																					<a href="/demo_travel_agency.html">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-plane"></i>
																						</span>
																						Travel Agency
																						<span class="brk-header-list__info bg-success font__family-montserrat">Ver. 1.1</span>
																					</a>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div class="brk-tab-item">
																<div class="row no-gutters">
																	<div class="col-lg d-none d-lg-block">
																		<div class="brk-nav__header font__family-montserrat">Preview</div>
																		<div class="brk-element-base brk-header_border-right text-center lazyload" data-bg="img/662x295.jpg" style="height: calc(100% - 76px)">
																			<div class="brk-element-base__before"></div>
																			<div class="brk-element-base__after lazyload" data-bg="img/shape-01.png"></div>
																			<div class="brk-element-base__content center-absolute">
																				<div class="mb-20">
																					<img src="img/logo.svg" alt="alt">
																				</div>
																				<div class="pb-10">
																					<a href="#" class="btn btn-inside-out btn-md border-radius-25 font__family-open-sans font__weight-bold btn-inside-out-invert" data-brk-library="component__button">
																						<span class="before">Purchase</span><span class="text">Click Me</span><span class="after">Purchase</span>
																					</a>
																				</div>
																			</div>
																		</div>
																	</div>
																	<div class="col-lg">
																		<div class="brk-nav__header font__family-montserrat">Our</div>
																		<div class="brk-header_border-right pt-lg-20 pb-lg-60 pb-20" style="height: calc(100% - 76px)">
																			<ul class="brk-header-list font__family-montserrat">
																				<li>
																					<a href="home-page-1.html">
																						<span class="brk-header-list__icon">
																							<i class="fa fa-male" aria-hidden="true"></i>
																						</span>
																						Home page 1
																					</a>
																				</li>
																				<li>
																					<a href="home-page-2.html">
																						<span class="brk-header-list__icon">
																							<i class="fa fa-cube" aria-hidden="true"></i>
																						</span>
																						Home page 2
																					</a>
																				</li>
																				<li>
																					<a href="home-page-3.html">
																						<span class="brk-header-list__icon">
																							<i class="fa fa-qrcode" aria-hidden="true"></i>
																						</span>
																						Home page 3
																					</a>
																				</li>
																				<li>
																					<a href="home-page-4.html">
																						<span class="brk-header-list__icon">
																							<i class="fa fa-sign-language" aria-hidden="true"></i>
																						</span>
																						Home page 4
																					</a>
																				</li>
																				<li>
																					<a href="home-page-5.html">
																						<span class="brk-header-list__icon">
																							<i class="fa fa-university" aria-hidden="true"></i>
																						</span>
																						Home page 5
																					</a>
																				</li>
																				<li>
																					<a href="home-page-6.html">
																						<span class="brk-header-list__icon">
																							<i class="fa fa-cube" aria-hidden="true"></i>
																						</span>
																						Home page 6
																					</a>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div class="col-lg">
																		<div class="brk-nav__header font__family-montserrat">Home</div>
																		<div class="brk-header_border-right pt-lg-20 pb-lg-60 pb-20" style="height: calc(100% - 76px)">
																			<ul class="brk-header-list font__family-montserrat">
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 7
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 8
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 9
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 10
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 11
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 12
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																			</ul>
																		</div>
																	</div>
																	<div class="col-lg">
																		<div class="brk-nav__header font__family-montserrat">Pages</div>
																		<div class="brk-header_border-right pt-lg-20 pb-lg-60 pb-20" style="height: calc(100% - 76px)">
																			<ul class="brk-header-list font__family-montserrat">
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 13
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 14
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 15
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 16
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 17
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																				<li>
																					<a href="/">
																						<span class="brk-header-list__icon">
																							<i class="fas fa-archive"></i>
																						</span>
																						Home page 18
																						<span class="brk-header-list__info bg-info font__family-montserrat">SOON</span>
																					</a>
																				</li>
																			</ul>
																		</div>
																	</div>
																</div>
															</div>
															<div class="brk-tab-item">
																<div class="row">
																	<div class="col-lg-5">
																		<div class="mt-30 mb-30 pr-15 pr-lg-0 pl-15 pl-lg-15">
																			<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/tiles-simple-1.jpg" alt="alt">
																		</div>
																	</div>
																	<div class="col-lg-7">
																		<div class="pr-15 pr-lg-0 pl-15 pl-lg-15">
																			<h2 class="font__family-montserrat text-uppercase font__size-24 mb-40 mt-30">How Glossier Hacked Social
																				Media</h2>
																			<p class="brk-dark-font-color text-left mb-20">On a Thursday afternoon in late spring, 32-year-old
																				Glossier founder and CEO Emily Weiss rides the elevator
																				to the penthouse level of her company's downtown Manhattan headquarters. She's a thoroughly millennial
																				girlboss in jeans, sneakers and a royal blue sweatshirt with weiss embroidered in small white script.
																				Her
																				hair is pulled back in a ponytail, and for the founder of a beauty products company, she wears notably
																				little makeup - just some mascara and possibly a swipe of Glossier Lip Gloss, a recent product release
																				touted online as having a "fuzzy doe-foot applicator."</p>
																			<p class="brk-dark-font-color text-left mb-20">A former teen model, Weiss is beautiful but not
																				intimidating, either by nature or by design (probably a little
																				of both). After all, her company’s popularity is directly related to her ability to cultivate a
																				feeling
																				of friendship with and among her customers. Just enough relatability is key.</p>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
										
									
									
										${
											services.map(val=>{
												return 	`<li class="brk-nav__children brk-nav__drop-down-effect">`+
												`<a href="#">`+
													`<span>`+val?.service_name+`</span>`+
												`</a>`+
												`<ul class="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">`+
												val.sub_services_masters.map(subServices=>{
												return	`<li class="dd-effect brk-nav__children brk-nav__drop-down-effect">`+
													// `<a href="#">`+subServices.sub_service_name+`<i class="fas fa-angle-right"></i></a>`+
													`<a href="#">`+subServices.sub_service_name+`</i></a>`+
												`</li>`
												}).join('')
												+
												
												`</ul>`+
											`</li>`
											})
											}
									</ul>
								</nav>
							</div>
							<div class="col-lg-3 align-self-lg-stretch text-lg-right">
								<div class="brk-header__title font__family-montserrat font__weight-bold">Info</div>
								<div class="brk-search brk-header__item">
									<div class="brk-search__open">
										<i class="fal fa-search" aria-hidden="true"></i>
										<div class="brk-search__title">Search website</div>
									</div>
									<div class="brk-search__block">
										<div class="brk-search__header">
											<span class="font__family-montserrat font__weight-bold font__size-18">Search</span>
										</div>
										<form class="brk-search__form" role="search" method="get" action="#">
											<input name="s" maxlength="50" type="search" value="" placeholder="Enter search text">
											<button type="submit"><i class="fas fa-search"></i></button>
										</form>
										<span class="brk-search__close font__family-montserrat font__weight-medium">Close <i class="fas fa-times"></i></span>
									</div>
								</div>
								<a href="#" class="btn btn-gradient btn- brk-header__item brk-header__btn btn-sm-1 border-radius-25 font__family-open-sans font__weight-bold brk-white-font-color" data-brk-library="component__button">
									<span>Buy now <span class="font__family-times-new-roman text-lowercase font__style-italic">for</span> 39$</span>
								</a>
								<div class="brk-info-menu-open brk-info-menu-open_skin-2 brk-header__item">
									<span class="brk-lines">
										<span class="brk-center-line"></span>
									</span>
									<div class="brk-info-menu-open__title">Side Menu</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="brk-info-menu">
					<div class="brk-info-menu__bar">
						<button class="brk-info-menu__close"></button>
						<h3 class="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">More info</h3>
						<div class="brk-categories mb-20" data-brk-library="component__widgets">
							<div class="brk-categories__list font__family-open-sans font__size-14 font__weight-normal">
								<a href="#" class="brk-categories__item">
									<span class="brk-categories__item-name">General</span>
									<span class="brk-categories__item-count">12</span>
								</a>
								<a href="#" class="brk-categories__item active">
									<span class="brk-categories__item-name">Mockups</span>
									<span class="brk-categories__item-count">14</span>
								</a>
								<a href="#" class="brk-categories__item">
									<span class="brk-categories__item-name">HTML & CSS</span>
									<span class="brk-categories__item-count">18</span>
								</a>
								<a href="#" class="brk-categories__item">
									<span class="brk-categories__item-name">Logo</span>
									<span class="brk-categories__item-count">21</span>
								</a>
								<a href="#" class="brk-categories__item">
									<span class="brk-categories__item-name">Web Design</span>
									<span class="brk-categories__item-count">6</span>
								</a>
							</div>
						</div>
						<h3 class="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">Our instagram</h3>
						<div class="default-slider dots-base-skin dots-base-color slick-loading mt-15" data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "dots": true, "autoplay": false, "autoplaySpeed": 4000}' data-brk-library="slider__slick">
							<div>
								<div class="brk-header-slider">
									<div class="brk-header-slider__img">
										<img src="img/309x206_1.jpg" alt="alt">
									</div>
									<div class="brk-header-slider__content">
										<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt">
										<div class="brk-header-slider__content--title">
											<h4 class="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
											<span class="font__size-14">17 Hours ago</span>
										</div>
									</div>
									<p class="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
										ante, dapibus in, viverra</p>
								</div>
							</div>
							<div>
								<div class="brk-header-slider">
									<div class="brk-header-slider__img">
										<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/309x206_2.jpg" alt="alt">
									</div>
									<div class="brk-header-slider__content">
										<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt">
										<div class="brk-header-slider__content--title">
											<h4 class="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
											<span class="font__size-14">17 Hours ago</span>
										</div>
									</div>
									<p class="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
										ante, dapibus in, viverra</p>
								</div>
							</div>
							<div>
								<div class="brk-header-slider">
									<div class="brk-header-slider__img">
										<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/309x206_3.jpg" alt="alt">
									</div>
									<div class="brk-header-slider__content">
										<img class="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt">
										<div class="brk-header-slider__content--title">
											<h4 class="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
											<span class="font__size-14">17 Hours ago</span>
										</div>
									</div>
									<p class="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
										ante, dapibus in, viverra</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>`;
		  }
	 
		resolve(headerMenus)
	 })
 })
};
