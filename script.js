/* ==========================================
   TRAVELORA INTERACTIVE SCRIPT
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Booking Search Widget Tab Switcher
    // ==========================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const formGrid = document.querySelector('.form-grid');
    const formGroups = document.querySelectorAll('.form-group');
    
    // Form fields we want to manipulate based on tab
    const fromGroup = formGroups[0];
    const toGroup = formGroups[1];
    const checkinGroup = formGroups[2];
    const checkoutGroup = formGroups[3];
    const travelersGroup = formGroups[4];
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Toggle active state on buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const selectedTab = btn.getAttribute('data-tab');
            
            // Adjust input layouts for high-end micro-interactions
            if (selectedTab === 'hotels') {
                // Hotels don't need a "From" flight origin
                fromGroup.style.display = 'none';
                formGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
                toGroup.querySelector('label').innerHTML = '<i class="fa-solid fa-hotel"></i> Destination / Hotel';
                toGroup.querySelector('input').value = 'Paris, France';
                checkinGroup.querySelector('label').innerHTML = '<i class="fa-regular fa-calendar"></i> Check-in';
                checkoutGroup.querySelector('label').innerHTML = '<i class="fa-regular fa-calendar"></i> Check-out';
            } 
            else if (selectedTab === 'activities') {
                // Activities don't need "From" or "Check-out" date ranges, just a single date
                fromGroup.style.display = 'none';
                checkoutGroup.style.display = 'none';
                formGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
                toGroup.querySelector('label').innerHTML = '<i class="fa-solid fa-bicycle"></i> City or Activity';
                toGroup.querySelector('input').value = 'Paris, France';
                checkinGroup.querySelector('label').innerHTML = '<i class="fa-regular fa-calendar"></i> Activity Date';
            } 
            else if (selectedTab === 'packages') {
                // Packages need all fields
                fromGroup.style.display = 'flex';
                checkoutGroup.style.display = 'flex';
                formGrid.style.gridTemplateColumns = 'repeat(5, 1fr)';
                toGroup.querySelector('label').innerHTML = '<i class="fa-solid fa-plane-arrival"></i> To';
                toGroup.querySelector('input').value = 'Paris, France';
                checkinGroup.querySelector('label').innerHTML = '<i class="fa-regular fa-calendar"></i> Start Date';
                checkoutGroup.querySelector('label').innerHTML = '<i class="fa-regular fa-calendar"></i> End Date';
            }
            else { // Flights (Default)
                fromGroup.style.display = 'flex';
                checkoutGroup.style.display = 'flex';
                formGrid.style.gridTemplateColumns = 'repeat(5, 1fr)';
                toGroup.querySelector('label').innerHTML = '<i class="fa-solid fa-plane-arrival"></i> To';
                toGroup.querySelector('input').value = 'Paris, France';
                checkinGroup.querySelector('label').innerHTML = '<i class="fa-regular fa-calendar"></i> Check-in';
                checkoutGroup.querySelector('label').innerHTML = '<i class="fa-regular fa-calendar"></i> Check-out';
            }
        });
    });

    // ==========================================
    // 2. Infinite Destinations Carousel
    // ==========================================
    const destTrack = document.getElementById('dest-track');
    const destPrev = document.getElementById('dest-prev');
    const destNext = document.getElementById('dest-next');
    const destContainer = document.querySelector('.carousel-container');
    
    let isDestMoving = false;
    let destAutoplay;
    const autoplayInterval = 4000; // 4 seconds

    // Calculate dynamic sliding width (card + gap)
    const getDestShift = () => {
        const card = document.querySelector('.destination-card');
        if (!card) return 0;
        const cardWidth = card.getBoundingClientRect().width;
        const computedStyle = window.getComputedStyle(destTrack);
        const gap = parseFloat(computedStyle.gap) || 24;
        return cardWidth + gap;
    };

    const slideDestNext = () => {
        if (isDestMoving) return;
        isDestMoving = true;
        
        const shift = getDestShift();
        destTrack.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
        destTrack.style.transform = `translateX(-${shift}px)`;
        
        const handleTransitionEnd = () => {
            destTrack.style.transition = 'none';
            destTrack.appendChild(destTrack.firstElementChild);
            destTrack.style.transform = 'translateX(0)';
            // Force browser layout update
            destTrack.offsetHeight;
            isDestMoving = false;
            destTrack.removeEventListener('transitionend', handleTransitionEnd);
        };
        destTrack.addEventListener('transitionend', handleTransitionEnd);
    };

    const slideDestPrev = () => {
        if (isDestMoving) return;
        isDestMoving = true;
        
        const shift = getDestShift();
        destTrack.style.transition = 'none';
        destTrack.prepend(destTrack.lastElementChild);
        destTrack.style.transform = `translateX(-${shift}px)`;
        // Force browser layout update
        destTrack.offsetHeight;
        
        destTrack.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
        destTrack.style.transform = 'translateX(0)';
        
        const handleTransitionEnd = () => {
            isDestMoving = false;
            destTrack.removeEventListener('transitionend', handleTransitionEnd);
        };
        destTrack.addEventListener('transitionend', handleTransitionEnd);
    };

    // Nav Bindings
    destNext.addEventListener('click', () => {
        slideDestNext();
        resetDestAutoplay();
    });

    destPrev.addEventListener('click', () => {
        slideDestPrev();
        resetDestAutoplay();
    });

    // Autoplay logic
    const startDestAutoplay = () => {
        destAutoplay = setInterval(slideDestNext, autoplayInterval);
    };

    const resetDestAutoplay = () => {
        clearInterval(destAutoplay);
        startDestAutoplay();
    };

    destContainer.addEventListener('mouseenter', () => clearInterval(destAutoplay));
    destContainer.addEventListener('mouseleave', startDestAutoplay);

    // Boot Destinations Autoplay
    startDestAutoplay();

    // ==========================================
    // 3. Infinite Testimonials Carousel
    // ==========================================
    const testTrack = document.getElementById('test-track');
    const testPrev = document.getElementById('test-prev');
    const testNext = document.getElementById('test-next');
    const testContainer = document.querySelector('.testimonials-slider-container');
    
    let isTestMoving = false;

    const getTestShift = () => {
        const card = document.querySelector('.testimonial-card');
        if (!card) return 0;
        const cardWidth = card.getBoundingClientRect().width;
        const computedStyle = window.getComputedStyle(testTrack);
        const gap = parseFloat(computedStyle.gap) || 24;
        return cardWidth + gap;
    };

    const slideTestNext = () => {
        if (isTestMoving) return;
        isTestMoving = true;
        
        const shift = getTestShift();
        testTrack.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
        testTrack.style.transform = `translateX(-${shift}px)`;
        
        const handleTransitionEnd = () => {
            testTrack.style.transition = 'none';
            testTrack.appendChild(testTrack.firstElementChild);
            testTrack.style.transform = 'translateX(0)';
            testTrack.offsetHeight;
            isTestMoving = false;
            testTrack.removeEventListener('transitionend', handleTransitionEnd);
        };
        testTrack.addEventListener('transitionend', handleTransitionEnd);
    };

    const slideTestPrev = () => {
        if (isTestMoving) return;
        isTestMoving = true;
        
        const shift = getTestShift();
        testTrack.style.transition = 'none';
        testTrack.prepend(testTrack.lastElementChild);
        testTrack.style.transform = `translateX(-${shift}px)`;
        testTrack.offsetHeight;
        
        testTrack.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
        testTrack.style.transform = 'translateX(0)';
        
        const handleTransitionEnd = () => {
            isTestMoving = false;
            testTrack.removeEventListener('transitionend', handleTransitionEnd);
        };
        testTrack.addEventListener('transitionend', handleTransitionEnd);
    };

    testNext.addEventListener('click', slideTestNext);
    testPrev.addEventListener('click', slideTestPrev);

    // Support window resizing to dynamically adjust transforms
    window.addEventListener('resize', () => {
        destTrack.style.transition = 'none';
        destTrack.style.transform = 'translateX(0)';
        testTrack.style.transition = 'none';
        testTrack.style.transform = 'translateX(0)';
    });
});
