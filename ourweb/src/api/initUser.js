import { createRoutine } from '@/api/api.js'
import { createCycle } from '@/api/api.js'
import { createExercise } from '@/api/api.js'
import { addExerciseToCycle } from '@/api/api.js'

export const createInitialRoutines = async() => {
    const r1 = {
        name: "Routine 1",
        detail: "Full body routine with 6 exercises in 2 cycles",
        isPublic: false,
        difficulty: "rookie",
        category: null,
        metadata: null
      };
      
      const r2 = {
        name: "Routine 2",
        detail: "Full body routine with 6 exercises in 2 cycles",
        isPublic: false,
        difficulty: "rookie",
        category: null,
        metadata: null
      };
      
      const r3 = {
        name: "Routine 3",
        detail: "Full body routine with 6 exercises in 2 cycles",
        isPublic: false,
        difficulty: "rookie",
        category: null,
        metadata: null
      };
      
      const r1_cycle1 = {
        name: "Warmup",
        detail: "3 exercises to start the routine",
        type: "warmup",
        order: 1,
        repetitions: 3,
        metadata: null,
      };
      
      const r1_cycle2 = {
        name: "Break",
        detail: "30 second break",
        type: "warmup",
        order: 2,
        repetitions: 1,
        metadata: null,
      };
      
      const r1_cycle3 = {
        name: "Warmup",
        detail: "3 exercises to start the routine",
        type: "warmup",
        order: 3,
        repetitions: 3,
        metadata: null,
      };
      
      const r2_cycle1 = {
        name: "Warmup",
        detail: "3 exercises to start the routine",
        type: "warmup",
        order: 1,
        repetitions: 3,
        metadata: null,
      };
      
      const r2_cycle2 = {
        name: "Break",
        detail: "30 second break",
        type: "warmup",
        order: 2,
        repetitions: 1,
        metadata: null,
      };
      
      const r2_cycle3 = {
        name: "Warmup",
        detail: "3 exercises to start the routine",
        type: "warmup",
        order: 3,
        repetitions: 3,
        metadata: null,
      };
      
      const r3_cycle1 = {
        name: "Warmup",
        detail: "3 exercises to start the routine",
        type: "warmup",
        order: 1,
        repetitions: 3,
        metadata: null,
      };
      
      const r3_cycle2 = {
        name: "Break",
        detail: "30 second break",
        type: "warmup",
        order: 2,
        repetitions: 1,
        metadata: null,
      };
      
      const r3_cycle3 = {
        name: "Warmup",
        detail: "3 exercises to start the routine",
        type: "warmup",
        order: 3,
        repetitions: 3,
        metadata: null,
      };
      
      const exercise_1 = {
        name: "Jumping Jacks",
        detail: "Jump while opening and closing your arms and legs in a star shape",
        type: "exercise",
        metadata: null,
        order: 1,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_2 = {
        name: "Leg Pull-In Knee-up",
        detail: "Exercise to pull in your legs and knees",
        type: "exercise",
        metadata: null,
        order: 2,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_3 = {
        name: "Spiderman Push-up",
        detail: "Push-up with a twist, similar to Spiderman climbing",
        type: "exercise",
        metadata: null,
        order: 3,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_4 = {
        name: "Plank Jacks",
        detail: "Plank position with jumping jacks motion",
        type: "exercise",
        metadata: null,
        order: 1,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_5 = {
        name: "Rope Jumping",
        detail: "Jumping rope for cardio and coordination",
        type: "exercise",
        metadata: null,
        order: 2,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_6 = {
        name: "Weighted / Russian Twist",
        detail: "Twisting exercise with weights for core strength",
        type: "exercise",
        metadata: null,
        order: 3,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_7 = {
        name: "Mountain Climbers",
        detail: "Mountain climber exercise to improve cardiovascular fitness and core strength.",
        type: "exercise",
        metadata: null,
        order: 1,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_8 = {
        name: "Bicycle Crunches",
        detail: "Bicycle crunches to work your abs and obliques for a strong core.",
        type: "exercise",
        metadata: null,
        order: 2,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_9 = {
        name: "Burpees",
        detail: "Burpee exercise for a full-body workout and improved endurance.",
        type: "exercise",
        metadata: null,
        order: 3,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_10 = {
        name: "Plie Squats",
        detail: "Squats targeting inner thighs and leg muscles.",
        type: "exercise",
        metadata: null,
        order: 1,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_11 = {
        name: "Jump Rope",
        detail: "Jump rope exercise for cardio and improved coordination and agility.",
        type: "exercise",
        metadata: null,
        order: 2,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_12 = {
        name: "Russian Twists",
        detail: "Russian twist exercise to target obliques and improve core strength.",
        type: "exercise",
        metadata: null,
        order: 3,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_13 = {
        name: "High Knees",
        detail: "High knees exercise to boost cardiovascular fitness and leg strength.",
        type: "exercise",
        metadata: null,
        order: 1,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_14 = {
        name: "Box Jumps",
        detail: "Box jumps for explosive power and leg strength.",
        type: "exercise",
        metadata: null,
        order: 2,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_15 = {
        name: "Push-Ups",
        detail: "Push-up exercise for upper body and core strength.",
        type: "exercise",
        metadata: null,
        order: 3,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_16 = {
        name: "Lunges",
        detail: "Lunges to target leg muscles and improve lower body strength.",
        type: "exercise",
        metadata: null,
        order: 1,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_17 = {
        name: "Russian Twists (Alternate)",
        detail: "Alternate version of Russian twists for obliques and core strength.",
        type: "exercise",
        metadata: null,
        order: 2,
        duration: 30,
        repetitions: 15
      };
      
      const exercise_18 = {
        name: "Weighted Side Bends",
        detail: "Weighted side bends to target obliques and improve core strength.",
        type: "exercise",
        metadata: null,
        order: 3,
        duration: 30,
        repetitions: 15
      };
      

      await setupRoutine(r1, r1_cycle1, r1_cycle2, r1_cycle3, exercise_1, exercise_2, exercise_3, exercise_4, exercise_5, exercise_6)
      await setupRoutine(r2, r2_cycle1, r2_cycle2, r2_cycle3, exercise_7, exercise_8, exercise_9, exercise_10, exercise_11, exercise_12)
      await setupRoutine(r3, r3_cycle1, r3_cycle2, r3_cycle3, exercise_13, exercise_14, exercise_15, exercise_16, exercise_17, exercise_18)
  }

 const setupRoutine = async(routine, cycle1, cycle2, cycle3, exercise1, exercise2, exercise3, exercise4, exercise5, exercise6) => {
    const response_r = await (routine.name, routine.detail, true, "rookie")

    await setupCycle(response_r.id, cycle1, exercise1, exercise2, exercise3)
    await setupCycle(response_r.id, cycle2, null, null, null)
    await setupCycle(response_r.id, cycle3, exercise4, exercise5, exercise6)

  }

  const setupCycle = async(routine_id, cycle, exercise1, exercise2, exercise3) => {
    const response_c = await createCycle(routine_id, cycle.name, cycle.detail, cycle.type, cycle.order, cycle.repetitions)
    if(exercise1 != null) {
        await setupExercise(response_c.id, exercise1)
    }
    if(exercise2 != null) {
        await setupExercise(response_c.id, exercise2)
    }
    if(exercise3 != null) {
        await setupExercise(response_c.id, exercise3)
    }

  }

  const setupExercise = async(cycle_id, exercise) => {
    const response_ex = await createExercise(exercise.name, exercise.detail)
    await addExerciseToCycle(cycle_id, response_ex.id, exercise.order, exercise.duration, exercise.repetitions)
  }
