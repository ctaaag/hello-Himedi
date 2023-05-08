<template>
  <div class="home" style="text-align: center">
    <h1 class="main_title">병택의 HIMEDI 온보딩 저장소</h1>
    <img
      class="main_image"
      alt="Main Image"
      src="../assets/images/onboarding-image.png"
    />
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/datetime">DateTime</router-link>
      <router-link to="/i18n">I18n</router-link>
      <router-link to="/l10n">L10n</router-link>
      <router-link to="/rtl">RTL</router-link>
      <router-link to="/axios">Axios & Fetch</router-link>
      <router-link to="/router">Router & LifeCycle</router-link>
      <router-link to="/composition">Composition</router-link>
      <!-- <router-link to="{name:'todoapp'}">Todo(composition)</router-link> -->
      <router-link to="/todoapp">Todo(composition)</router-link>
      <router-link to="/sassapple">SassApple</router-link>
      <router-link to="/webfont">WebFont</router-link>
    </nav>
    <a class="blog_link" href="https://ctaaaglog.vercel.app/" target="_blank"
      >구체적인 이야기가 궁금하다면 Blog로 오세요!</a
    >
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style>
nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 15px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.main_image {
  width: 60%;
}

.main_title {
  margin: 20px;
}

.blog_link {
  text-decoration: none;
  color: black;
}
</style>
