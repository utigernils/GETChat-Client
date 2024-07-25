titleInput = document.getElementById('title-input');
contentInput = document.getElementById('content-input');
senderInput = document.getElementById('sender-input');
sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', async function() {
  console.log('send button clicked');
  var title = titleInput.value;
  var content = contentInput.value;
  var sender = senderInput.value;
    console.log(title);

  const MSGurl = "http://192.168.1.1:5000/create_message?title=" + title +"&content=" + content + "&sender=" + sender;

  try {
    const response = await fetch(MSGurl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }

});