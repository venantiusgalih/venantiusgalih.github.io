(() => {
    const monthPattern = /^(\d{4})-(0[1-9]|1[0-2])$/;

    const parseMonth = (value) => {
        const match = monthPattern.exec(value);
        return match ? { year: Number(match[1]), month: Number(match[2]) } : null;
    };

    document.querySelectorAll(".experience-date[data-start][data-end]").forEach((item) => {
        const start = parseMonth(item.dataset.start);
        const ongoing = item.dataset.end === "now";
        const end = ongoing
            ? { year: new Date().getUTCFullYear(), month: new Date().getUTCMonth() + 1 }
            : parseMonth(item.dataset.end);

        if (!start || !end) return;

        const monthDifference = (end.year - start.year) * 12 + end.month - start.month;
        if (monthDifference < 0) return;
        const totalMonths = monthDifference + 1;

        const years = Math.floor(totalMonths / 12);
        const remainingMonths = totalMonths % 12;
        const duration = years > 0
            ? `${years}${ongoing || remainingMonths > 0 ? "+" : ""} ${years === 1 ? "Year" : "Years"}`
            : `${totalMonths} ${totalMonths === 1 ? "Month" : "Months"}`;

        const startYear = start.year;
        const range = ongoing
            ? `${startYear} - Present`
            : start.year === end.year
                ? startYear
                : `${startYear} - ${end.year}`;

        item.querySelector(".experience-range").textContent = range;
        item.querySelector(".experience-duration").textContent = `• ${duration}`;
    });
})();