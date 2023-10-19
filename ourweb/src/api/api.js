const apiUrl = 'http://localhost:8080';

export const createExercise = async (name, description, steps) => {
  try {
    const response = await fetch(`${apiUrl}/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        name: name,
        detail: description,
        steps: steps,
        type: "exercise",
        metadata: null
      }
    });
    
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const editExercise = async (name, description, steps) => {
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
