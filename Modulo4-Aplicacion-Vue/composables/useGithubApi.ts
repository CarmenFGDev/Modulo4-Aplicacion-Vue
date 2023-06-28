import { memberService } from '@/services/members'

export default async function useGithubApi(member: string) {
  const list = await memberService.get(member)
  return { list }
}