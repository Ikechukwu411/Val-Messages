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
  "Wishing a very happy Valentine's Day to the one who holds a special place in my heartπ₯°",
  `On this special day and always, you are everything to me β€`,
  `I'm certain without a doubt, you are the one for me π`,
  `You always leave me breathless. Happy Valentine's Day!π`,
  `I know we are already together but itβs still nice to ask β will you be my valentine?`,
  `With you, everything in life is better π.`,
  `My love for you is immeasurable. Happy Valentine's Day!π`,
  `Happy Valentineβs Day to the most special person in my lifeπ.`,
  `Itβs just one day in the year, but you should know that I love 
  you every day and every moment. Take my love on this beautiful occasion.π`,
  `The more time we spend together, the more we fall in love with each other. Happy Valentine's!β₯`,
  `Thank you for bringing so much love, joy, and adventure into my life. I love you.β₯`,
  `Through all the seasons, through all of time... I love you. Happy Valentine's Day.π`,
  `To another Valentine's Day spent with the love of my life, and to many more.π`,
  `I love you more than you'll ever know. Happy Valentine's Day!π₯°`,
  `Thanks for being you and for being mine.π©ββ€οΈβπβπ©`,
  `What would I do without you by my side? Happy Valentine's Day to the love of my life.π`,
  `Thank you for standing by my side through thick and thin, happy valentine π`,
  `Sending you a big Valentine's Day hug.πππ`,
  `You make me laugh and smile every day. I love you!ππ`,
  `Hope your day is filled with fun and your mouth is filled with chocolate!π`,
  `β₯ You are my one and only valentine and I would like to wish you the very best on this special day.`,
  `β₯ Love me and never leave me. We are perfect together. Happy Valentineβs Day.`,
  `β₯ While I was cleaning the home, I found the letters L, O, V, and E. The only thing Iβm missing now is U.`,
  `β₯ You make my life happier and brighter every day. Letβs have the most romantic Valentineβs date ever tonight.`,
  `β₯ You are the person who makes me smile and give me the energy to go that extra mile.`,
  `β₯ I love you and this is something that I cannot say enough. Happy Valentineβs Day.`,
  `β₯ You taught me how to love and share in ways that I never knew how. Thank you for your unconditional love.`,
  `β₯ My love for you cannot be expressed in words, so I will just say, xoxoxo and many more to give tonight.`,
  `β₯ I have been blessed to find a woman as unique and gifted as you. Happy Valentineβs Day!`,
  `β₯ You take the biggest place in my heart and I wouldnβt know what to do without you.`,
  `β₯ Your beautiful smile can set my heart on fire.`,
  `β₯ People say that love can make all our dreams come true. I got to know about it from the moment I first met you.`,
  `β₯ When I take a look back at the things, Iβm glad that I found you. Wishing you the best Valentineβs Day.`,
  `β₯ You are the reason that makes me wake up every morning with a bright smile on the face. Happy Valentine`,
  `β₯ I loved you, I love you and I will love you forever. Letβs celebrate many more Valentineβs Days to come.`,
  `β₯ With this simple message, Iβm unable to show how much I love you.Happy Valentine`,
  `β₯ Thereβs nothing in this world that can change my love for you darling. Happy Val`,
  `β₯ You make me feel complete and thank you very much for all the support that you gave to me.`,
  `β₯ You are the person whom I had been waiting for forever. I love you.`,
  `β₯ Every single day, I fall in love with you and it would be forever. Happy Valentineβs Day!`,
  `β₯ You make my heart flutter more gracefully than a butterfly. Letβs soar high this Valentineβs 
  Day like butterflies during our time together later.`,
  `β₯ My listener. My believer. My support. Weβve been through it all. Hereβs to a sweet Valentineβs Day and many more.`,
  `β₯ You may be tough as nails, but I still see that you love me. Happy Valentineβs Day to the toughest person I know!`,
  `β₯ Another Valentineβs Day has come and gone, but I know my love for you will stay strong.`,
  `β₯ Love me without any restrictions and feel free to accept who I am. Happy Valentine!`,
  `β₯ Darling, spread love wherever you go. You would definitely be blessed with the love you get in return.`,
  `β₯ From random kisses to random laughs, I feel how lucky I am to be in a relationship with you.`,
  `β₯ Our love has the ability to grow endlessly and it would be perfect in future.`,
  `β₯ On the first day I met, you took my breath away and I could not respond to it.`,
  `β₯ On this Valentineβs Day, I wanted to tell you that my love for you would never die.`,
  `β₯ I love the way how you kiss me for no special reason. I believe that love would cherish forever.`,
  `β₯ A man is only as good as the woman behind him. Thank you for being that woman behind me.`,
  `β₯ Never change who you are. You are a woman so beautiful on the inside and out.`,
  `β₯ Everyoneβs definition of love is different. My definition is loving you forever until our last breath.`,
  `β₯ When I look at you, I see a radiant star with a brightness of
   love that cannot be compared. Have the brightest Valentineβs Day.`,
  `β₯ You put your all into caring for our family. Letβs have a relaxing Valentineβs night for you to recharge.`,
  `β₯ I canβt thank you enough for how supportive and strong you are to
    keep everyone in the house safe and loved. Happy Valentineβs Day!`,
  `β₯ When the going gets tough, youβre the man to pull me to my victory.
   I love you and canβt wait to spend our Valentineβs night together.`,
  `β₯ You may not be the best at cleaning up your messes (which I donβt mind picking up for you lol) but you are the best at being 
   the man who you are and thatβs what matters most. Hugs and kisses!`,
  `β₯ We have the best talks. We have the greatest laughs. Your chuckle is so happy and proud.`,
  `β₯ Guess what? Thereβs a surprise waiting for you at home tonight. I bet you canβt wait and see.`,
  `β₯ Every single moment that I have spent with you has been awesome. Happy Valentineβs Day darling.`,
  `β₯ Dear husband, I promise you that the best in our love life is yet to come. I love you.`,
  `β₯ What would you do if my heart was broken into two? I know that you would fix it for me. I love you.`,
  `β₯ Hold me and love me like thereβs no tomorrow. I canβt wish for anything better.`,
  `β₯ I use the language of love more than all other languages because you are my everything.`,
  `β₯ You are the only person that I have loved from the bottom of my heart and that love would remain forever.`,
  `β₯ Please fill my heart with a song and give me the opportunity to love you even more.`,
  `β₯ Find a way to get into my heart, I will always find a way to love you from the bottom of my heart.`,
  `β₯ Iβm so glad because I gave the most precious gift I ever had to a kind and a wonderful person like you. Enjoy the Valentineβs Day.`,
  `β₯ I would wait forever to be your girl, because you are amazing and I love you!`,
  `β₯ I think love is not blind. Love sees more because I have experienced it from you.`,
  `β₯ Iβm scared to close my eyes because I think that I will not be able to see you again. I love you that much from the bottom of my heart.`,
  `β₯ Caring, loving, adorable, intelligent, sweet, and handsome. Thatβs all what I have to say you darling.`,
  `β₯ The next time you see a falling star, make a wish that our love would remain forever.`,
  `β₯ Could you please check your briefcase? I cannot find my heart and I think it is in your briefcase.`,
  `β₯ Please come home early today. I anticipate to celebrate this Valentineβs Day with my only Love!`,
  `β₯ In my life, have shared the best moments in my life with you. Happy Valentineβs Day sweetheart.`,
  `β₯ Looking back in time, Iβm glad that I chose you except everyone else and Iβm looking forward to spend the life with you.`,
  `β₯ Every single moment that I have spent with you has been awesome. Wishing you the best for Valentineβs Day.`,
  `β₯ Your smile is the biggest treasure that I could ever have and your love is all I need to live.`,
  `β₯ I wish I could take a look into your eyes and get lost in them forever.`,
  `β₯ I am longing to be with you because the feeling I had whenever you were by my side is amazing.`,
  `β₯ The best thing I found in life in this year is the love of you. Happy Valentineβs Day.`,
  `β₯ I can even walk a million miles just to see you smile and I would never let you go out of my sight.`,
  `β₯ Your touch does everything that pebbles can do to calm water. You make ripples in my heart. I love you.`,
  `β₯ I love you sweetheart and I wish you the best Valentineβs Day.`,
  `β₯ Whenever I see your smile, I realize that all the troubles in my life are worth tolerating.`,
  `β₯ I fell in love with you immediately after seeing the inner beauty of you. Happy Valentineβs Day.`,
  `β₯ Love does create boundaries and my love for you has already created boundaries within your heart.`,
  `β₯ I canβt even think where I would be without the love of you. Thank you for doing everything that you have done to my life.`,
  `β₯ If I can be a tear, I will because then I can born in your eyes and die in your lips.`,
  `β₯ I had a heart filled with love and you stole it from me. Enjoy the Valentineβs Day my love.`,
  `β₯ Love is not just a decision. It is a wonderful feeling that we could experience in our lives.`,
  `β₯ When someone asks me what makes me sleep at night, I would say itβs your love. I love you!`,
  `β₯ Whenever I see you, I feel that I donβt need to be perfect in order to be happy.`,
  `β₯ Allow me to drown in the chaos of your life along with the silence of love. Happy Valentineβs Day darling.`,
  `β₯ Whenever I see your face, I realize how God has been nice to me. I love you.`,
  `β₯ Loving you is not just an opinion or a choice. Itβs a necessity. Enjoy the Valentineβs Day darling.`,
  `β₯ Even though Valentineβs Day costs me a lot, I donβt care about it because you are the best thing that has happened to my life.`,
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
          π₯Άπ₯Άπ₯Άπ₯Άπ₯Ά oops!!!!!  Between 1 and 100</textarea>
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
