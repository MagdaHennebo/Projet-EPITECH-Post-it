<template>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Sue+Ellen+Francisco&display=swap" rel="stylesheet">

    <div class="grid grid-cols-3 grid-rows-2 gap-4 ">
    <div 
  class="flex flex-col col-end-3 h-96 shadow-lg">

<input v-model="note.title" class="bg-blue-200 h-24 rounded-t-lg text-center text-3xl text-gray-500">

<textarea v-model="note.content" type="text" class="bg-blue-200 rounded-b-lg h-96 text-4xl px-8 pb-8 text-gray-500"></textarea>
</div>
<button v-on:click="updateNote(note._id)" type="button" class="rounded-full py-3 px-6 bg-pink-600 col-end-3 row-start-2 h-16 shadow-lg text-3xl text-white font-bold hover:bg-green-300">update</button>

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
    name : "ModifNote",
   
    data(){
        return {
            note:{
                title: '',
                content: []
            }
        }
    },
    mounted(){
        axios
        .get('http://5.135.119.239:3090/notes/' + this.$route.params._id)
        .then(response => {
            console.log(this.note = response.data.note)
        })
    },
    methods: {
 updateNote(id){
    axios.put('http://5.135.119.239:3090/notes/' + id, {
        title: this.note.title,
        content: this.note.content
    })
    .then(response => {console.log(response)
    axios.get('http://5.135.119.239:3090/notes/'+ this.$route.params._id)
    .then(response => console.log(this.note = response.data.note))
    })
     this.$router.push({ path: '/'})
    }
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