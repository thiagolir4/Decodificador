document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const encryptBtn = document.getElementById('encrypt-btn');
    const decryptBtn = document.getElementById('decrypt-btn');
    const messageBox = document.getElementById('message-box');
    const noMessage = document.querySelector('.no-message');
    const placeholderMessage = document.querySelector('.placeholder-message');
    const resultHeader = document.getElementById('result-header');

    function criptografar(texto) {
        return texto.replace(/[a-z]/g, (char) => String.fromCharCode(((char.charCodeAt(0) - 97 + 13) % 26) + 97));
    }

    function descriptografar(texto) {
        return texto.replace(/[a-z]/g, (char) => String.fromCharCode(((char.charCodeAt(0) - 97 - 13 + 26) % 26) + 97));
    }

    function exibirMensagem(texto) {
        noMessage.style.display = 'none';
        placeholderMessage.style.display = 'none';
        resultHeader.style.display = 'block';
        messageBox.textContent = texto;
        messageBox.style.display = 'block';
    }

    function esconderMensagem() {
        messageBox.style.display = 'none';
        resultHeader.style.display = 'none';
        noMessage.style.display = 'block';
        placeholderMessage.style.display = 'block';
    }

    encryptBtn.addEventListener('click', () => {
        const texto = textInput.value;
        if (texto) {
            const textoCriptografado = criptografar(texto);
            exibirMensagem(textoCriptografado);
        }
    });

    decryptBtn.addEventListener('click', () => {
        const texto = textInput.value;
        if (texto) {
            const textoDescriptografado = descriptografar(texto);
            exibirMensagem(textoDescriptografado);
        }
    });

    textInput.addEventListener('input', () => {
        if (textInput.value.trim() === '') {
            esconderMensagem();
        }
    });
});