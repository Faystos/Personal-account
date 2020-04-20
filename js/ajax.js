function requestHandler(url, dataRec) {

    function requestData (dateArr) {
    let out = '';
    for (let key in dateArr) {
      out += `${key}=${dateArr[key]}&`;
    }    
    return out;
  }

  return fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    body: requestData(dataRec)
  }).then(res =>{    
    return res.json();
  });
}