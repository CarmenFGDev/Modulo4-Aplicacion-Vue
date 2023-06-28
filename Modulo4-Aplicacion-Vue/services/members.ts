export const memberService = {
  async get(filter: string) {
    const members = 
    await fetch((`https://api.github.com/orgs/${filter}/members`)).then((m) =>
      m.json()
    )
    return members as ResponseApiMember[]
  },
 async getMemberById(id:string){
    const member = await $fetch<ResponseApiMemberById>(`https://api.github.com/user/${id}`)
    return member as ResponseApiMemberById
  }
}