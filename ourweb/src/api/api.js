const apiUrl = 'https://localhost:8080';

export const createExercise = async (routineData, user) => {
  try {
    const response = await fetch(`${apiUrl}/` + user + `/exercises`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(routineData),
    });

    if (!response.ok) {
      throw new Error('Failed to create exercises');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const editExercise = async (routineData, user) => {
    try {
        const response = await fetch(`${apiUrl}/` + user + `/exercises`)
    }
}

export const fetchExercise = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/` + user + `/exercises`);

    if (!response.ok) {
      throw new Error('Failed to fetch exercises');
    }

    return response.json();
  } catch (error) {
    throw error;
  }
};
