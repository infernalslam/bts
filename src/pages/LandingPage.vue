<template>
  <section class="hero background-image bg-color-black is-fullheight">
    <div class="hero-head">
    <header class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="http://bts.ibighit.com/images/logo_bts.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item has-text-grey-lighter is-active">
              Home
            </a>
            <a class="navbar-item has-text-grey-lighter">
              Examples
            </a>
            <a class="navbar-item has-text-grey-lighter">
              Documentation
            </a>
            <a class="navbar-item has-text-grey-lighter">
              <span class="icon"><i class="fab fa-github"></i></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>

    <div class="hero-body ">
      <div class="container">
        <h1 class="title has-text-grey-lighter">
          BTS CSS FRAMEWORK
        </h1>
        <h2 class="subtitle has-text-grey-lighter">
          Lightweight UI components for Vue.js based on Bulma
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.background-image {
  background: url(http://bts.ibighit.com/images/bg_r.png) right -125px no-repeat;
  top: 0;
  right: 55px;
}

.bg-color-black {
  background-color: #000;
}
</style>
