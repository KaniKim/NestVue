<template>
  <div
    class="relative h-screen w-100 bg-no-repeat bg-cover bg-bottom bg-[url('/src/ciki.png')]"
  >
    <div class="z-10 absolute w-full h-full flex justify-center items-center">
      <div class="text-center w-1/2">
        <h1 class="text-8xl font-serif mb-10 text-blue-50">Find your ciki</h1>
        <SearchBar />
      </div>
    </div>

    <div class="z-1 absolute w-full h-full bg-black opacity-50"></div>
  </div>
</template>
<script setup lang="ts">
import SearchBar from "~/components/Ciki/SearchBar.vue";
</script>
