export default async function Test() {
    const response = await fetch('https://api.github.com/users/DavidIoner', {
        cache: 'no-cache',
    })

  const user = await response.json()

  return(
    <div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}