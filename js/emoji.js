const container = document.getElementById('container');
        const emoji = '🍆';
        const numberOfEmojis = 150; // Nombre d'emojis à afficher

        for (let i = 0; i < numberOfEmojis; i++) {
            const emojiElement = document.createElement('div');
            emojiElement.className = 'emoji';
            emojiElement.textContent = emoji;
            emojiElement.style.left = `${Math.random() * 100}vw`;
            emojiElement.style.animationDuration = `${(Math.random() * 5) + 5}s`;
            container.appendChild(emojiElement);
        }