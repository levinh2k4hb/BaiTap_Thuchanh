// Xử lý hiệu ứng Header khi cuộn trang (Sticky Header)
// Khi cuộn xuống quá 50px thì thêm class 'scrolled' để đổi màu nền
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hiệu ứng chạy thanh tiến trình (Skills) khi cuộn đến
// Sử dụng IntersectionObserver để bắt sự kiện phần tử xuất hiện trong viewport
const skillsSection = document.querySelector('.skills-container');
const observerOptions = {
    threshold: 0.5 // Kích hoạt khi thấy được ít nhất 50% phần tử
};

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            skillsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

if (skillsSection) {
    skillsObserver.observe(skillsSection);
}

// Hiệu ứng Reveal (Hiện dần) cho các thành phần khác khi cuộn trang
// Giúp trang web trông sinh động hơn
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target); // Chỉ chạy một lần
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    revealObserver.observe(el);
});

// Xử lý gửi Form liên hệ (Giả lập)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Chặn reload trang mặc định
        alert('Cảm ơn bạn đã liên hệ! Mình sẽ phản hồi sớm nhất có thể.');
        contactForm.reset();
    });
}

// Tự động đóng menu mobile sau khi người dùng click chọn link
const navLinks = document.querySelectorAll('.nav-links a');
const navToggle = document.getElementById('nav-toggle');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle.checked) {
            navToggle.checked = false;
        }
    });
});
