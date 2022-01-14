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
let Report_Form = document.getElementById('Report_Form');
let postUrl = 'https://waps.cfa.harvard.edu/microobservatory/own_kiosk/api/v1/reports/reports.php';
////////////////////////////////////
createFormData = () => {
    let kiosk_id = document.getElementById('kiosk_id');
    let credential = document.getElementById('credential');
    let date = document.getElementById('date');
    let touch_begin = document.getElementById('touch_begin');
    let data = 
        {
            kiosk_id: kiosk_id.value,
            credential: credential.value,
            date: date.value,
            touch_begin: touch_begin.value
        };
    console.log(data)
  return data;
};
////////////////////////////////////
////////////////////////////////////
Report_Form.onsubmit = async (e) => {
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
