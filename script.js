// DOM Elements
const loginForm = document.getElementById('loginForm');
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');
const resetEmailInput = document.getElementById('resetEmail');

// Password Toggle Function
function togglePassword() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle eye icon
    if (type === 'text') {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
}

// Show Forgot Password Modal
function showForgotPassword() {
    forgotPasswordModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Focus on email input
    setTimeout(() => {
        resetEmailInput.focus();
    }, 300);
}

// Close Forgot Password Modal
function closeForgotPassword() {
    forgotPasswordModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset form
    forgotPasswordForm.reset();
    hideMessage();
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target === forgotPasswordModal) {
        closeForgotPassword();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && forgotPasswordModal.style.display === 'block') {
        closeForgotPassword();
    }
});

// Show message function
function showMessage(message, type = 'success') {
    // Remove existing messages
    hideMessage();
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert message at the top of the form
    const form = type === 'success' ? loginForm : forgotPasswordForm;
    form.insertBefore(messageDiv, form.firstChild);
    
    // Show the message
    messageDiv.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        hideMessage();
    }, 5000);
}

// Hide message function
function hideMessage() {
    const messages = document.querySelectorAll('.message');
    messages.forEach(msg => {
        msg.remove();
    });
}

// Loading state function
function setLoadingState(form, isLoading) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const formContainer = form.closest('.login-container') || form.closest('.modal-content');
    
    if (isLoading) {
        formContainer.classList.add('loading');
        submitBtn.disabled = true;
    } else {
        formContainer.classList.remove('loading');
        submitBtn.disabled = false;
    }
}

// Form validation
function validateForm(formData) {
    const errors = [];
    
    // Username validation
    if (!formData.get('username') || formData.get('username').trim().length < 3) {
        errors.push('Username must be at least 3 characters long');
    }
    
    // Password validation
    const password = formData.get('password');
    if (!password || password.length < 6) {
        errors.push('Password must be at least 6 characters long');
    }
    
    return errors;
}

// Email validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Login Form Handler
loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(loginForm);
    
    // Validate form
    const errors = validateForm(formData);
    if (errors.length > 0) {
        showMessage(errors.join(', '), 'error');
        return;
    }
    
    // Set loading state
    setLoadingState(loginForm, true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock authentication (replace with actual API call)
        const username = formData.get('username');
        const password = formData.get('password');
        
        // Simple mock validation
        if (username === 'admin' && password === 'password123') {
            showMessage('Login successful! Redirecting...', 'success');
            
            // Simulate redirect
            setTimeout(() => {
                alert('Welcome to Chaka Noks!');
                loginForm.reset();
            }, 1500);
        } else {
            showMessage('Invalid username or password', 'error');
        }
        
    } catch (error) {
        showMessage('An error occurred. Please try again.', 'error');
    } finally {
        setLoadingState(loginForm, false);
    }
});

// Forgot Password Form Handler
forgotPasswordForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = resetEmailInput.value.trim();
    
    // Validate email
    if (!email) {
        showMessage('Please enter your email address', 'error');
        return;
    }
    
    if (!validateEmail(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Set loading state
    setLoadingState(forgotPasswordForm, true);
    
    try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Mock password reset (replace with actual API call)
        showMessage('Password reset link sent to your email!', 'success');
        
        // Close modal after success
        setTimeout(() => {
            closeForgotPassword();
        }, 2000);
        
    } catch (error) {
        showMessage('An error occurred. Please try again.', 'error');
    } finally {
        setLoadingState(forgotPasswordForm, false);
    }
});

// Social Login Handlers
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const provider = this.classList.contains('google') ? 'Google' : 'Facebook';
        
        // Show loading state
        this.style.opacity = '0.7';
        this.style.pointerEvents = 'none';
        
        // Simulate social login
        setTimeout(() => {
            alert(`${provider} login functionality would be implemented here.`);
            this.style.opacity = '1';
            this.style.pointerEvents = 'auto';
        }, 1000);
    });
});

// Remember Me functionality
const rememberMeCheckbox = document.getElementById('rememberMe');
const savedUsername = localStorage.getItem('rememberedUsername');

if (savedUsername) {
    document.getElementById('username').value = savedUsername;
    rememberMeCheckbox.checked = true;
}

rememberMeCheckbox.addEventListener('change', function() {
    const username = document.getElementById('username').value;
    
    if (this.checked && username) {
        localStorage.setItem('rememberedUsername', username);
    } else {
        localStorage.removeItem('rememberedUsername');
    }
});

// Auto-save username when typing
document.getElementById('username').addEventListener('input', function() {
    if (rememberMeCheckbox.checked) {
        localStorage.setItem('rememberedUsername', this.value);
    }
});

// Input focus effects
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        
        if (activeElement.tagName === 'INPUT') {
            const form = activeElement.closest('form');
            if (form) {
                e.preventDefault();
                form.dispatchEvent(new Event('submit'));
            }
        }
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add some nice entrance animations
    const elements = document.querySelectorAll('.form-group, .form-options, .login-btn, .divider, .social-login, .signup-link');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
});

// Add some interactive feedback
document.querySelectorAll('button, input, a').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-1px)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Prevent form submission on Enter key for non-submit buttons
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'BUTTON' && activeElement.type !== 'submit') {
            e.preventDefault();
        }
    }
});
