<template>
    <div class="pink-screen">
      <img src="your-image-url.jpg" alt="Image" class="left-image" />
      <div class="centered-text">
        <p>Your Centered Text</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PinkScreen",
  };
  </script>
  
  <style scoped>
  .pink-screen {
    background-color: pink;
    height: 90px;
    display: flex;
    align-items: center;
  }
  
  .centered-text {
    flex-grow: 1;
    text-align: center;
  }
  
  .left-image {
    width: 50px;
    height: 50px; /* Adjust the height to your image's dimensions */
    margin-right: 10px; /* Add some spacing between the image and text if needed */
  }
  </style>