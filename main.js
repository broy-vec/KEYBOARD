  let display = document.getElementById('display');
        let isCaps = false;

        function updateKeys() {
            document.querySelectorAll('.keys input').forEach(key => {
                if (key.value !== 'SPACE' && key.value !== 'CAPS' && key.value !== 'BACKSPACE' && key.value !== 'ENTER') {
                    key.value = isCaps ? key.value.toUpperCase() : key.value.toLowerCase();
                }
            });
        }

        document.querySelectorAll('.keys input').forEach(key => {
            key.addEventListener('click', () => {
                if (key.value === 'SPACE') {
                    display.value += ' ';
                } else if (key.value === 'CAPS') {
                    isCaps = !isCaps;
                    updateKeys();
                } else if (key.value === 'BACKSPACE') {
                    display.value = display.value.slice(0, -1);
                } else if (key.value === 'ENTER') {
                    display.value += '\n';
                } else {
                    display.value += key.value;
                }
            });
        });

        updateKeys(); // Initialize key values based on the initial CAPS state
