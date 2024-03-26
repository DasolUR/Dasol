document.getElementById('add-memo').addEventListener('click', function() {
    const memoInput = document.getElementById('memo-input');
    const memoText = memoInput.value.trim();
  
    if (memoText) {
      const memoDisplay = document.getElementById('memo-display');
      const memoElement = document.createElement('div');
      memoElement.classList.add('memo');
      memoElement.textContent = memoText;
      memoElement.addEventListener('click', function() {
        memoDisplay.removeChild(memoElement);
      });
      memoDisplay.appendChild(memoElement);
      memoInput.value = ''; // Clear input field after adding memo
    }
  });
  