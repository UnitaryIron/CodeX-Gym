const scheduleData = [
    { day: "Monday", class: "Yoga", time: "6:00 PM" },
    { day: "Tuesday", class: "Cardio", time: "7:00 PM" },
    { day: "Wednesday", class: "Strength Training", time: "6:30 PM"},
    { day: "Thursday", class: "Boxing", time: "7:30 PM"},
    { day: "Friday", class: "Yoga", time: "6:00 PM"}
];

const scheduleContent = document.getElementById("schedule-content");

scheduleData.forEach(item => {
    const classItem = document.createElement("div");
    classItem.innerHTML = `<p>${item.day}: ${item.class} - ${item.time}</p>`;
    scheduleContent.appendChild(classItem);
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});