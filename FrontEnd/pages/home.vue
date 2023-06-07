<template>
  <div style="width: 100%; max-width: 800px; margin: 20px auto">
    <h1>First Demo - Bootstrap Vue</h1>
    <b-carousel
      :interval="0" controls indicators img-width="1024"
      img-height="480" background="#ababab"
    >
      <b-carousel-slide
        img-src="https://res.cloudinary.com/dpkreativ/image/upload/b_auto,c_mpad,h_480,w_1024/v1646483551/wallpapers/car.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://res.cloudinary.com/dpkreativ/image/upload/b_auto,c_mpad,h_480,w_1024/v1646695756/wallpapers/laptop.jpg"
      ></b-carousel-slide>
      <b-carousel-slide
        img-src="https://res.cloudinary.com/dpkreativ/image/upload/b_auto,c_mpad,h_480,w_1024/v1646696065/wallpapers/conversation.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'FirstDemo',
}
</script>