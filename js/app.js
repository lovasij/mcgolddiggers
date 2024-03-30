const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);

        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden');
        } else {
            entry.target.classList.add('hidden');
        }

    });
});

const hiddenElements = document.querySelectorAll('.special');
hiddenElements.forEach((el) => observer.observe(el));
