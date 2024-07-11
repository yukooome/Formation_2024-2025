document.addEventListener('DOMContentLoaded', () => {
    // Configurer Day.js pour utiliser la langue française
    dayjs.locale('fr');

    function getWeeklyDates(year, month) {
        let weeks = [];
        let date = dayjs(new Date(year, month, 1));

        // Est-ce que la date n'est pas un lundi ?
        while (date.day() !== 1) {
            // On ajoute un jour jusqu'à ce que la date soit un lundi
            date = date.add(1, 'day');
        }

        while (date.month() === month) {
            let week = [];

            week.push(date.toDate()); // Ajout du premier jour de la semaine
            date = date.add(6, 'day'); // Passage au dernier jour de la semaine
            week.push(date.toDate()); // Ajout du dernier jour de la semaine

            weeks.push(week);
            date = date.add(1, 'day'); // Passage au jour suivant
        }

        return weeks;
    }

    const year = 2024;
    const month = 4; // Mai (mois 0-indexé, donc 4 = mai)
    const weeklyDates = getWeeklyDates(year, month);

    const semaineCells = document.querySelectorAll('.semaine');

    semaineCells.forEach((cell, index) => {
        if (index < weeklyDates.length) {
            const week = weeklyDates[index];
            const firstDay = dayjs(week[0]).format('DD/MM/YYYY');
            const lastDay = dayjs(week[1]).format('DD/MM/YYYY');
            cell.textContent = `${firstDay} - ${lastDay}`;
        }
    });
});