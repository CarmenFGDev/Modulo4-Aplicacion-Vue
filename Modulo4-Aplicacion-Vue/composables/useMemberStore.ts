import { defineStore } from 'pinia'

export const useMemberStore = defineStore('members', {
  state: () => ({
    members: {} as  ResponseApiMember[],
    textFilter: '',
  }),
 getters: {
    getMembers:(state)=>{
        return state.members;
    },
    getFilter:(state) =>{
      return state.textFilter
    }
 },
  actions: {
    setMembers(members: ResponseApiMember[]) {
      this.members = members;
      },
    setTextFilter(text :string){
      this.textFilter = text;
    }
  }
    
  });
