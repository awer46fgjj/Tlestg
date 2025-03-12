// إظهار المحادثة بعد التسجيل الناجح
document.getElementById('sendMessageBtn').addEventListener('click', function() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();

    if (message !== '') {
        const messageContainer = document.createElement('div');
        messageContainer.classList.add('message');
        messageContainer.innerHTML = `<p>${message}</p>`;

        const chatMessages = document.querySelector('.chat-messages');
        chatMessages.appendChild(messageContainer);

        messageInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

// إرفاق ملصق
document.getElementById('attachStickerBtn').addEventListener('click', function() {
    const stickers = ['sticker1.png', 'sticker2.png']; // ملصقات ثابتة كمثال
    const stickerImage = document.createElement('img');
    stickerImage.src = `assets/stickers/${stickers[Math.floor(Math.random() * stickers.length)]}`;
    stickerImage.style.width = '50px';
    stickerImage.style.height = '50px';

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message');
    messageContainer.appendChild(stickerImage);

    const chatMessages = document.querySelector('.chat-messages');
    chatMessages.appendChild(messageContainer);
});
