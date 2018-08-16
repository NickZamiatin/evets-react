const API_URL = 'https://events-serv.herokuapp.com/api/v1/events';


export function getAllEvents (){
  return fetch(API_URL)
  .then(res => res.json())
}
export function getEvent(id){
  return fetch(`${API_URL}/${id}`)
  .then(res => res.json())
}

export function createEvent(event){
  return fetch(`${API_URL}`,{
    method:'POST',
    body: JSON.stringify(event),
    headers: {
     "content-type": 'application/json'
    }
  })
  .then(res => res.json())
}
