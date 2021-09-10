<template>
<link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Sue+Ellen+Francisco&display=swap" rel="stylesheet">
  
<div class="grid grid-cols-4 grid-rows-3 gap-16 p-16">
  
    <div 
  v-for="note in notes" 
  :key="note.content" 
  class="flex flex-col flex-nowrap gap-4 bg-blue-100 rounded-lg lg:h-96 px-5 pt-5 shadow-lg sm:h-40 hover:bg-pink-200">

<h2 class="text-center lg:text-3xl  text-gray-500 overflow-hidden break-words sm:text-base">{{note.title}}</h2>

<p class="break-words overflow-auto flex-none lg:h-60 lg:text-4xl text-gray-500 sm:h-16 sm:text-lg sm:break-word sm:overflow-auto">  {{note.content[0]}} </p>

<div class="flex flex-row justify-between">
<button v-on:click="noteDelete(note._id)" type="button" title="Delete note"><svg xmlns="http://www.w3.org/2000/svg" class="lg:h-8 lg:w-8 sm:h-3 sm:w-3 text-pink-600 hover:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg></button>

<router-link :to="/note/+note._id" class=""><button type="button" title="Update note"><svg xmlns="http://www.w3.org/2000/svg" class="lg:h-8 lg:w-8 sm:h-3 sm:w-3 text-pink-600 hover:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg></button></router-link>
</div>
   </div>


</div>
<div class="relative">
<footer class="absolute inset-x-0 bottom-0 bg-blue-200 bg-opacity-25 flex flex-row justify-between items-center pr-20 pl-20 text-gray-500">
  <p class="text-xl">  © Magda Hennebo</p>  
  <img class="w-40" src="@/assets/logoNotes.png" alt="logo Notes"/> 
  <a class="text-pink-600 hover:text-green-300" mailto="magda.hennebo@epitech.eu">Contact us</a>
</footer>

</div>
</template>

<script>
// @ is an alias to /src
/* import createNote from '@/components/createNote.vue' */
/* import DetailsNote from '@/views/DetailsNote.vue'  */
import axios from 'axios'

export default {
    mounted (){
        axios
        .get('http://5.135.119.239:3090/notes/')
        .then(response => (this.notes = response.data.notes))
        this.getAllNotes();
    },
  data(){
    return{
      
      notes:[]
    }
  },
methods: {
   addNote(){
      var noteData= {title:this.title, content:this.content}
      axios.post('http://5.135.119.239:3090/notes', noteData)
      .then(function (response){
        console.log(response)
          axios
        .get('http://5.135.119.239:3090/notes/').then(response => (this.notes = response.data.notes))
      })
      .catch(function(error){
        console.log(error);
      })
    },
  noteDelete(id){
    axios.delete('http://5.135.119.239:3090/notes/'+ id).then((response) =>{console.log(response)
    axios
        .get('http://5.135.119.239:3090/notes/').then(response => (this.notes = response.data.notes))
   })
    .catch(function(error){
        console.log(error);
      })
  },
getAllNotes(){
  axios.get("http://5.135.119.239:3090/notes").then((response)=>{this.notes=response.data.notes; localStorage.setItem("notes",JSON.stringify(this.notes));});
},
sendPost(){
  const postData = { title: this.title, content: this.content};
  axios.post("http://5.135.119.239:3090/notes", postData).then((response)=>{ console.log(response.content); this.getAllNotes();});
}
}
}
</script>

<style>
p {
   font-family: 'Sue Ellen Francisco';
}
h2{
   font-family: 'Montserrat';
}
body{
  background-color: #edfaede0;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%2392ac94' fill-opacity='0.4'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
