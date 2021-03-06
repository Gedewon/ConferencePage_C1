const speakers = [
  {
    name: 'Yochai Benkler',
    tag_name: 'yohai benkler',
    picture: 'Images/speakers/speaker_01.png',
    workplace: 'Professor at Harvard Law School',
    description: `Focusing on a collaborative approach in a networked environment, he created the concept of
                  co-production based on sharing, such as open source software and Wikipedia.`,
  },
  {
    name: 'Jeon Gil-nam',
    tag_name: 'Kilnam Chon',
    picture: 'Images/speakers/speaker_02.png',
    workplace: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    description: 'By developing Asia\'s first Internet protocol network SDN and leading Korea\'s first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.',
  },
  {
    name: 'Noh So-young',
    tag_name: 'Sohyeong Noh',
    picture: 'Images/speakers/speaker_03.png',
    workplace: 'Art Center Nabi Director, CC Korea Director',
    description: 'As the author of &lt;Digital Art Art of Our Time&gt;, he opened \'Art Center Nabi\', Korea\'s first digital art institution in 2000, and is currently serving.',
  },
  {
    name: 'Julia Leda',
    tag_name: 'Julia Leda',
    picture: 'Images/speakers/speaker_04.png',
    workplace: 'Head of the Young Pirates of Europe',
    description: 'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU\'s copyright law in July.',
  },
  {
    name: 'Layla Tretikov',
    tag_name: 'Layla Tretikov',
    picture: 'Images/speakers/speaker_05.png',
    workplace: 'Secretary General of the Wikimedia Foundation',
    description: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia.',
  },

  {
    name: 'Ryan Merkley',
    tag_name: 'Ryan Merkley',
    picture: 'Images/speakers/speaker_06.png',
    workplace: 'Creative Commons CEO, Former Mozilla Foundation COO',
    description: 'He has been active in open movements such as open government and open source.',
  },
];
let speakersToShow = speakers;
const speakersList = document.getElementById('speakers-list');
window.onload = () => {
  speakersList.innerHTML = '';
  if (window.screen.width < 768) {
    speakersToShow = speakers.slice(0, 2);
  }
  speakersToShow.reverse().forEach((speaker) => {
    const speakerHTML = `<article class="speaker">
                              <img src=${speaker.picture} alt="${speaker.name}"/>
                              <div class="desc">
                                  <p href="#" class="speaker-name">${speaker.name}</p>
                                  <p href="#" class="speaker-tag-name">${speaker.tag_name}</p>
                                  <p href="#" class="speaker-job">${speaker.workplace}</p>
                                  <p class="speaker-desc">${speaker.description}</p>
                              </div>
                           </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
  });
};
window.addEventListener('resize', () => {
  document.getElementById('more-btn').classList.remove('hide');
  speakersList.innerHTML = '';
  if (window.screen.width < 768) {
    speakersToShow = speakers.slice(0, 2);
  } else {
    speakersToShow = speakers;
  }
  speakersToShow.forEach((speaker) => {
    const speakerHTML = `<article class="speaker clearfix">
                                <img src=${speaker.picture} alt="${speaker.name}"/>
                                <div class="desc">
                                    <p href="#" class="speaker-name">${speaker.name}</p>
                                    <p href="#" class="speaker-tag-name">${speaker.tag_name}</p>
                                    <p href="#" class="speaker-job">${speaker.workplace}</p>
                                    <p class="speaker-desc">${speaker.description}</p>
                                </div>
                        </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
  });
});

const morebtn = document.getElementById('more-btn');
const mobileMenu = document.querySelector('.mobile_menu_button');
const closeMenu = document.querySelector('#close-menu');

morebtn.addEventListener('click', () => {
  speakersList.innerHTML = '';
  speakers.reverse().forEach((speaker) => {
    const speakerHTML = `<article class="speaker clearfix">
                                  <img src=${speaker.picture} alt="${speaker.name}"/>
                                  <div class="desc">
                                      <p href="#" class="speaker-name">${speaker.name}</p>
                                      <p href="#" class="speaker-tag-name">${speaker.tag_name}</p>
                                      <p href="#" class="speaker-job">${speaker.workplace}</p>
                                      <p class="speaker-desc">${speaker.description}</p>
      
                                  </div>
                          </article>`;
    speakersList.insertAdjacentHTML('afterbegin', speakerHTML);
    document.getElementById('more-btn').classList.add('hide');
  });
});

mobileMenu.addEventListener('click', () => {
  document.getElementById('toggle-menu').classList.toggle('toggle-menu');
  document.querySelector('html').style.overflowY = 'hidden';
});

closeMenu.addEventListener('click', () => {
  document.getElementById('toggle-menu').classList.toggle('toggle-menu');
  document.querySelector('html').style.overflowY = 'auto';
});
