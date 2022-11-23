const speakersData = {
  speak1: {
    name: 'Isao Takahata',
    picture: './Imagenes/takahata_.png',
    position: 'Co-founder of Ghibli Studios',
    works: 'His most recognized works were the television series Heidi, the girl from the Alps (1974) and Marco (1976),and the feature films The Grave of the Fireflies (1988), Memories of Yesterday (1991).'
  },

  speak2: {
    name: 'Hayao Miyazaki',
    picture: './Imagenes/Hayao_Miyazaki.png',
    position: 'Co-founder of Ghibli Studios',
    works: 'Internationally renowned Japanese animation film director, animator, illustrator, entrepreneur, manga and anime producer with a career spanning five decades.'
  },

  speak3: {
    name: 'Cristina Hernández',
    picture: './Imagenes/a.png',
    position: 'Actress and dubbing director',
    works: 'She is recognized for having given her voice to main characters of several anime series such as Sakura Kinomoto, protagonist of Sakura Card Captors, Lima in Saber Marionette, she has also participated in other series such as Pokémon and Digimon.'
  },

  speak4: {
    name: 'Toshio Suzuk',
    picture: './Imagenes/Toshio_Suzuk_.png',
    position: 'Anime film producer',
    works: "He participated in the premiere of Kunihiko Yuyama's GoShogun The Time Étranger, and in 1986 Suzuki served on the production committee of the Studio Ghibli film The Castle in the Sky."
  },

  speak5: {
    name: 'Mitsuki Nakamura',
    picture: './Imagenes/Mitsuki.png',
    position: 'Animation art director, mechanical designer and illustrator from Tokyo',
    works: 'He is the art director of works such as Mobile Suit Gundam and Nausicaä of the Valley of the Wind. His work as a mechanical designer includes Kagaku Ninjatai Gatchaman and Mach GoGoGo.'
  },

  speak6: {
    name: 'Joe Hisaishi',
    picture: './Imagenes/Joe_Hisaishi.png',
    position: 'Japanese composer and orchestra conductor',
    works: 'Japanese composer and conductor.creator of an extensive body of work since his debut in 1981, he stands out for having composed more than 100 soundtracks for Japanese film directors such as Takeshi Kitano or Yōjirō Takita and, especially, for several Studio Ghibli films directed by Hayao Miyazaki.'
  },
}

let speakersCards = '';
let speakNumber = 0;

for (let i = 1; i <= 6; i += 1) {

  speakNumber = `speak${i}`;
  const speakerName = speakersData[speakNumber].name;
  const speakerPicture = speakersData[speakNumber].picture;
  const speakerPosition = speakersData[speakNumber].position;
  const speakerWorks = speakersData[speakNumber].works;

  speakersCards += `<div class="speakers_box speak${i}">
  <div class="picture_box">
    <img class="picture" src="${speakerPicture}" alt="Isao Takahata">
    <img class="ornato" src="./Imagenes/cuadros.jpg" alt="ornament">
  </div>
  <div class="text_speaker_box">
    <h3>${speakerName}</h3>
    <h4>${speakerPosition}</h4>
    <p>${speakerWorks}</p>
  </div>
</div>`
}

const container = document.getElementById('speakers_cotainer');
container.innerHTML = `${speakersCards}`;