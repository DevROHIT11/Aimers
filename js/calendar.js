document.addEventListener('DOMContentLoaded', () => {
    const calendarIcon = document.getElementById('calendar-icon');
    const calendarContainer = document.getElementById('calendar-container');
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const tasksList = document.querySelector('.tasks-list');

    let selectedDate = null; // Track the currently selected date
    let tasks = {}; // Store tasks in an object where key is date string

    // Initialize Flatpickr
    flatpickr(calendarContainer, {
        inline: true, // Show the calendar inline
        onChange: function(selectedDates, dateStr) {
            selectedDate = dateStr;
            renderCalendar(); // Re-render calendar to update task indicators
            displayTasks(selectedDate);
        }
    });

    // Function to toggle calendar visibility
    function toggleCalendar() {
        if (calendarContainer.style.display === 'none' || calendarContainer.style.display === '') {
            calendarContainer.style.display = 'block';
            setTimeout(() => {
                calendarContainer.classList.add('show');
            }, 10); // Allow time for display property to take effect
        } else {
            calendarContainer.classList.remove('show');
            setTimeout(() => {
                calendarContainer.style.display = 'none';
            }, 300); // Match the duration of the transition
        }
    }

    // Function to hide calendar if clicked outside
    function handleClickOutside(event) {
        if (!calendarContainer.contains(event.target) && event.target !== calendarIcon) {
            calendarContainer.classList.remove('show');
            setTimeout(() => {
                calendarContainer.style.display = 'none';
            }, 300); // Match the duration of the transition
        }
    }

    // Event listener for calendar icon click
    calendarIcon.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the event from propagating to the document
        toggleCalendar();
    });

    // Add event listener to document to detect clicks outside the calendar
    document.addEventListener('click', handleClickOutside);

    function renderCalendar() {
        const calendarDays = document.querySelectorAll('.calendar-day');
        calendarDays.forEach(dayDiv => {
            const date = dayDiv.dataset.date;
            if (tasks[date] && tasks[date].length > 0) {
                dayDiv.classList.add('has-tasks');
            } else {
                dayDiv.classList.remove('has-tasks');
            }
        });
    }

    function displayTasks(date) {
        tasksList.innerHTML = '';
        if (tasks[date]) {
            tasks[date].forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.classList.add('task-item');
                taskItem.textContent = task;
                tasksList.appendChild(taskItem);
            });
        }
    }

    addTaskBtn.addEventListener('click', () => {
        if (selectedDate && taskInput.value.trim() !== '') {
            if (!tasks[selectedDate]) {
                tasks[selectedDate] = [];
            }
            tasks[selectedDate].push(taskInput.value.trim());
            taskInput.value = '';
            renderCalendar(); // Re-render calendar to update task indicators
            displayTasks(selectedDate);
        } else {
            alert('Please select a date and enter a task.');
        }
    });

    // Ensure the calendar container is initially hidden
    calendarContainer.style.display = 'none';
});
