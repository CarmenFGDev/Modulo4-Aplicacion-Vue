<template>
    <div class="member-list-title">
           <h1>{{title}}</h1>
                   
     </div>
</template>
   
<script setup lang="ts">
defineProps<{ title: string }>()

</script>
<style lang="scss" scoped>
    .member-list-title{
        display:flex;
        justify-content: left;
        padding:1rem;
        color:#0e4985;
        font-size:1.3rem;
        font-weight: bolder;
        background-color: rgb(244, 236, 252);
        margin-bottom:1rem;
    }
</style>
