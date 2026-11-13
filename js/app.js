document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.getElementById('menu');
    const navLinks = document.getElementById('links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Close menu when any navigation link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // Contact form submission
    const form = document.getElementById('form');
    const successMsg = document.getElementById('success');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const formData = new FormData(form);

            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    successMsg.style.display = 'block';
                    form.reset();
                } else {
                    alert('Something went wrong. Please try submitting again.');
                }
            } catch (error) {
                alert('Form submission failed. Please check your network connection or email connect@peoplespirit.in directly.');
            }
        });
    }
});