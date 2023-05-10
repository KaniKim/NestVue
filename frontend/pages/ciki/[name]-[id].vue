<template>
  <div>
    <NavBar />
    <div
      class="mx-auto mt-4 max-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
    >
      <div class="mt-10">
        <img
          src="https://www.sonymusic.co.jp/adm_image/common/artist_image/71009000/71009001/jacket_image/212005.jpg"
          class="w-full"
          alt=""
        />
        <h1 class="mt-10 text-4xl">Endless Summer</h1>
        <div
          class="text-slate-500 flex textlg mt-3 border-b pb-5 justify-between"
        >
          <div class="flex">
            <p class="mr-2">Endless Summer</p>
            <p class="mr-2">|</p>
            <p class="mr-2">Very good Song</p>
          </div>
        </div>
        <div class="mr-10 mt-5 border-b pb-5">
          <div class="flex text-lg mt-2">
            <p class="rounded text-lime-800 mr-3">V</p>
            <p>Nothing Special</p>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <p class="mb-10">Lorem 30</p>
      </div>
      <div class="mt-10">
        <div class="flex w-[600px] justify-between">
          <input type="text" class="border p-1" placeholder="Name" />
          <input type="text" class="border p-1" placeholder="Email" />
          <input type="text" class="border p-1" placeholder="Phone" />
        </div>
        <div class="flex mt-4 w-[600px]">
          <textarea class="border p-1 w-full" placeholder="Message"></textarea>
        </div>
        <button class="bg-blue-400 text-white px-10 py-3 rounde mt-4">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
