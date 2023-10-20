const apiUrl = 'http://localhost:8080/api';
const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY5Nzc0NDk5MTIzNCwiZXhwIjoxNjk3NzQ3NTgzMjM0fQ.GttfYIt3kq9aLEWPzlXB5JP_04MDQSvTLyVhmLzZoLk';

export const createExercise = async (name, description) => {
  try {
    const response = await fetch(`${apiUrl}/exercises`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        detail: description,
        type: "exercise",
        metadata: null
      })
    });

    // Check if the response status code indicates success (2xx range)
    if (response.ok) {
      // If the response is a success, parse it as JSON
      return response.json();
    } else {
      // If the response is not successful, handle the error accordingly
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (error) {
    // Handle network errors or other exceptions
    throw error;
  }
};

export const editExercise = async (name, description) => {
    
    try {
        const response = await fetch(`${apiUrl}/exercises` + id, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json',
            },
            body: {
            "name": name,
            "detail": description,
            "type": "exercise",
            "metadata": null
            }
        });
        return response.json();
    } catch (error) {
      throw error;
    }
}

export const fetchExercises = async () => {
  try {
    const response = await fetch(`${apiUrl}/exercises`);

    return response.json();
  } catch (error) {
    throw error;
  }
};

export const fetchExercise = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/exercises` + id);
  
      return response.json();
    } catch (error) {
      throw error;
    }
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
