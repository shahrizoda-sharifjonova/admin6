const setPopups = () => {
    const popups = document.querySelectorAll('.popup');
    const open = document.querySelectorAll('.popup-open');
    const close = document.querySelectorAll('.popup-close');
    console.log(popups);
    open.forEach(btn => {
      btn.addEventListener('click', () => {
        popups.forEach(el => {
          el.classList.remove('active');
        })
        const target = btn.getAttribute('data-target');
        document.querySelector(`#${target}`).classList.add('active');
      })
    })
    close.forEach(btn => {
      btn.addEventListener('click', () => {
        popups.forEach(el => {
          el.classList.remove('active');
        })
      })
    })
}


setPopups()