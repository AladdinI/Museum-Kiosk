/*jshint esversion: 8 */
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
let generateJpgName = () => {
  let uuid = UUID.generate();
  return `sample-jpg-${uuid}.jpg`;
};
////////////////////////////////////
let displayTextResult = (text) => {
  let results = document.getElementById('results');
  let html = `
    <code>${text}</code>
  `;
  results.innerHTML = html;
};
////////////////////////////////////
let displayJsonResult = (json) => {
  let results = document.getElementById('results');
  let jsonStr = JSON.stringify(json);
  let html = `
    <code>${jsonStr}</code>
  `;
  results.innerHTML = html;
};
////////////////////////////////////
let displayErrorResult = (error) => {
  let results = document.getElementById('results');
  let html = `
    <code>Error: ${error}</code>
  `;
  results.innerHTML = html;
};
////////////////////////////////////
let Request_Image_Form = document.getElementById('Request_Image_Form');
let postUrl = 'https://waps.cfa.harvard.edu/microobservatory/own_kiosk/api/v1/requests/telescope_dev.php';
////////////////////////////////////
createFormData = () => {
    let kiosk_id = document.getElementById('kiosk_id');
    let email = document.getElementById('email');
    let observation_name = document.getElementById('observation_name');
    let observation_id = document.getElementById('observation_id');
    let datetime_when_user_made_request_at_kiosk = document.getElementById('datetime_when_user_made_request_at_kiosk');
    let credential = document.getElementById('credential');
    let data = 
        {
            kiosk_id: kiosk_id.value,
            email: email.value,
            credential: credential.value,
            observation_name: observation_name.value,
            observation_id: observation_id.value,
            datetime_when_user_made_request_at_kiosk: datetime_when_user_made_request_at_kiosk.value,
            credential: credential.value
        };
  return data;
};
////////////////////////////////////
////////////////////////////////////
Request_Image_Form.onsubmit = async (e) => {
  e.preventDefault();
  let formData = createFormData();

  fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(json => displayJsonResult(json))
    .catch(error => {
      displayErrorResult(error);
    });
};
////////////////////////////////////
////////////////////////////////////
