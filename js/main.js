document.getElementById('buyTicketButton').addEventListener('click', function () {
    const ticketSellSection = document.getElementById('ticketSellSection');

    if (ticketSellSection) {
        ticketSellSection.scrollIntoView({ behavior: 'smooth' });
    }
});