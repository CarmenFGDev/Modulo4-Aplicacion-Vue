import { defineStore } from 'pinia'

export const useMemberStore = defineStore('members', {
  state: () => ({
    members: {} as  ResponseApiMember[]
  }),
 getters: {
    getMembers:(state)=>{
        return state.members;
    }
 },
  actions: {
    setMembers(members: ResponseApiMember[]) {
      this.members = members;
      }
    },
  });
