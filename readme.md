# Guess My Number Game

This is a simple web game called "Guess My Number," where the user tries to guess a random number.

## How the Game Works

- When the game starts, a random number (between 1 and 100) is generated, and the user is asked to guess this number.
- The user enters their guess in the input field and clicks the "Guess" button.
- If the guess is correct, the user wins, and the background color turns green. Additionally, a "Congratulations! You Guessed It!" message and the current score are displayed. If the current score is higher than the previous highest score, the highest score is updated.
- If the guess is wrong, the user's score decreases by 1. The user receives a clue message indicating whether the number should be increased or decreased. The remaining attempts are also shown.
- If the user runs out of attempts, the game is lost. The background color turns red, and a "You Lost" message is displayed. The "Guess" button is disabled, and the remaining attempts are no longer shown.
- The user can start a new game by clicking the "Play Again" button.


## Notes

This game is a simple web application created using HTML, CSS, and JavaScript.

1. HTML Structure:
   The code starts with the HTML structure for the "Guess My Number" game. An HTML page is created to display various elements used in the game and interact with them.

2. JavaScript Variables:
   The code defines variables using the `const` and `let` keywords to reference various HTML elements and data related to the game. These variables include the randomly generated number (`randomNumber`), the current score (`score`), and the highest achieved score (`highestScore`).

3. DOM Elements:
   The code uses the `document.querySelector()` method to select specific HTML elements and assign them to relevant variables. These variables will be used to update and modify the content of the page.

4. Displaying Messages:
   The code defines a function called `displayMessage(msg)`. This function takes a message as input and sets the content of the element with the `message-display` class to this message. This function is used to display different messages to the player during the game.

5. Event Listeners:
   The code sets up two event listeners:
   - The first event listener is attached to the "Guess" button (identified by the `.guess-button` class). When the button is clicked, it executes a function that checks the user's input, provides feedback, and handles the game logic.
   - The second event listener is attached to the input field (identified by the `.guess-input` class). It listens for the "keydown" event and, if the "Enter" key is pressed (keyCode 13), simulates a click on the "Guess" button.

6. Game Logic:
   The main game logic is within the event listener for the "Guess" button. When the button is clicked, the user's input is checked against the randomly generated `randomNumber`.

   - If the input is empty, a message prompts the user to enter a valid guess.
   - If the input matches `randomNumber`, the user wins. The background color turns green, a success message is displayed, and if the current score is higher than the previous highest score, the highest score is updated and shown.
   - If the input does not match `randomNumber`, the user's score decreases by 1. The game provides a clue message, indicating whether the number should be increased or decreased. If the score is greater than 0, and the user still has attempts left, the remaining attempts are shown.
   - If the score reaches 0, the user loses the game. The background color turns red, the button is disabled, and the remaining attempts are no longer shown.

This is the basic logic of the game. The user tries to guess the randomly generated number, and the score increases with each correct guess and decreases with each wrong guess. The goal is to achieve the highest score. The user can start a new game by clicking the "Play Again" button.

---
---

# Guess My Number Game

Bu, kullanıcının rastgele bir sayıyı tahmin etmeye çalıştığı "Guess My Number" adlı basit bir web oyunudur.

## Oyun Nasıl Çalışır?

- Oyun başladığında, bir rastgele sayı (1 ile 100 arasında) oluşturulur ve kullanıcıdan bu sayıyı tahmin etmesi istenir.
- Kullanıcı sayıyı giriş alanına yazarak "Guess" düğmesine tıklar.
- Eğer tahmin doğruysa, kullanıcı kazanır ve arka plan rengi yeşil olur. Ayrıca, "Tebrikler Bildiniz!" mesajı ve mevcut skor gösterilir. Eğer mevcut skor, önceki en yüksek skordan daha büyükse, en yüksek skor güncellenir.
- Eğer tahmin yanlışsa, kullanıcının skoru 1 azalır. Oyuncuya, sayının artırılması veya azaltılması gerektiğini belirten bir ipucu mesajı gösterilir. Ayrıca, kalan hak sayısı gösterilir.
- Kullanıcının hakkı tamamen biterse, oyun kaybedilir. Arka plan rengi kırmızı olur ve "Kaybettiniz" mesajı gösterilir. "Guess" düğmesi devre dışı bırakılır ve kalan hak sayısı gösterilmez.
- Kullanıcı, "Play Again" düğmesine tıklayarak yeni bir oyun başlatabilir.

