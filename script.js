const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

/**
 * Toggles the class on the container so that
 * we choose the correct view.
 */

 function onViewChange(evt) {
    container.classList.toggle('view-change');

    if (evt.currentTarget.classList.contains('list-item'))
      itemName.textContent = evt.currentTarget.textContent;
  }

  var container = document.querySelector('.container');
  var itemName = document.querySelector('.item-name');
  var backButton = document.querySelector('.back-button');
  var listItems = document.querySelectorAll('.list li');
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', onViewChange, false);
  }

  backButton.addEventListener('click', onViewChange);