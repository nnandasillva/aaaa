        function toggleMenu() {
            const submenu = document.getElementById('submenu');
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        }
        function showPopup() {
            const popup = document.getElementById('popup');
            popup.style.display = 'block';
        }

        function closePopup() {
            const popup = document.getElementById('popup');
            popup.style.display = 'none';
        }

        window.onload = showPopup;