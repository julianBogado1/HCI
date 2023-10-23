const apiUrl = 'http://localhost:8080/api';
const authToken = localStorage.AUTHTOKEN;

const requestOptions = {
  headers: {
    Authorization: `Bearer ${authToken}`,
    'Content-Type': 'application/json',
  },
};

const requestOptionsNoHeader ={
  headers: {
    'Content-Type': 'application/json',
  },
}

const apiFetch = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Response is not JSON');
    }
    console.log(response);
    return response.json();
  } catch (error) {
    throw error;
  }
};

const apiFetchEmptyBody = async (url, options) => {
  const response = await fetch(url, options);
  return response;
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

export const fetchFilteredRoutines = async (size, filter) => {
  const url = `${apiUrl}/routines?size=${size}&difficulty=${filter}`
  const options = { ...requestOptions };

  return await apiFetch(url, options);
}

export const fetchCurrentUserFilteredRoutines = async (size, filter) => {
  const url = `${apiUrl}/users/current/routines?size=${size}&difficulty=${filter}`
  const options = { ...requestOptions };

  return await apiFetch(url, options);
}

export const deleteSingle = async(type, id) => {
  const url = `${apiUrl}/${type}/${id}`;
  const options = { 
    ...requestOptions,
    method: 'DELETE'
  };

  return await apiFetchEmptyBody(url, options)
};

export const addExerciseToCycle = async(cycle_id, exercise_id, order, duration, repetitions) => {
  const url = `${apiUrl}/cycles/${cycle_id}/exercises/${exercise_id}`;
  const body = JSON.stringify({
    order: order,
    duration: duration,
    repetitions: repetitions,
  });

  const options = {
    ...requestOptions,
    method: 'POST',
    body,
  };

  return await apiFetch(url, options);
}

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

export const editExercise = async (id, name, detail) => {
  const url = `${apiUrl}/exercises/${id}`;
  const body = JSON.stringify({
    name,
    detail: detail,
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

export const createRoutine = async (name, detail, isPublic, difficulty, duration) => {
  console.log(isPublic)
  const url = `${apiUrl}/routines`;
  const body = JSON.stringify({
    name: name,
    detail: detail,
    difficulty: difficulty,
    isPublic: isPublic,
    metadata: {
      duration: duration
    }
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

export const createCycle = async (routine_id, name, detail, type, order, repetitions) => {
  const url = `${apiUrl}/routines/${routine_id}/cycles`;
  const body = JSON.stringify({
    name: name,
    detail: detail,
    type: type,
    order: order,
    repetitions: repetitions,
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
  const url = `${apiUrl}/users/verify_email`;
  const body = JSON.stringify({
    'email': email,
    "code": verification_code,
  })
  const options = { 
    ...requestOptionsNoHeader,
    method: 'POST',
    body,
  };
  return await apiFetchEmptyBody(url, options);
};

export const loginUser = async (username, password) => {
  const url = `${apiUrl}/users/login`;
  const body = JSON.stringify({
    "username" : username,
    "password" : password,
  });
  const options = {
    ...requestOptionsNoHeader,
    method: 'POST',
    body,
  };
  return apiFetchEmptyBody(url, options);
};

export const addUser = async (username, password, email)=>{
  let user = {
    "username": username,   //UNIQUE
    "password": password,
    "firstName": "John",
    "lastName": "Doe",
    "gender": "male",
    "birthdate": 284007600000,
    "email": email,   //UNIQUE
    "phone": "98295822",
    "avatarUrl": "",
    "metadata": null
  }

  var init = {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json; charset=utf-8'
    },
    body: JSON.stringify(user)
  };
  try{
    let response = await fetch('http://localhost:8080/api/users', init);
    if(!response.ok){
      console.log(`HTTP error! status: ${response.status}`);
      return response;
    }
    else{
      return response;
    }
  }catch(error){
    console.log('Unexpected error: \n' + error.message);  //no mostramos los errores internos al usuario
  }
};

export const editUser = async (name, lastname, avatarUrl)=>{
  const url = `${apiUrl}/users/current`;
  const body = JSON.stringify({
    "firstName": name,
    "lastName": lastname,
    "avatarUrl": avatarUrl
  });

  const options = {
    ...requestOptions,
    method: 'PUT',
    body,
  };
  return await apiFetchEmptyBody(url, options);
}

export const getUser = async ()=>{
  const url = `${apiUrl}/users/current`;
  const options = {
    ...requestOptions,
    method: 'GET',
  };
  return await apiFetch(url, options);
}

export const logOut = async ()=>{
  const url = `${apiUrl}/users/logout`;
  const options = {
    ...requestOptions,
    method: 'POST',
  };
  return await apiFetchEmptyBody(url, options);
}
