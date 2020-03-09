function req (methodType, url, functionName, dataArray) {
    let xhr = new XMLHttpRequest();
    xhr.open(methodType, url);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded'); 
    xhr.send(requestData(dataArray));   
  
    xhr.addEventListener('readystatechange',  () => {
      if (xhr.readyState ==4 && xhr.status == 200) {
        functionName(xhr.response);         
      }    
    });  
  }
  
  function requestData (dateArr) {
    let out = '';
    for (let key in dateArr) {
      out += `${key}=${dateArr[key]}&`;
    }    
    return out;
  }