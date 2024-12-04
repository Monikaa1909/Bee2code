<template>
  <div class="flex justify-center items-center">
    <div class="relative w-32 h-32 spin-animation">
      <!-- Front image -->
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        alt="Front"
        class="absolute inset-0 w-full h-full object-contain front"
      />
      <!-- Back image -->
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
        alt="Back"
        class="absolute inset-0 w-full h-full object-contain back"
      />
    </div>
  </div>
</template>

<style>

.spin-animation {
  perspective: 1000px; /* Dodanie głębi dla efektu 3D */
  animation: spin 2s linear infinite; /* Animacja ciągłego obrotu */
}

/* Obrazki 3D */
.front, .back {
  backface-visibility: hidden; /* Ukrywanie tyłu obrazu */
  transform-style: preserve-3d; /* Utrzymanie efektu 3D */
  position: absolute;
}

/* Front ustawiony domyślnie */
.front {
  transform: rotateY(0deg);
}

/* Back widoczny przy 180 stopniach */
.back {
  transform: rotateY(180deg);
}

/* Animacja obrotu */
@keyframes spin {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}

</style>