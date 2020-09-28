
window.onload = function () {

  const obs = new OBSWebSocket();
  const submitButton = document.querySelector('#addressButton');
  const slider = document.querySelector('#myRange');

  async function getSources() {
    const data = await obs.send('GetSourcesList')
    console.log(data)
  }

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const addressInput = document.getElementById('address').value;
    console.log(addressInput);
    obs.connect({
      address: `localhost:${addressInput}`
    })
      .then(() => {
        console.log(`Success! We're connected & authenticated.`);
        getSources()
      })
  })
  slider.addEventListener('input', (e) => {
    const newVolume = slider.value
    const mul = slider.value * .01
    const volumeIndicator = document.querySelector('#demo')
    volumeIndicator.innerHTML = newVolume
    obs.send('SetVolume', {
      source: "Mic/Aux",
      volume: mul
    })
  })
}
