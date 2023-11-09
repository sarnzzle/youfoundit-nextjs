import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  console.log(router.query)
  return <>
    <p>User: {router.query.slug[0]}</p>
    <p>Item: {router.query.slug[2]}</p>
  </>
}