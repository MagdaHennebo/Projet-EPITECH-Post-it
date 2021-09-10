<template>

<link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Sue+Ellen+Francisco&display=swap" rel="stylesheet">

<div class="grid grid-cols-3 grid-rows-2 gap-4 ">
<div class="flex flex-col col-end-3 h-96 shadow-lg">
<input v-model="title" type="text" placeholder="type title here" class="bg-blue-200 h-24 rounded-t-lg text-center text-3xl text-gray-500">
<textarea v-model="content" class="bg-blue-200 rounded-b-lg h-96 text-4xl px-8 pb-8 text-gray-500" placeholder="type note here"></textarea>


  </div>
  <button @click="addNote()" class="rounded-full py-3 px-6 bg-pink-600 col-end-3 row-start-2 h-16 shadow-lg text-3xl text-white font-bold hover:bg-green-300" >Add note</button>
  </div>
  <div class="relative">
<footer class="absolute inset-x-0 bg-blue-200 bg-opacity-25 flex flex-row justify-between items-center pr-20 pl-20 text-gray-500">
  <p class="text-xl">  © Magda Hennebo</p>  
  <img class="w-40" src="@/assets/logoNotes.png" alt="logo Notes"/> 
  <a class="text-pink-600 hover:text-green-300" mailto="magda.hennebo@epitech.eu">Contact us</a>
</footer>

</div>
</template>

<script>
import axios from 'axios'

export default {

methods: {
    addNote(){
      var noteData= {title:this.title, content:this.content}
      axios.post('http://5.135.119.239:3090/notes', noteData)
      .then(function (response){console.log(response)})
        this.$router.push({ path: '/'})
    },
  }
}
</script>

<style>
textarea{
   font-family: 'Sue Ellen Francisco';
}
button, input {
   font-family: 'Montserrat';
}
</style> 
