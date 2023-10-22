<template>
    <div class="exercise-card">
      <div class="exercise-header">
        <h2>{{ name }}</h2>
        <p>{{ detail }}</p>
      </div>
      <div class="exercise-details">
        <span class="duration">Duration: {{ duration }} seconds</span>
        <span class="repetitions">Repetitions: {{ repetitions }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      detail: String,
      duration: Number,
      repetitions: Number,
    },
  };
  </script>
  
  <style>
  
.exercise-card {
    margin: 10px;
    padding: 16px;
    max-height: 200px; /* Set a maximum height for the exercise cards */
    overflow: hidden;
  }
  
  .exercise-header {
    margin-bottom: 10px;
    max-height: 60px; /* Limit the number of lines for the exercise header */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .exercise-details {
    margin-top: 10px;
    max-height: 40px; /* Limit the number of lines for exercise details */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .duration {
    color: #007bff;
    margin-right: 10px;
  }
  
  .repetitions {
    color: #dc3545;
  }
  </style>