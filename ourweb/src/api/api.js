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

    const text = await response.text();

    // Check if the response is empty
    if (!text) {
      return null; // or handle it based on your requirements
    }

    return JSON.parse(text);
  } catch (error) {
    throw error;
  }
};

export const fetchSingle = async (type, id) => {
  const url = `${apiUrl}/${type}/${id}`;
  const options = { ...requestOptions };

  return await apiFetch(url, options);
};

export const fetchMultiple = async (type, size) => {
  const url = `${apiUrl}/${type}?size=${size}`;
  const options = { ...requestOptions };
  
  return await apiFetch(url, options);
};

export const deleteSingle = async(type, id) => {
  const url = `${apiUrl}/${type}/${id}`;
  const options = { 
    ...requestOptions,
    method: 'DELETE'
  };

  return await apiFetch(url, options)
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


  return await apiFetch(url, options);
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

  return await apiFetch(url, options);
};


export const createRoutine = async (name, detail, type, order, repetitions) => {
  const url = `${apiUrl}/routines`;
  const body = JSON.stringify({
    name: name,
    detail: detail,
    type: type,
    order: order,
    repetitions: repetitions,
    metadata: null
  });

  const options = {
    ...requestOptions,
    method: 'POST',
    body,
  };


  return await apiFetch(url, options);
};

export const editRoutine = async (id, name, detail, type, order, repetitions) => {
  const url = `${apiUrl}/routines/${id}`;
  const body = JSON.stringify({
    name: name,
    detail: detail,
    type: type,
    order: order,
    repetitions: repetitions,
    metadata: null
  });

  const options = {
    ...requestOptions,
    method: 'PUT',
    body,
  };

  return await apiFetch(url, options);
};

export const createCycle = async (routine_id, name, detail) => {
  const url = `${apiUrl}/routines/${routine_id}/cycles`;
  const body = JSON.stringify({
    name: name,
    detail: detail,
  });

  const options = {
    ...requestOptions,
    method: 'POST',
    body,
  };


  return await apiFetch(url, options);
};

export const editCycle = async (routine_id, id, name, detail, type, order, repetitions) => {
  const url = `${apiUrl}/routines/${routine_id}/cycles/${id}`;
  const body = JSON.stringify({
    name: name,
    detail: detail,
    type: type,
    order: order,
    repetitions: repetitions,
    metadata: null
  });

  const options = {
    ...requestOptions,
    method: 'PUT',
    body,
  };

  return await apiFetch(url, options);
};

export const createCategory = async (name, detail) => {
  const url = `${apiUrl}/routines`;
  const body = JSON.stringify({
    name: name,
    detail: detail,
  });

  const options = {
    ...requestOptions,
    method: 'POST',
    body,
  };


  return await apiFetch(url, options);
};

export const editCategory = async (id, name, detail) => {
  const url = `${apiUrl}/routines/${id}`;
  const body = JSON.stringify({
    name: name,
    detail: detail,
  });

  const options = {
    ...requestOptions,
    method: 'PUT',
    body,
  };

  return await apiFetch(url, options);
};

export const verifyUser = async (email, verification_code) => {
  try {
    let myBody = {
      'email': email,
      "code": verification_code,
    };
    var init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myBody)
    };
    const response = await fetch(`${apiUrl}/users/verify_email`, init);

    console.log(response);
    if(response.ok){      
      return await response.json();
    }else{
      throw new Error('Server response not OK :(')
    }
  } catch (error) {
    throw error;
  }
};