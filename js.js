

  function toggleQuotes(button) {
    const quoteItems = document.querySelectorAll('.quote-item');
    const isExpanded = button.dataset.expanded === 'true';
  
    quoteItems.forEach((item, index) => {
      if (index >= 2) {
        item.classList.toggle('hidden', !isExpanded);
      }
    });
  
    button.textContent = isExpanded ? 'მეტის ნახვა' : 'ნაკლების ნახვა';
    button.dataset.expanded = isExpanded ? 'false' : 'true';
  }
  
  function toggleVideos(button) {
    const videoItems = document.querySelectorAll('.video-item');
    const isExpanded = button.dataset.expanded === 'true';
  
    videoItems.forEach((item, index) => {
      if (index >= 2) {
        item.classList.toggle('hidden', !isExpanded);
      }
    });
  
    button.textContent = isExpanded ? 'მეტის ნახვა' : 'ნაკლების ნახვა';
    button.dataset.expanded = isExpanded ? 'false' : 'true';
  }
  