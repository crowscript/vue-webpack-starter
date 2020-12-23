<template>
  <header class="main-header">
    <div class="navbar flex-justify">
      <a href="#" class="logo">
        Logo
      </a>
      <nav class="main-nav">
        <ul>
          <li>
            <a href="/">
              Home
            </a>
          </li>
          <li>
            <a href="/about">
              About Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="hero center">
      <h1 class="hero-title">{{ mainHeading }}</h1>
      <h2 class="hero-description">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</h2>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader',
    data () {
      return {
        mainHeading: 'Headline',
      }
    }
  }
</script>

<style>
</style>