## Notlar     

Bu oyun basit bir web uygulamasıdır. HTML, CSS ve JavaScript ile oluşturulmuştur.


1. HTML Yapısı:
   Kod, "Guess My Number" adlı oyun için HTML yapısı ile başlar. Bir HTML sayfası oluşturulur ve oyunda kullanılacak çeşitli öğeleri göstermek ve etkileşime geçmek için kullanılır.

2. JavaScript Değişkenleri:
   Kod, `const` ve `let` anahtar kelimelerini kullanarak çeşitli HTML öğelerine ve oyunla ilgili verilere atıfta bulunan değişkenleri tanımlar. Bu değişkenler arasında rastgele oluşturulan sayı (`randomNumber`), mevcut skor (`score`) ve en yüksek elde edilen skor (`highestScore`) bulunur.

3. DOM Öğeleri:
   Kod, `document.querySelector()` yöntemini kullanarak belirli HTML öğelerini seçer ve onları ilgili değişkenlere atar. Bu değişkenler daha sonra sayfanın içeriğini güncellemek ve değiştirmek için kullanılacaktır.

4. Mesaj Gösterme:
   Kod, `displayMessage(msg)` adında bir işlev tanımlar. Bu işlev, bir mesaj alır ve `message-display` sınıfına sahip olan öğenin içeriğini bu mesaj olarak ayarlar. Bu işlev, oyuncuya oyun sırasında farklı mesajları göstermek için kullanılır.

5. Olay Dinleyicileri:
   Kod, iki olay dinleyicisi ayarlar:
   - İlk olay dinleyicisi, "Guess" düğmesine (`.guess-button` sınıfı ile tanımlandığı) bağlanır. Düğmeye tıklandığında, kullanıcının tahminini rastgele oluşturulan sayı ile karşılaştıran, geri bildirim sağlayan ve oyun mantığını işleyen bir işlevi yürütür.
   - İkinci olay dinleyicisi, giriş öğesine (`.guess-input` sınıfı ile tanımlanan) bağlanır. "keydown" olayını dinler ve "Enter" tuşuna basılırsa (keyCode 13), "Guess" düğmesine tıklama işlemini taklit eder.

6. Oyun Mantığı:
   Ana oyun mantığı, "Guess" düğmesine tıklama olayı dinleyicisindedir. Düğmeye tıklandığında, kullanıcının girişi kontrol edilir ve rastgele oluşturulan `randomNumber` ile karşılaştırılır.

   - Eğer giriş boşsa, kullanıcıdan geçerli bir tahmin girmesini isteyen bir mesaj gösterilir.
   - Eğer giriş, `randomNumber` ile eşleşirse, kullanıcı oyunu kazanır. Arkaplan rengi yeşile döner, başarı mesajı gösterilir ve mevcut skor önceki en yüksek skordan daha yüksekse, en yüksek skor güncellenip gösterilir.
   - Eğer giriş, `randomNumber` ile eşleşmezse, kullanıcının skoru 1 azalır. Oyun, kullanıcıya ipucu mesajı verir, kullanıcının sayıyı artırıp azaltması gerektiğini belirtir. Skor 0'dan büyükse ve oyuncunun hakları hala varsa, kalan hakkı gösterir.
   - Eğer skor 0 olursa, kullanıcı oyunu kaybeder. Arka plan rengi kırmızıya döner, düğme devre dışı bırakılır ve kalan hakkı göstermez.

Oyunun temel mantığı bu şekildedir. Kullanıcı rastgele oluşturulan sayıyı bulmaya çalışır ve her doğru tahminde skor artar, yanlış tahminde ise skor azalır. Kullanıcının amacı en yüksek skoru elde etmektir. "Play Again" düğmesine tıklayarak yeni bir oyun başlatılabilir.