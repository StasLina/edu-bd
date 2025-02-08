const schedule = [
    "8.00-9.30: - Основы военной подготовки",
    "9.45-11.20 - Базы данных",
    "11.45-13.20 - Разработка мобильных приложений"
];

const scheduleElement = document.getElementById("schedule");
scheduleElement.innerHTML = "<ul>" + schedule.map(item => `<li>${item}</li>`).join("") + "</ul>";