window.onload = function () {
  
  const submitButton = document.querySelector('#addressButton')
  
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const addressInput = document.getElementById('address').value;
    console.log(addressInput);
    const obs = new OBSWebSocket();
    obs.connect({
      address: `localhost:${addressInput}`
    })
   .then(() => {
     console.log(`Success! We're connected & authenticated.`);
   })
  })
}




// obs.connect({
//   address: 'localhost:4444',
// })
//   .then(() => {
//     console.log(`Success! We're connected & authenticated.`);
//   })



// handleClick = (e) => {
// e
// console.log('bang')
// }

// const addressButton = document.querySelectorAll('button')
// addressButton.addEventListener('click', handleClick())

// const slideValue = document.getElementById('myRange')
// console.log(slideValue)



// document.getElementById('address_button').addEventListener('click', e => {
//   console.log('newAddress')
  // obs.connect({
  //   address: address
  // });
// });

// obs.on('ConnectionOpened', () => {
//   obs.send('GetSceneList').then(data => {
//     const sceneListDiv = document.getElementById('scene_list');
//     data.scenes.forEach(scene => {
//       const sceneElement = document.createElement('button');
//       sceneElement.textContent = scene.name;
//       sceneElement.onclick = function() {
//         obs.send('SetCurrentScene', {
//           'scene-name': scene.name
//         });
//       };
//       sceneListDiv.appendChild(sceneElement);
//     });
//   })
// });

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;
// slider.oninput = function () {
//   output.innerHTML = this.value;
// }