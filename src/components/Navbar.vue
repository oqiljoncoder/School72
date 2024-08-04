<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
         <div class="navbar-logo">
            <router-link class="navbar-brand fw-bold text-success" to="/">School 72</router-link>
         </div>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 d-flex column-gap-5">
               <li class="nav-item">
                  <router-link class="nav-link" to="/main-page">Bosh sahifa</router-link>
               </li>
               <li class="nav-item">
                  <router-link class="nav-link" to="/articles">Maqolalar</router-link>
               </li>
               <li class="nav-item">
                  <router-link class="nav-link" to="/articles">Bizning faxrimiz </router-link>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false">
                     Biz haqimizda
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <li><a class="dropdown-item" href="#">Rahbariyat</a></li>
                     <li><a class="dropdown-item" href="#">O'qituvchilar</a></li>
                     <li><a class="dropdown-item" href="#">Maktab haqida</a></li>
                  </ul>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#courses">Darsliklar</a>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<script setup>
</script>