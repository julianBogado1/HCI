const apiUrl = 'https://localhost:8080';
import { v4 as uuidv4 } from 'uuid';


export const createExercise = async (name, description, steps, difficulty) => {
  try {
    id = uuidv4()
    const response = await fetch(`${apiUrl}/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        name: name,
        detail: description,
        steps: steps,
        difficulty: difficulty,
        type: "exercise",
        metadata: null
      }
    });
    
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const editExercise = async (name, description, steps, difficulty) => {
    try {
        const response = await fetch(`${apiUrl}/exercises/` + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
            name: name,
            detail: description,
            steps: steps,
            difficulty: difficulty,
            type: "exercise",
            metadata: null
            }
        });
        return response.json();
    } catch (error) {
      throw error;
    }
}

export const fetchExercises = async () => {
  try {
    const response = await fetch(`${apiUrl}/exercises/`);

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchExercise = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/exercises/` + id);
  
      return response.json();
    } catch (error) {
      throw error;
    }
  };
