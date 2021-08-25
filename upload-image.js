/*jshint esversion: 8 */

let ctx = null;

function initializeCanvas(c) {
  ctx = c.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(10, 10, 50, 50);
  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 30, 50, 50);
}

let canvas = document.getElementById('canvas');
initializeCanvas(canvas);

let jpgDataUrl = canvas.toDataURL("image/jpeg", 0.9);

let formNoCors = document.getElementById('form-no-cors');
let formCors = document.getElementById('form-cors');

formNoCors.onsubmit = async (e) => {
  e.preventDefault();

  let email = document.getElementById('email');
  let formData = new FormData();
  formData.append("email", email.value);
  formData.append("data", jpgDataUrl);

  let postUrl = 'https://waps.cfa.harvard.edu/microobservatory/own_kiosk/uploads/upload_3.php';

  fetch(postUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    })
    .then(response => response.text())
    .then((data) => {
      return data ? JSON.parse(data) : {};
    })
    .then(result => {
      displayAlert(result);
    })
    .catch(error => {
      alert('Error:', error);
    });
};

formCors.onsubmit = async (e) => {
  e.preventDefault();

  let email = document.getElementById('email');
  let formData = new FormData();
  formData.append("email", email.value);
  formData.append("data", jpgDataUrl);

  let postUrl = 'https://waps.cfa.harvard.edu/microobservatory/own_kiosk/uploads/upload_3.php';

  fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: formData
    })
    .then(response => response.json())
    .then(result => displayAlert(result))
    .catch(error => {
      alert('Error:', error);
    });
};

function displayAlert(result) {
  alert('message =' + result.message + ' \nkiosk_id = ' + result.kiosk_id + ' \nemail = ' + result.email + ' \nobservation = ' + result.observation + ' \ndatetime_when_user_made_request_at_kiosk = ' + result
    .datetime_when_user_made_request_at_kiosk + ' \ncredential = ' + result.credential);
}
