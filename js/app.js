document.addEventListener('DOMContentLoaded', () => {
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
                alert('Form submission failed. Please check your network connection or email hello@pplco.net directly.');
            }
        });
    }
});