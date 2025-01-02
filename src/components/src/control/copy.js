document.addEventListener('copy', (e) => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      const additionalText = "\nCARROLL, Lewis. ...";
      e.clipboardData.setData('text/plain', `"${selectedText}"${additionalText}`);
      e.preventDefault();
    }
  });
  