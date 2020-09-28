
const obs = new OBSWebSocket();
document.getElementById('address_button').addEventListener('click', e => {
  const address = document.getElementById('address').value;

  obs.connect({
    address: address
  });
});
obs.on('ConnectionOpened', () => {
  obs.send('GetSceneList').then(data => {
    const sceneListDiv = document.getElementById('scene_list');
    data.scenes.forEach(scene => {
      const sceneElement = document.createElement('button');
      sceneElement.textContent = scene.name;
      sceneElement.onclick = function() {
        obs.send('SetCurrentScene', {
          'scene-name': scene.name
        });
      };
      sceneListDiv.appendChild(sceneElement);
    });
  })
});

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
}