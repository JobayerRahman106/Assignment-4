document.getElementById('buyTicketButton').addEventListener('click', function () {
    const ticketSellSection = document.getElementById('ticketSellSection');

    if (ticketSellSection) {
        ticketSellSection.scrollIntoView({ behavior: 'smooth' });
    }
});


document.getElementById('buyTicketButton').addEventListener('click', function () {
    const ticketSellSection = document.getElementById('ticketSellSection');

    if (ticketSellSection) {
        ticketSellSection.scrollIntoView({ behavior: 'smooth' });
    }
});

let overAllPrice = 0;
let clicksits = 0;
const someOfsits = document.querySelectorAll('.seat');

const nxtBtnClick = document.getElementById('next-btn');
nxtBtnClick.disabled = true;
const cuponCodeBtn = document.getElementById('aply-btn');
cuponCodeBtn.disabled = true;

for (const sit of someOfsits) {
    sit.addEventListener('click', function () {

        if (clicksits < 4) {
            
            const sitNumber = sit.textContent;
            const ticketPrice = document.getElementById('ticket-price');
            const price = parseFloat(ticketPrice.innerText.split(' ')[0]);
            const busClass = 'Business';
            const selectedTicketArea = document.getElementById('selected-ticket');
            const p = document.createElement('p');
            p.innerText = sitNumber + ' ' + busClass + ' ' + price + ' Taka';
            selectedTicketArea.appendChild(p);
            sit.style.backgroundColor = 'green';
            sit.style.color = 'white';

            sit.disabled = true;
            overAllPrice += price;

            const overAllPriceArea = document.getElementById('total-cost');
            overAllPriceArea.innerText = overAllPrice;
            const grandTotalArea = document.getElementById('grand-cost');
            grandTotalArea.innerText = overAllPrice;

            let ticketQuantity = ++clicksits;
            
            const selectedTicketCount = document.getElementById('selected-ticket-count');
            selectedTicketCount.innerText = ticketQuantity;

            const someOfsitsQuantity = 8;
            let result = someOfsitsQuantity - ticketQuantity;
            const setsomeOfsitsQuantity = document.getElementById('total-seat-quantity');
            setsomeOfsitsQuantity.innerText = result;
           
            nxtBtnClick.disabled = false;

            if (clicksits === 4) {
                cuponCodeBtn.disabled = false;
            }

            if (clicksits === 4) {
                for (const sit of someOfsits) {
                    if (!sit.disabled) {
                        sit.disabled = true;
                    }
                }
            }
        }
    });
}