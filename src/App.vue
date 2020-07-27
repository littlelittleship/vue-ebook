<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    let fontSize = window.innerWidth / 100
    console.log(fontSize, 'fontSize')
    fontSize = fontSize > 50 ? 50 : fontSize
    html.style.fontSize = fontSize + 'px'
  })

  // const setFontSize = () => {
  //   const html = document.querySelector('html')
  //   let fontSize = window.innerWidth / 100
  //   console.log(fontSize, 'fontSize')
  //   fontSize = fontSize > 50 ? 50 : fontSize
  //   html.style.fontSize = fontSize + 'px'
  // }

  // window.onresize = setFontSize
  // setFontSize()
</script>

<style lang="scss" scoped>
  #app {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
