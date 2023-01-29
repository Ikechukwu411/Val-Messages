"use strict";
const btn = document.querySelector("button");
const input = document.querySelector("input");
let read = document.querySelector(".messagediv");
let copyBtn = document.querySelector(".copyBtn");

let Messages = function (message, number) {
  this.message = message;
  this.number = number;
};

let n = Math.floor(Math.random() * 7);
console.log(n);

let messageNew = "";
let loveMessages = new Messages([
  "Wishing a very happy Valentine's Day to the one who holds a special place in my heart🥰",
  `On this special day and always, you are everything to me ❤`,
  `I'm certain without a doubt, you are the one for me 💕`,
  `You always leave me breathless. Happy Valentine's Day!🎉`,
  `I know we are already together but it’s still nice to ask – will you be my valentine?`,
  `With you, everything in life is better 💖.`,
  `My love for you is immeasurable. Happy Valentine's Day!🎇`,
  `Happy Valentine’s Day to the most special person in my life🎆.`,
  `It’s just one day in the year, but you should know that I love 
  you every day and every moment. Take my love on this beautiful occasion.🎊`,
  `The more time we spend together, the more we fall in love with each other. Happy Valentine's!♥`,
  `Thank you for bringing so much love, joy, and adventure into my life. I love you.♥`,
  `Through all the seasons, through all of time... I love you. Happy Valentine's Day.😍`,
  `To another Valentine's Day spent with the love of my life, and to many more.😘`,
  `I love you more than you'll ever know. Happy Valentine's Day!🥰`,
  `Thanks for being you and for being mine.👩‍❤️‍💋‍👩`,
  `What would I do without you by my side? Happy Valentine's Day to the love of my life.💑`,
  `Thank you for standing by my side through thick and thin, happy valentine 😎`,
  `Sending you a big Valentine's Day hug.🎈🎈🎈`,
  `You make me laugh and smile every day. I love you!🎇🎆`,
  `Hope your day is filled with fun and your mouth is filled with chocolate!🏓`,
  `♥ You are my one and only valentine and I would like to wish you the very best on this special day.`,
  `♥ Love me and never leave me. We are perfect together. Happy Valentine’s Day.`,
  `♥ While I was cleaning the home, I found the letters L, O, V, and E. The only thing I’m missing now is U.`,
  `♥ You make my life happier and brighter every day. Let’s have the most romantic Valentine’s date ever tonight.`,
  `♥ You are the person who makes me smile and give me the energy to go that extra mile.`,
  `♥ I love you and this is something that I cannot say enough. Happy Valentine’s Day.`,
  `♥ You taught me how to love and share in ways that I never knew how. Thank you for your unconditional love.`,
  `♥ My love for you cannot be expressed in words, so I will just say, xoxoxo and many more to give tonight.`,
  `♥ I have been blessed to find a woman as unique and gifted as you. Happy Valentine’s Day!`,
  `♥ You take the biggest place in my heart and I wouldn’t know what to do without you.`,
  `♥ Your beautiful smile can set my heart on fire.`,
  `♥ People say that love can make all our dreams come true. I got to know about it from the moment I first met you.`,
  `♥ When I take a look back at the things, I’m glad that I found you. Wishing you the best Valentine’s Day.`,
  `♥ You are the reason that makes me wake up every morning with a bright smile on the face. Happy Valentine`,
  `♥ I loved you, I love you and I will love you forever. Let’s celebrate many more Valentine’s Days to come.`,
  `♥ With this simple message, I’m unable to show how much I love you.Happy Valentine`,
  `♥ There’s nothing in this world that can change my love for you darling. Happy Val`,
  `♥ You make me feel complete and thank you very much for all the support that you gave to me.`,
  `♥ You are the person whom I had been waiting for forever. I love you.`,
  `♥ Every single day, I fall in love with you and it would be forever. Happy Valentine’s Day!`,
  `♥ You make my heart flutter more gracefully than a butterfly. Let’s soar high this Valentine’s 
  Day like butterflies during our time together later.`,
  `♥ My listener. My believer. My support. We’ve been through it all. Here’s to a sweet Valentine’s Day and many more.`,
  `♥ You may be tough as nails, but I still see that you love me. Happy Valentine’s Day to the toughest person I know!`,
  `♥ Another Valentine’s Day has come and gone, but I know my love for you will stay strong.`,
  `♥ Love me without any restrictions and feel free to accept who I am. Happy Valentine!`,
  `♥ Darling, spread love wherever you go. You would definitely be blessed with the love you get in return.`,
  `♥ From random kisses to random laughs, I feel how lucky I am to be in a relationship with you.`,
  `♥ Our love has the ability to grow endlessly and it would be perfect in future.`,
  `♥ On the first day I met, you took my breath away and I could not respond to it.`,
  `♥ On this Valentine’s Day, I wanted to tell you that my love for you would never die.`,
  `♥ I love the way how you kiss me for no special reason. I believe that love would cherish forever.`,
  `♥ A man is only as good as the woman behind him. Thank you for being that woman behind me.`,
  `♥ Never change who you are. You are a woman so beautiful on the inside and out.`,
  `♥ Everyone’s definition of love is different. My definition is loving you forever until our last breath.`,
  `♥ When I look at you, I see a radiant star with a brightness of
   love that cannot be compared. Have the brightest Valentine’s Day.`,
  `♥ You put your all into caring for our family. Let’s have a relaxing Valentine’s night for you to recharge.`,
  `♥ I can’t thank you enough for how supportive and strong you are to
    keep everyone in the house safe and loved. Happy Valentine’s Day!`,
  `♥ When the going gets tough, you’re the man to pull me to my victory.
   I love you and can’t wait to spend our Valentine’s night together.`,
  `♥ You may not be the best at cleaning up your messes (which I don’t mind picking up for you lol) but you are the best at being 
   the man who you are and that’s what matters most. Hugs and kisses!`,
  `♥ We have the best talks. We have the greatest laughs. Your chuckle is so happy and proud.`,
  `♥ Guess what? There’s a surprise waiting for you at home tonight. I bet you can’t wait and see.`,
  `♥ Every single moment that I have spent with you has been awesome. Happy Valentine’s Day darling.`,
  `♥ Dear husband, I promise you that the best in our love life is yet to come. I love you.`,
  `♥ What would you do if my heart was broken into two? I know that you would fix it for me. I love you.`,
  `♥ Hold me and love me like there’s no tomorrow. I can’t wish for anything better.`,
  `♥ I use the language of love more than all other languages because you are my everything.`,
  `♥ You are the only person that I have loved from the bottom of my heart and that love would remain forever.`,
  `♥ Please fill my heart with a song and give me the opportunity to love you even more.`,
  `♥ Find a way to get into my heart, I will always find a way to love you from the bottom of my heart.`,
  `♥ I’m so glad because I gave the most precious gift I ever had to a kind and a wonderful person like you. Enjoy the Valentine’s Day.`,
  `♥ I would wait forever to be your girl, because you are amazing and I love you!`,
  `♥ I think love is not blind. Love sees more because I have experienced it from you.`,
  `♥ I’m scared to close my eyes because I think that I will not be able to see you again. I love you that much from the bottom of my heart.`,
  `♥ Caring, loving, adorable, intelligent, sweet, and handsome. That’s all what I have to say you darling.`,
  `♥ The next time you see a falling star, make a wish that our love would remain forever.`,
  `♥ Could you please check your briefcase? I cannot find my heart and I think it is in your briefcase.`,
  `♥ Please come home early today. I anticipate to celebrate this Valentine’s Day with my only Love!`,
  `♥ In my life, have shared the best moments in my life with you. Happy Valentine’s Day sweetheart.`,
  `♥ Looking back in time, I’m glad that I chose you except everyone else and I’m looking forward to spend the life with you.`,
  `♥ Every single moment that I have spent with you has been awesome. Wishing you the best for Valentine’s Day.`,
  `♥ Your smile is the biggest treasure that I could ever have and your love is all I need to live.`,
  `♥ I wish I could take a look into your eyes and get lost in them forever.`,
  `♥ I am longing to be with you because the feeling I had whenever you were by my side is amazing.`,
  `♥ The best thing I found in life in this year is the love of you. Happy Valentine’s Day.`,
  `♥ I can even walk a million miles just to see you smile and I would never let you go out of my sight.`,
  `♥ Your touch does everything that pebbles can do to calm water. You make ripples in my heart. I love you.`,
  `♥ I love you sweetheart and I wish you the best Valentine’s Day.`,
  `♥ Whenever I see your smile, I realize that all the troubles in my life are worth tolerating.`,
  `♥ I fell in love with you immediately after seeing the inner beauty of you. Happy Valentine’s Day.`,
  `♥ Love does create boundaries and my love for you has already created boundaries within your heart.`,
  `♥ I can’t even think where I would be without the love of you. Thank you for doing everything that you have done to my life.`,
  `♥ If I can be a tear, I will because then I can born in your eyes and die in your lips.`,
  `♥ I had a heart filled with love and you stole it from me. Enjoy the Valentine’s Day my love.`,
  `♥ Love is not just a decision. It is a wonderful feeling that we could experience in our lives.`,
  `♥ When someone asks me what makes me sleep at night, I would say it’s your love. I love you!`,
  `♥ Whenever I see you, I feel that I don’t need to be perfect in order to be happy.`,
  `♥ Allow me to drown in the chaos of your life along with the silence of love. Happy Valentine’s Day darling.`,
  `♥ Whenever I see your face, I realize how God has been nice to me. I love you.`,
  `♥ Loving you is not just an opinion or a choice. It’s a necessity. Enjoy the Valentine’s Day darling.`,
  `♥ Even though Valentine’s Day costs me a lot, I don’t care about it because you are the best thing that has happened to my life.`,
]);

btn.addEventListener("click", function () {
  keyFire();
  read.innerHTML = messageNew;
});

copyBtn.addEventListener("click", function () {
  document.querySelector("textarea").select();
  document.execCommand("copy");
  copyBtn.innerHTML = `<i class="fa fa-check"></i>`;
  setTimeout(function () {
    copyBtn.innerHTML = `<i class="fa fa-clone"></i>`;
  }, 2500);
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    keyFire();
    read.innerHTML = messageNew;
  }
});

function keyFire() {
  for (let i = 0; i < loveMessages.message.length; i++) {
    if (Number(input.value) === i + 1) {
      messageNew = `
      <div class="messagediv">
          <textarea readonly spellcheck="false">
          ${loveMessages.message[i]}</textarea>
        </div>
      `;
    } else if (Number(input.value) > i) {
      console.log("Between 1 and 100");
      messageNew = `
      <div class="messagediv">
          <textarea readonly spellcheck="false">
          🥶🥶🥶🥶🥶 oops!!!!!  Between 1 and 100</textarea>
        </div>
      `;
    }
  }
}

var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 700,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
        10,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
