
document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  const inventoryTableBody = document.getElementById('inventoryTableBody');
  const addItemBtn = document.getElementById('addItemBtn');
  const itemModal = document.getElementById('itemModal');
  const closeModal = document.querySelector('.close-modal');
  const cancelItemBtn = document.getElementById('cancelItemBtn');
  const itemForm = document.getElementById('itemForm');
  const modalTitle = document.getElementById('modalTitle');
  const itemIdInput = document.getElementById('itemId');
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  
  const totalItemsElement = document.getElementById('totalItems');
  const lowStockItemsElement = document.getElementById('lowStockItems');
  const totalCategoriesElement = document.getElementById('totalCategories');
  const totalInventoryValueElement = document.getElementById('totalInventoryValue');
  
  const prevPageBtn = document.getElementById('prevPage');
  const nextPageBtn = document.getElementById('nextPage');
  const pageInfoElement = document.getElementById('pageInfo');
  
  // App State
  let inventory = [];
  let filteredInventory = [];
  let currentPage = 1;
  const itemsPerPage = 5;
  let nextItemId = 1;
  
  // Navigation
  function setActiveSection(id) {
    sections.forEach(section => {
      section.classList.remove('section-active');
    });
    
    const activeSection = document.getElementById(id);
    if (activeSection) {
      activeSection.classList.add('section-active');
    }
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${id}`) {
        link.classList.add('active');
      }
    });
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('href').substring(1);
      setActiveSection(sectionId);
      
      // Close mobile menu if open
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
      }
    });
  });
  
  mobileMenuBtn.addEventListener('click', function() {
    mainNav.classList.toggle('active');
  });
  
  // Inventory Management
  function loadDummyData() {
    // Add some dummy data for demonstration
    inventory = [
      { id: nextItemId++, name: 'Laptop', category: 'Electronics', quantity: 15, price: 999.99, description: 'High-performance laptop for professionals' },
      { id: nextItemId++, name: 'T-Shirt', category: 'Clothing', quantity: 50, price: 19.99, description: 'Cotton t-shirt, various colors available' },
      { id: nextItemId++, name: 'Coffee Maker', category: 'Electronics', quantity: 8, price: 89.99, description: 'Automatic coffee maker with timer' },
      { id: nextItemId++, name: 'Office Chair', category: 'Office Supplies', quantity: 12, price: 149.99, description: 'Ergonomic office chair with lumbar support' },
      { id: nextItemId++, name: 'Energy Bars', category: 'Food', quantity: 100, price: 2.49, description: 'Nutritious energy bars for quick snacks' },
      { id: nextItemId++, name: 'Wireless Mouse', category: 'Electronics', quantity: 25, price: 29.99, description: 'Ergonomic wireless mouse with long battery life' },
      { id: nextItemId++, name: 'Notebook', category: 'Office Supplies', quantity: 75, price: 4.99, description: 'Spiral-bound notebook, 100 pages' }
    ];
    
    filteredInventory = [...inventory];
    refreshInventoryTable();
    updateDashboard();
  }
  
  function refreshInventoryTable() {
    // Calculate pagination
    const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const currentItems = filteredInventory.slice(startIdx, endIdx);
    
    // Update pagination controls
    pageInfoElement.textContent = `Page ${currentPage} of ${totalPages || 1}`;
    prevPageBtn.disabled = currentPage <= 1;
    nextPageBtn.disabled = currentPage >= totalPages;
    
    // Clear table
    inventoryTableBody.innerHTML = '';
    
    if (currentItems.length === 0) {
      const emptyRow = document.createElement('tr');
      emptyRow.innerHTML = `<td colspan="6" class="text-center">No items found</td>`;
      inventoryTableBody.appendChild(emptyRow);
      return;
    }
    
    // Populate table
    currentItems.forEach(item => {
      const row = document.createElement('tr');
      
      // Highlight low stock items
      if (item.quantity < 10) {
        row.classList.add('low-stock');
      }
      
      row.innerHTML = `
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.quantity}</td>
        <td>$${item.price.toFixed(2)}</td>
        <td class="table-actions">
          <button class="action-btn edit" data-id="${item.id}" title="Edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
          </button>
          <button class="action-btn delete" data-id="${item.id}" title="Delete">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          </button>
        </td>
      `;
      
      inventoryTableBody.appendChild(row);
      
      // Add event listeners for edit and delete buttons
      const editBtn = row.querySelector('.edit');
      const deleteBtn = row.querySelector('.delete');
      
      editBtn.addEventListener('click', () => openEditItemModal(item.id));
      deleteBtn.addEventListener('click', () => deleteItem(item.id));
    });
  }
  
  function updateDashboard() {
    // Update dashboard metrics
    totalItemsElement.textContent = inventory.length;
    
    // Calculate low stock items (less than 10)
    const lowStockCount = inventory.filter(item => item.quantity < 10).length;
    lowStockItemsElement.textContent = lowStockCount;
    
    // Get unique categories
    const categories = new Set(inventory.map(item => item.category));
    totalCategoriesElement.textContent = categories.size;
    
    // Calculate total inventory value
    const totalValue = inventory.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalInventoryValueElement.textContent = totalValue.toFixed(2);
  }
  
  function openAddItemModal() {
    modalTitle.textContent = 'Add New Item';
    itemIdInput.value = '';
    itemForm.reset();
    itemModal.style.display = 'block';
  }
  
  function openEditItemModal(itemId) {
    const item = inventory.find(item => item.id === itemId);
    if (!item) return;
    
    modalTitle.textContent = 'Edit Item';
    itemIdInput.value = item.id;
    document.getElementById('itemName').value = item.name;
    document.getElementById('itemCategory').value = item.category;
    document.getElementById('itemQuantity').value = item.quantity;
    document.getElementById('itemPrice').value = item.price;
    document.getElementById('itemDescription').value = item.description || '';
    
    itemModal.style.display = 'block';
  }
  
  function closeItemModal() {
    itemModal.style.display = 'none';
  }
  
  function saveItem(e) {
    e.preventDefault();
    
    const itemId = itemIdInput.value;
    const name = document.getElementById('itemName').value;
    const category = document.getElementById('itemCategory').value;
    const quantity = parseInt(document.getElementById('itemQuantity').value);
    const price = parseFloat(document.getElementById('itemPrice').value);
    const description = document.getElementById('itemDescription').value;
    
    if (itemId) {
      // Update existing item
      const index = inventory.findIndex(item => item.id === parseInt(itemId));
      if (index !== -1) {
        inventory[index] = {
          ...inventory[index],
          name,
          category,
          quantity,
          price,
          description
        };
        showToast('Item updated successfully', 'success');
      }
    } else {
      // Add new item
      const newItem = {
        id: nextItemId++,
        name,
        category,
        quantity,
        price,
        description
      };
      inventory.push(newItem);
      showToast('Item added successfully', 'success');
    }
    
    // Update filtered inventory if search is active
    if (searchInput.value.trim()) {
      filterInventory(searchInput.value.trim());
    } else {
      filteredInventory = [...inventory];
    }
    
    closeItemModal();
    refreshInventoryTable();
    updateDashboard();
    
    // Save to server (In a real application, would send to Java backend)
    // For demo, we're sending to a non-existent endpoint
    sendToServer(itemId ? 'update' : 'create', itemId ? parseInt(itemId) : nextItemId - 1);
  }
  
  function deleteItem(itemId) {
    if (confirm('Are you sure you want to delete this item?')) {
      inventory = inventory.filter(item => item.id !== itemId);
      
      // Update filtered inventory if search is active
      if (searchInput.value.trim()) {
        filterInventory(searchInput.value.trim());
      } else {
        filteredInventory = [...inventory];
      }
      
      refreshInventoryTable();
      updateDashboard();
      showToast('Item deleted successfully', 'success');
      
      // Send delete request to server
      sendToServer('delete', itemId);
    }
  }
  
  function filterInventory(query) {
    query = query.toLowerCase();
    filteredInventory = inventory.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query)
    );
    
    currentPage = 1;
    refreshInventoryTable();
  }
  
  // Simulate sending data to the Java backend
  function sendToServer(action, itemId) {
    const serverEndpoint = '/inventory'; // This would point to your Java servlet
    
    // In a real application, this would be an actual fetch request to the backend
    console.log(`Simulating ${action} request to Java backend for item ID: ${itemId}`);
    
    // Simulate a network request
    setTimeout(() => {
      console.log(`Server response: ${action} successful`);
    }, 500);
  }
  
  // Toast notification
  function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toastMessage.className = 'toast-message ' + type;
    
    toast.style.display = 'block';
    
    setTimeout(() => {
      toast.style.display = 'none';
    }, 3000);
  }
  
  // Event Listeners
  addItemBtn.addEventListener('click', openAddItemModal);
  closeModal.addEventListener('click', closeItemModal);
  cancelItemBtn.addEventListener('click', closeItemModal);
  itemForm.addEventListener('submit', saveItem);
  
  searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      filterInventory(this.value.trim());
    }
  });
  
  searchBtn.addEventListener('click', function() {
    filterInventory(searchInput.value.trim());
  });
  
  prevPageBtn.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      refreshInventoryTable();
    }
  });
  
  nextPageBtn.addEventListener('click', function() {
    const totalPages = Math.ceil(filteredInventory.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      refreshInventoryTable();
    }
  });
  
  // Initialize
  setActiveSection('dashboard');
  loadDummyData();
});
