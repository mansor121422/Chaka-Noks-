# Chaka Noks Login Page

A modern, responsive login page with beautiful UI/UX design and comprehensive functionality.

## Features

### 🔐 Core Login Features
- **Username & Password Fields** - Clean, accessible input fields with icons
- **Password Toggle** - Show/hide password functionality with eye icon
- **Remember Me** - Local storage for username persistence
- **Forgot Password** - Modal-based password reset functionality
- **Form Validation** - Client-side validation with helpful error messages

### 🎨 Design Features
- **Modern UI** - Glassmorphism design with gradient backgrounds
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Entrance animations and hover effects
- **Loading States** - Visual feedback during form submission
- **Social Login Options** - Google and Facebook login buttons (ready for integration)

### 🔧 Technical Features
- **Vanilla JavaScript** - No framework dependencies
- **Accessibility** - Keyboard navigation and screen reader friendly
- **Error Handling** - Comprehensive error messages and validation
- **Local Storage** - Remember username functionality
- **Modal System** - Forgot password modal with backdrop blur

## Quick Start

1. **Open the page**: Simply open `index.html` in your web browser
2. **Test login**: Use these credentials:
   - Username: `admin`
   - Password: `password123`

## File Structure

```
Chaka-Noks-/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization

### Colors
The main color scheme uses a purple gradient. To change colors, modify these CSS variables in `styles.css`:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Primary color for buttons and links */
color: #667eea;
```

### Logo/Branding
Replace the title "Chaka Noks" in the HTML with your brand name:

```html
<title>Login - Your Brand Name</title>
<h1>Welcome Back</h1>
```

### API Integration
To connect to a real backend, replace the mock authentication in `script.js`:

```javascript
// Replace this mock code:
if (username === 'admin' && password === 'password123') {
    // Success
} else {
    // Error
}

// With actual API call:
const response = await fetch('/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
});
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Features in Detail

### Password Toggle
Click the eye icon next to the password field to show/hide the password.

### Remember Me
When checked, the username is saved in local storage and automatically filled on next visit.

### Forgot Password
1. Click "Forgot Password?" link
2. Enter your email address
3. Click "Send Reset Link"
4. Modal will show success message

### Form Validation
- Username must be at least 3 characters
- Password must be at least 6 characters
- Email must be valid format (for forgot password)

### Social Login
The Google and Facebook buttons are ready for integration with OAuth providers.

## Security Notes

⚠️ **Important**: This is a frontend-only implementation. For production use:

1. **Never store passwords in localStorage**
2. **Implement proper server-side validation**
3. **Use HTTPS for all authentication**
4. **Add CSRF protection**
5. **Implement rate limiting**
6. **Use secure password hashing**

## Development

### Adding New Features
1. **New Form Fields**: Add to HTML and update validation in `script.js`
2. **New Social Login**: Add button to HTML and handler in `script.js`
3. **Custom Styling**: Modify `styles.css` for new elements

### Testing
- Test on different screen sizes
- Test with keyboard navigation
- Test with screen readers
- Test form validation
- Test error scenarios

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please check the code comments or create an issue in the repository.
