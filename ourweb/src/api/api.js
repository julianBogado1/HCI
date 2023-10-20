const apiUrl = 'http://localhost:8080/api';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY5Nzc0NDk5MTIzNCwiZXhwIjoxNjk3NzQ3NTgzMjM0fQ.GttfYIt3kq9aLEWPzlXB5JP_04MDQSvTLyVhmLzZoLk';

const requestOptions = {
  headers: {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  },
};

const apiFetch = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const createExercise = async (name, description) => {
  const url = `${apiUrl}/exercises`;
  const body = JSON.stringify({
    name,
    detail: description,
    type: 'exercise',
    metadata: null,
  });

  const options = {
    ...requestOptions,
    method: 'POST',
    body,
  };

  console.log(options)
  return apiFetch(url, options);
};

export const editExercise = async (id, name, description) => {
  const url = `${apiUrl}/exercises/${id}`;
  const body = JSON.stringify({
    name,
    detail: description,
    type: 'exercise',
    metadata: null,
  });

  const options = {
    ...requestOptions,
    method: 'PUT',
    body,
  };

  return apiFetch(url, options);
};

export const fetchExercises = async () => {
  const url = `${apiUrl}/exercises`;
  const options = { ...requestOptions };

  return apiFetch(url, options);
};

export const fetchExercise = async (id) => {
  const url = `${apiUrl}/exercises/${id}`;
  const options = { ...requestOptions };

  return apiFetch(url, options);
};