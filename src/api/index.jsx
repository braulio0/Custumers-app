export const apiGet = (url) => () => fetch(url).then(data => data.json());

export const apiPut = (url, id ,obj ) => () =>
  fetch(`${url}/${id}`,{
    method: 'PUT',
    body: JSON.stringify(obj),
    headers: new Headers({ 'Content-Type': 'application/json'  })
  }).then(v=>v.json())
