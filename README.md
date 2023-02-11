# Wallet-balance-check
Для запуска этого скрипта необходимо следующее:

Установите Node.js на свой компьютер, если это еще не сделано.

Скачайте файл со скриптом и сохраните его в любом месте на вашем компьютере.

Откройте командную строку и перейдите в каталог с файлом со скриптом.

Установите библиотеку web3 с помощью npm, выполнив следующую команду:

Copy code
npm install web3
Замените YOUR-PROJECT-ID в строке
javascript
Copy code
const web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/YOUR-PROJECT-ID"));
на свой PROJECT-ID в Infura.

Замените адрес в строке
scss
Copy code
checkBalance('0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
на адрес кошелька MetaMask, который вы хотите проверить.

Выполните следующую команду, чтобы запустить скрипт:
css
Copy code
node [имя_файла].js
Где [имя_файла] — имя файла со скриптом.

После запуска скрипта вы увидите баланс кошелька MetaMask в Ether в консоли.
