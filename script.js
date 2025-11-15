var xhr = new XMLHttpRequest();
xhr.open("POST", "https://discordapp.com/api/webhooks/1439301765223809054/wnIEKKbQ8ncRvNdmKa1XaOMtaSrRZ1_VfKBUwpp_DqeYRSTGpECePunmRlO0qzt8IWKC", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
  "content": "New visitor from IP " + window.navigator.userAgent + " and User Agent: " + window.location.href
}));
