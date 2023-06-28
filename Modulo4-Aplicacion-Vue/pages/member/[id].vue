
<template>
    <div class="container">
        <NuxtLink to="/" class="back">⬅️ Go back</NuxtLink>
        <article>
           <img :src="member?.avatar_url" />
           <div class="member-login">{{ member?.login }}</div>
           <div>{{ member?.name }}</div>
           <div>{{ member?.bio }}</div>
           <div class="member-url">{{ member?.url }}</div>
        </article>
    </div>
</template>

<script setup lang="ts">

import { memberService } from '~/services/members';
const route = useRoute()
const id = route.params.id as string
const { data: member } = useAsyncData<ResponseApiMemberById>(() =>
    memberService.getMemberById(id));

</script>
<style scoped lang="scss">
.container {
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    & article{
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #fcfafa;
    border-radius: 0.5em;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    & > img {
        border-radius: 50%;
        min-width: 300px;
    }
    & > .member-login{
        padding-top: 1rem;
        color: blueviolet;
        font-weight: bolder;
        font-size: 1.3rem;
    }
      & > .member-url{
        color:grey;
      }      
    }
    
}
.back {
    display: block;
    margin: 1rem 0;
}
</style>
