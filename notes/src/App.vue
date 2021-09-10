<template>
<div class="grid grid-cols-2 grid-rows-1 pt-6 pr-20 pl-8 ">
<a href="/"><img class="w-80" src="@/assets/logoNotes.png" alt="logo Notes"/></a>
<createNote class="place-self-end"/>
</div>

<router-view/>


</template>

<script>
import createNote from '@/components/createNote.vue'
export default {

     name : "App",
    components: {createNote},
  }
 

</script>

<style>
body{
  background-color: #f6f6f6;
  margin: 20px auto;
}

</style>
