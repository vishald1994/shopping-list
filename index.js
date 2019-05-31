const STORE = {
  items: [
    {
      title: 'monkeys',
      completed: true,
    },
    {
      title: 'bananas',
      completed: false,
    },
  ]
}

function displayItems() {
  const html = STORE.items.map((item, index) =>
    `
  <li>
        <span class="
        shopping-item 
        ${item.completed ? 'shopping-item__checked' : ''}">${item.title}</span>
        <div class="shopping-item-controls">
          <button data-id="${index}" class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
   </li>
  `
  ).join('')
  jQuery('.shopping-list').html(html)
}

//start the app
$(() => {

  $('#js-shopping-list-form').on('submit', ev => {
    ev.preventDefault();
    const inputText = $('#shopping-list-entry').val()
    if (!inputText) {
      return alert('Please enter an item title!')
    } else {
      const item = {
        title: inputText,
        completed: false
      }
      STORE.items.unshift(item)
      displayItems()
    }


  })

  $('body').on('click', '.shopping-item-toggle', (ev => {
    ev.preventDefault();
    const clickedIndex = $(event.target).parents('.shopping-item-toggle').attr('data-id')
    console.log(`toggle clicked on ${clickedIndex}`)
    STORE.items[clickedIndex].completed = !STORE.items[clickedIndex].completed
    displayItems()

  }))

  displayItems()
})