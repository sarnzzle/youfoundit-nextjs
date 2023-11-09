import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p> Item: {router.query.slug}</p>
}