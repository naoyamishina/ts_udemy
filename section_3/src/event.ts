const target = document.getElementById('username')

target.addEventListener('input', (e) => {
  console.log(e)
  if (e.target instanceof HTMLInputElement) {
    console.log(e.target.value)
  }
  
  console.log((e.target as HTMLInputElement).value)
})
