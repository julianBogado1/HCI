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
  try {
    const response = await fetch(url, options);
    //no retorna response.json() porque la response es vacia
    //solo interesa el response.ok
    return response;
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
