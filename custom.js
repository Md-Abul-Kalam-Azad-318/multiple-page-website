// 1. বর্তমান পেজের সম্পূর্ণ ইউআএল (URL) বা পাথ নেওয়া
const currentUrl = window.location.href;

// 2. নেভিগেশন বারের সবকটি লিংক সিলেক্ট করা
const navLinks = document.querySelectorAll('.nav-link');

// 3. লুপ চালিয়ে চেক করা কোন লিংকের href-এর সাথে বর্তমান URL মিলছে
navLinks.forEach(link => {
    // যদি বর্তমান URL-এর মধ্যে লিংকের href-এর নামটা থাকে
    if(currentUrl.includes(link.getAttribute('href'))){
        link.classList.add('active');

    }
});