import axios from 'axios';

const BASE_ROUTE = 'http://localhost:9090/';

export async function getAllAttendees() {
  const response = await axios.get(`${BASE_ROUTE}attendees`);
  return response.data;
}

export async function editAttendeeStatus(id, attending) {
  const response = await axios.put(`${BASE_ROUTE}attendees/${id}`, {
    attending,
  });
  return response.data;
}

export async function searchForAttendee(name) {
  let response;
  if (name) {
    response = await axios.get(`${BASE_ROUTE}attendees/search?name=${name}`);
  } else {
    return getAllAttendees();
  }

  return response.data;
}
