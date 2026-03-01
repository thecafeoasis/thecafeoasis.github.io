document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const menuGrid = document.getElementById('menuGrid');
  let currentCategory = 'Coffee';

  // Initialize with Coffee category
  displayMenuItems(currentCategory);

  // Add click event listeners to tab buttons
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Update current category and display items
      currentCategory = this.dataset.category;
      displayMenuItems(currentCategory);
    });
  });

  function displayMenuItems(category) {
    // Filter menu items by category
    const items = menuData.filter(item => item.category === category);
    
    // Clear the grid
    menuGrid.innerHTML = '';

    // Add notice for Breakfast Combo
    if (category === 'Breakfast') {
      const notice = document.createElement('div');
      notice.className = 'breakfast-notice';
      notice.innerHTML = '<p>⏰ Breakfast Combo is served between 7:00 AM - 10:30 AM</p>';
      menuGrid.appendChild(notice);
    }

    // Create menu item cards
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-item-card';
      card.innerHTML = `
        <div class="menu-item-image">☕</div>
        <div class="menu-item-content">
          <h3>${item.name}</h3>
          <p class="menu-item-price">$${item.price.toFixed(2)}</p>
        </div>
      `;
      menuGrid.appendChild(card);
    });
  }
});
