<script setup>

</script>
<template>
   <div class="container-fluid">
      <header class="mt-2 d-flex justify-content-center align-items-center flex-column w-100 position-relative">
         <div class="contents d-flex justify-content-center align-items-center flex-column w-100 h-100">
            <!-- the main title comes from the backend -->
            <h1 class="header-title text-white text-bold">Lorem Ipsun</h1>
            <!-- the main subtitle comes from the backend -->
            <p class="header-subtitle text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, quas?</p>
            <!-- the main button comes from the backend -->
            <a class=" header-btn btn btn-primary">Darslarni boshlash</a>
         </div>
      </header>
   </div>
</template>

<style scoped>
header {
   height: 48rem;
   background-image: url('../assets/header-bg-img.png');
   background-size: contain;
   background-repeat: no-repeat;
}

.contents {
   background-color: rgba(0, 0, 0, 0.6);
}

.btn-header {
   text-align: center;
}



@media (max-width:1450px) {
   header {
      height: 46rem;
   }
}

@media (max-width:1380px) {
   header {
      height: 43.5rem;
   }
}

@media (max-width:1300px) {
   header {
      height: 41rem;
   }
}

@media (max-width:1180px) {
   header {
      height: 37rem;
   }
}

@media (max-width:1080px) {
   header {
      height: 33.9rem;
   }
}

@media (max-width:988px) {
   header {
      height: 31rem;
   }
}

@media (max-width:900px) {
   header {
      height: 28.1rem;
   }
}

@media (max-width:840px) {
   header {
      height: 26.2rem;
   }

   .header-title {
      font-size: 30px;
   }

   .header-subtitle {
      font-size: 13px;
   }

   .header-btn {
      width: 150px !important;
      font-size: 10px;
   }
}


@media (max-width:760px) {
   header {
      height: 24rem;
   }

   .informations {
      height: 10rem !important;
   }
}

@media (max-width:710px) {
   header {
      height: 22rem;
   }

   .titles>h1 {
      font-size: 28px !important;
   }

   .informations {
      height: 10rem !important;
   }
}

@media (max-width:625px) {
   header {
      height: 19.3rem;
   }
}

@media (max-width:560px) {
   header {
      height: 17.2rem;
   }
}



.titles>h1 {
   font-size: 36px;
}

.titles>p {
   font-size: 16px;
}
</style>
