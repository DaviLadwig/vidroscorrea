// =========================
// COUNTER
// =========================

const counters = document.querySelectorAll('.counter');

const startCounter = (counter) => {

    const target = +counter.dataset.target;

    let count = 0;

    const increment = target / 120;

    const updateCounter = () => {

        count += increment;

        if (count < target) {

            counter.innerText =
                '+ de ' + Math.floor(count);

            requestAnimationFrame(updateCounter);

        } else {

            counter.innerText = '+ de ' + target;
        }

    };

    updateCounter();

};

// =========================
// SCROLL TRIGGER
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter =
                entry.target.querySelector('.counter');

            if (!counter.classList.contains('started')) {

                counter.classList.add('started');

                startCounter(counter);

            }

        }

    });

}, {
    threshold: .5
});

// =========================
// OBSERVE
// =========================

document
    .querySelectorAll('.stat-item')
    .forEach(item => {

        observer.observe(item);

    });