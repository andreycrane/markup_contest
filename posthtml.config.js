module.exports = {
  plugins: {
    'posthtml-include': {},
    'posthtml-expressions': {
      locals: {
        features: [
          {
            img: '../img/image/paper_hand.png',
            title: 'a4 paper',
            description:
              'computer manufacturer Lenovo is in hot water this week after pre-installing',
            position: '-40px 0px',
          },
          {
            img: '../img/image/Eyedropper.png',
            title: 'EYEDROPER',
            description:
              'It seems like hundreds of new iPhone apps pop up every week, but which',
            isNew: true,
          },
          {
            img: '../img/image/Crown.png',
            title: 'CROWN',
            description:
              'Watching a movie on your smartphone can be pretty great, but who has the arm',
            position: '-60px 0',
          },
        ],
        news: [
          {
            imgUrl: '../img/image/01.png',
            title: 'The number of protons',
            description:
              'Apple Inc has decided to launch the much awaited Apple Watch in the',
            views: 343,
            published: '1 june 2015',
          },
          {
            imgUrl: '../img/image/02.png',
            title: 'Sport Stadium Birdview',
            description:
              'Apple Inc has decided to launch the much awaited Apple Watch in the',
            views: 343,
            published: '1 june 2015',
          },
          {
            imgUrl: '../img/image/03.png',
            title: 'The number of protons',
            description:
              'Startup founders often have a more casual or offbeat attitude in their dress, office space and marketing, as compared to',
            views: 343,
            published: '1 june 2015',
          },
          {
            imgUrl: '../img/image/04.png',
            title: 'The number of protons',
            description:
              'Apple Inc has decided to launch the much awaited Apple Watch in the',
            views: 343,
            published: '1 june 2015',
          },
          {
            imgUrl: '../img/image/05.png',
            title: 'The number of protons',
            description:
              'Apple Inc has decided to launch the much awaited Apple Watch in the upcoming month of April and has already received around five to six million',
            views: 343,
            published: '1 june 2015',
          },
        ],
        pricingPlans: [
          {
            title: "BASIC PLAN",
            price: "29",
            projects: "5",
            images: "20",
            support: "9/5"
          },
          {
            title: "TEAM PLAN",
            price: "59",
            projects: "10",
            images: "40",
            support: "12/7",
            popular: true
          },
          {
            title: "BASIC PLAN",
            price: "199",
            projects: "Unlimited",
            images: "Unlimited",
            support: "24/7"
          }
        ]
      },
    },
  },
};
