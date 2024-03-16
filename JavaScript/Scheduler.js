document.addEventListener('DOMContentLoaded', function () {
    const dayDropdown = document.getElementById('dayDropdown');
    const checkboxesContainers = document.querySelectorAll('.timeslots');
    const selectedTimesList = document.getElementById('displayList');
    const calendarContainer = document.getElementById('calendar');
    const checkboxValues = {};

    dayDropdown.addEventListener('change', () => {
        clearBox();
        updateSelectedTimesDisplay();
        updateCalendar();
    });

    function clearBox() {
        checkboxesContainers.forEach(container => {
            const checkboxes = container.querySelectorAll('.container input[type="checkbox"]');
            checkboxes.forEach(checkbox => {
                checkbox.checked = false;
            });
        });
    }

    function updateSelectedTimesDisplay() {
        const selectedDay = dayDropdown.value;
        const selectedValues = checkboxValues[selectedDay] || [];

        selectedTimesList.innerHTML = '';

        selectedValues.forEach(value => {
            const listItem = document.createElement('li');
            listItem.textContent = value;
            selectedTimesList.appendChild(listItem);
        });
    }

    function updateCalendar() {
        const selectedDay = dayDropdown.value;
        const bookedTimes = checkboxValues[selectedDay] || [];

        calendarContainer.innerHTML = '';

        const calendarTable = document.createElement('table');
        calendarTable.classList.add('calendar-table');

        for (let i = 9; i <= 18; i++) {
            const row = document.createElement('tr');
            const timeCell = document.createElement('td');
            timeCell.textContent = `${i} - ${i + 1} ${i < 12 ? 'AM' : 'PM'}`;
            row.appendChild(timeCell);

            const statusCell = document.createElement('td');
            const timeSlot = `${selectedDay} ${i} ${i < 12 ? 'AM' : 'PM'}`;
            statusCell.dataset.timeSlot = timeSlot;

            if (bookedTimes.includes(timeSlot)) {
                statusCell.textContent = 'Booked';
                statusCell.classList.add('booked');
                statusCell.addEventListener('mouseover', showReservationDetails);
                statusCell.addEventListener('mouseout', hideReservationDetails);
            } else {
                statusCell.textContent = 'Available';
                statusCell.classList.add('available');
                statusCell.addEventListener('click', reserveTime);
            }

            row.appendChild(statusCell);
            calendarTable.appendChild(row);
        }

        calendarContainer.appendChild(calendarTable);
    }

    function reserveTime(event) {
        const selectedDay = dayDropdown.value;
        const selectedTime = event.currentTarget.dataset.timeSlot;

        // Prompt user for details (you can customize this part)
        const userName = prompt('Enter your name:');
        const appointmentType = prompt('Enter appointment type:');
        const specialMessage = prompt('Enter any special message:');

        if (userName && appointmentType) {
            // Update checkboxValues to mark the time as booked
            if (!checkboxValues[selectedDay]) {
                checkboxValues[selectedDay] = [];
            }
            checkboxValues[selectedDay].push(selectedTime);

            // Update the display
            updateCalendar();
        }
    }

    function showReservationDetails(event) {
        const selectedTime = event.currentTarget.dataset.timeSlot;
        alert(`Reserved by: ${getUserDetails(selectedTime)}`);
    }

    function hideReservationDetails() {
        // You can customize this part based on your UI design
        // This could involve hiding or clearing the displayed details
    }

    function getUserDetails(timeSlot) {
        // Modify this function to retrieve user details from your reservationDetails object
        // The returned string should contain user details for the specified time slot
        return 'User details here';
    }
});
