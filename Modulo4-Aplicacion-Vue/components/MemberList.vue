<template>
  <section class="wrapper">
    <Header :title="titlePage" />
    <div class="search">
      <label for="organization">Organization:</label>
      <input type="text" name="organization" v-model="textFilter" />
      <button type="button" @click="searchMembers">Search members</button>
    </div>

    <ul class="member-list">
      <li v-for="member in membersList" :key="member.id">
        <NuxtLink :to="`/member/${member.id}`">
          <div class="card-item">
            <img :src="member.avatar_url" />
            <div class="member-name">{{ member.login }}</div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { useMemberStore } from '~/composables/useMemberStore';
import { storeToRefs } from 'pinia';

const initialSearch = "LEMONCODE";
const titlePage = "Github Api";
const searchMembers = async () => {
  const { list } = await useGithubApi(textFilter.value.toUpperCase());
  membersList.value = list;
  filteredListStore.setMembers(list);
  filteredListStore.setTextFilter(textFilter.value);
}
const membersList: Ref<ResponseApiMember[]> = ref([]);
const filteredListStore = useMemberStore();
const {textFilter } = storeToRefs(filteredListStore);
if (textFilter.value === '') {
  textFilter.value = initialSearch;
}
searchMembers();
</script>
<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: #0e4985;

  & button {
    background-color: #0e4985;
    color: white;
    padding: 2px;
  }

  & input {
    color: #0e4985;
    padding: 5px;
  }
}

.member-list {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  gap: 30px;

  &>li {
    display: flex;
    list-style: none;
  }
}

.card-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #fcfafa;
  border-radius: 0.5em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &>img {
    border-radius: 50%;
    min-width: 120px;
  }

  & .member-name {
    padding-top: 1rem;
    color: blueviolet;
    font-weight: bolder;
    font-size: 1.3rem;
  }
}</style>
