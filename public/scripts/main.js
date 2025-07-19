// Modal functionality
function toggleLogin() {
    const modal = document.getElementById('loginModal');
    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'block';
    }
}

function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
    
    // Update tab buttons
    const tabs = document.querySelectorAll('.tab-btn');
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
}

function showRegister() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
    
    // Update tab buttons
    const tabs = document.querySelectorAll('.tab-btn');
    tabs[0].classList.remove('active');
    tabs[1].classList.add('active');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Form submission handlers
document.addEventListener('DOMContentLoaded', function() {
    // Login form handler
    const loginForm = document.querySelector('#loginForm form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = this.querySelector('input[type="text"]').value;
            const password = this.querySelector('input[type="password"]').value;
            
            if (!username || !password) {
                alert('Vui lòng điền đầy đủ thông tin!');
                return;
            }
            
            // Simulate login
            alert('Đăng nhập thành công!');
            toggleLogin();
        });
    }
    
    // Register form handler
    const registerForm = document.querySelector('#registerForm form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const inputs = this.querySelectorAll('input');
            const username = inputs[0].value;
            const password = inputs[1].value;
            const confirmPassword = inputs[2].value;
            
            if (!username || !password || !confirmPassword) {
                alert('Vui lòng điền đầy đủ thông tin!');
                return;
            }
            
            if (password !== confirmPassword) {
                alert('Mật khẩu không khớp!');
                return;
            }
            
            if (password.length < 6) {
                alert('Mật khẩu phải có ít nhất 6 ký tự!');
                return;
            }
            
            // Simulate registration
            alert('Đăng ký thành công!');
            showLogin();
        });
    }
    
    // Buy button handlers
    const buyButtons = document.querySelectorAll('.buy-btn:not(:disabled)');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const row = this.closest('.product-row');
            const productName = row.querySelector('.product-name').textContent;
            const price = row.querySelector('.price').textContent;
            
            if (confirm(`Bạn có muốn mua "${productName.substring(0, 50)}..." với giá ${price}?`)) {
                alert('Cảm ơn bạn đã mua hàng! Vui lòng liên hệ shop để nhận tài khoản.');
            }
        });
    });
    
    // Confirm transfer button
    const confirmBtn = document.querySelector('.confirm-btn');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', function() {
            alert('Cảm ơn bạn! Chúng tôi sẽ xử lý giao dịch trong vòng 5-10 phút.');
        });
    }
    
    // Top up button
    const topUpBtn = document.querySelector('.top-up-btn');
    if (topUpBtn) {
        topUpBtn.addEventListener('click', function() {
            alert('Chức năng nạp thẻ sẽ được cập nhật sớm!');
        });
    }
    
    // Facebook login button
    const facebookBtn = document.querySelector('.facebook-btn');
    if (facebookBtn) {
        facebookBtn.addEventListener('click', function() {
            alert('Chức năng đăng nhập Facebook sẽ được cập nhật sớm!');
        });
    }
    
    // Service card click handlers
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const title = this.querySelector('h4').textContent;
            alert(`Dịch vụ "${title}" sẽ được cập nhật sớm!`);
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent;
            
            switch(text) {
                case 'TRANG CHỦ':
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    break;
                case 'NẠP THẺ':
                case 'NẠP ATM/MOMO':
                    document.querySelector('.payment-section').scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'TIN TỨC':
                    alert('Trang tin tức sẽ được cập nhật sớm!');
                    break;
                case 'HỖ TRỢ':
                    alert('Vui lòng liên hệ qua Zalo hoặc Messenger để được hỗ trợ!');
                    break;
                case 'HƯỚNG DẪN':
                    alert('Trang hướng dẫn sẽ được cập nhật sớm!');
                    break;
            }
        });
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.style.opacity = '0.5';
            this.alt = 'Không thể tải hình ảnh';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Add hover effects to product rows
    const productRows = document.querySelectorAll('.product-row');
    productRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
    
    // Add click effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Auto-hide alerts after 3 seconds
    const originalAlert = window.alert;
    window.alert = function(message) {
        const alertDiv = document.createElement('div');
        alertDiv.textContent = message;
        alertDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #ff6b35;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            z-index: 10000;
            max-width: 300px;
            font-weight: 600;
        `;
        
        document.body.appendChild(alertDiv);
        
        setTimeout(() => {
            if (alertDiv.parentNode) {
                alertDiv.parentNode.removeChild(alertDiv);
            }
        }, 3000);
    };
    
    // Add scroll-to-top functionality
    const scrollToTop = document.createElement('button');
    scrollToTop.innerHTML = '↑';
    scrollToTop.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #ff6b35;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(scrollToTop);
    
    scrollToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTop.style.display = 'block';
        } else {
            scrollToTop.style.display = 'none';
        }
    });
    
    // Initialize page
    console.log('TRUMACCRB.COM loaded successfully!');
});

// Utility functions
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.textContent = message;
    
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${colors[type] || colors.info};
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 600;
        animation: slideDown 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); }
        to { transform: translateX(-50%) translateY(0); }
    }
    
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); }
        to { transform: translateX(-50%) translateY(-100%); }
    }
    
    .fade-in {
        animation: fadeIn 0.5s ease;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
