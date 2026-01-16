// Handle Contact Form Submission
function handleContactForm(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Store message in localStorage
    let messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
    messages.push({
        id: Date.now(),
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
        timestamp: new Date().toLocaleString()
    });
    localStorage.setItem('contactMessages', JSON.stringify(messages));

    // Show success message
    alert('✅ Message sent successfully!\n\nThank you, ' + name + '!\nWe will review your message and get back to you soon.');

    // Reset form
    document.getElementById('contactForm').reset();
}
