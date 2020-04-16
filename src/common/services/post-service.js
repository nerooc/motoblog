import {
  inject
} from 'aurelia-framework';
import {
  AuthService
} from './auth-service';

@inject(AuthService)
export class PostService {

  constructor(AuthService) {
    this.authService = AuthService;
    // Fake a server response delay
    this.delay = 100;
    // Seed post data if it doesn't exist
    if (!this.posts) {
      this.posts = [{
          title: 'Upcoming new BMW models',
          body: 'The program gets busy for BMW in 2020 and 2021, as future model generations and new versions are added to the brand’s portfolio. No matter how attractive the following news is, you must take everything with a grain of salt as the info is not officially confirmed by BMW. The list was compiled based on previous reports, our own sources and some common sense. BMW gears up for 2020 and 2021 model years in the US and Europe with several novelties, an extensive model update and new electrified additions. To sketch out the portrait of the next year, BMW prepares for the official premiere of the pure-electric BMW iX3, the 4 Series Coupe (G22), the 5 Series LCI/6 Series LCI and the M3/M4 duo (G80/G82). For the US, most of the new models will arrive in time for 2021 model year. Also, all diesel variants across the range (apart from the 1 Series and 2 Series), starting with the 20d version, are rumored to feature a 48V electric boost generator for enhanced efficiency. The plug-in hybrid X3 xDrive30e, with its 292 PS (288 hp) combined system output, will arrive State-side dealerships right after the European debut in Spring 2020. The new X5 xDrive45e is scheduled for introduction on the North American market beginning with Summer next year, right in time for the 2021 model year. The new G80 and G82 generations will herald another premiere: the all-wheel-drive sports platform making use of the specially developed M xDrive traction system. Yet to be officially confirmed, the G80 M3 could also be offered in a special edition entitled “M3 Pure“, which is powered by a slightly detuned S58 engine (around 444 hp of peak output). The power is sent exclusively to the rear wheels via a 6-speed manual gearbox. So, it seems year 2020 is already starting to shape up nicely for BMW. What do you think?',
          author: 'Thomas Davon',
          slug: 'BMW-new-cars',
          tags: ['BMW', 'carmarket', 'newmodels', 'carindustry'],
          createdAt: new Date('April 14, 2020').setHours(7, 50)
        },
        {
          title: 'Robert Kubica ahead for Alfa Romeo',
          body: 'Alfa Romeo show speed as F1s second and final winter test begins but Verstappen shows first glimpse of Red Bull pace before late spin and stoppage Vettel also spins Ferrari. Alfa Romeos Robert Kubica finished as the unexpected pacesetter on the opening day of F1s final pre-season test - but Max Verstappen was second with Red Bulls fastest time so far. Kubica, who has joined Alfa in a reserve role for 2020, posted the fastest non-Mercedes time of the winter so far during his appearance during the morning. The Poles 1:16.942 time came on a short qualifying-style run on Pirellis fastest tyres But Red Bulls day was bookended by technical trouble. A suspension problem restricted Alex Albon to 29 laps during the morning before Verstappen ended the afternoon by spinning out at Turn 10 after his RB16 seemed to cut out. "This morning we lost a little bit of track time, a small suspension issue that needed rectifying," Red Bull chief Christian Horner told Sky F1. "The afternoon was solid. "Generally, the drivers - the best barometer in comparing the car to last year - believe some of the weaknesses from the RB15 have been addressed in this RB16 car."',
          author: 'James Galloway',
          slug: 'f1-testing',
          tags: ['f1', 'kubica', 'alfaromeo', 'f1testing'],
          createdAt: new Date('February 27, 2020').setHours(13, 42)
        },
        {
          title: 'Lewis Hamilton wins sixth F1 World Championship',
          body: 'Lewis Hamilton sealed his sixth world drivers title with second place in the United States Grand Prix. He becomes the second most successful Formula 1 driver of all time, one championship behind Michael Schumacher. Hamilton failed in a valiant attempt to win the race by trying a different strategy to Mercedes team-mate Valtteri Bottas, but that did not matter such was his points advantage. The Briton held off Max Verstappen for second as Bottas won in Austin. Hamilton had said before the race that he was not thinking of sealing the championship in Texas, only of winning the race, and he drove with the fierce competitive instinct that has defined his season and career.',
          author: 'Andrew Benson',
          slug: 'hamilton-champion',
          tags: ['f1', 'hamilton', 'championship'],
          createdAt: new Date('November 3, 2019').setHours(15, 31)
        },
        {
          title: 'New Ford Mondeo to launch in 2021',
          body: 'The CD542 model code was originally assigned to the replacement for the Fusion – the North American version of the Mondeo – before Ford decided to not replace that model directly. The document appears to reveal that the Mondeo name will live on, while the release date of the tool itself indicates the new model will be launched in the second half of next year. Perhaps the most interesting revelation in the catalogue is that the Mondeo-specific tool is for the removal of a rear leaf spring. No European Ford passenger car currently uses leaf springs, with the Mondeo having used a far more typical coil spring set-up for each of its four generations. This seems to suggest that the new Mondeo will feature a transverse leaf spring rear axle similar to that used on models such as the Volvo XC90. Autocar understands that such a set-up would help save space for packaging a battery pack, likely for a conventional or plug-in hybrid powertrain. The current Mondeo Hybrid loses much of its luggage space due to the battery pack being mounted under the boot floor. One likely candidate is the set-up used by the new Kuga PHEV SUV, which combines a 2.5-litre Atkinson cycle petrol engine with a 10.3kWh battery pack and an electric motor to deliver 222bhp and a 34-mile electric-only range. As first scooped by Autocar last summer, the new Mondeo is expected to adopt crossover styling cues, although it now looks less likely to be classified as an SUV. Sources close to Ford suggest that it will continue with hatchback and estate bodystyles, despite the ontrend design influence. Recent spy shots of a development mule, based on a Ford Focus Active Estate with an extended wheelbase, fit this notion.',
          author: 'Peter Buckfield',
          slug: 'new-mondeo',
          tags: ['ford', 'carmarket', 'newmodels', 'carindustry'],
          createdAt: new Date('March 11, 2020').setHours(21, 4)
        },
        {
          title: 'Azerbaijan Grand Prix postponed as coronavirus outbreak continues',
          body: 'The Azerbaijan Grand Prix has become the latest race of the 2020 season to be postponed, the organisers have announced. Officials from the Baku City Circuit said on Monday: "The postponement was agreed upon after extensive discussions with Formula 1 as well as the FIA and the Government of the Azerbaijan Republic. "This comes as a direct result of the ongoing global COVID-19 pandemic and has been based entirely on the expert guidance provided to us by the relevant authorities." It becomes the eighth race of the year to be postponed or cancelled – after the Australian, Bahrain, Vietnam, Chinese, Dutch, Spanish and Monaco Grands Prix – as the world reacts to the coronavirus outbreak. After the first seven Grands Prix of the year were put on hold or called off, there had been hopes that the season could begin with the Azerbaijan race in Baku, but organisers have now confirmed the race will not go ahead as planned on June 7th. All tickets for the FORMULA 1 AZERBAIJAN GRAND PRIX 2020 will continue to be valid, without any additional formality. As soon as the new date of the Grand Prix is confirmed, all spectators will be informed accordingly about the available options, both for those who have purchased their tickets through the Baku City Circuit’s website (www.bakucitycircuit.com) and through other channels.',
          author: 'Anthony Davidson',
          slug: 'mclaren-speedtail',
          tags: ['f1', 'azerbaijan', 'postponed'],
          createdAt: new Date('March 23, 2020').setHours(10, 4)
        },

        {
          title: 'The fastest McLaren ever',
          body: 'You’ve probably heard some people complaining about how all of McLaren’s models look alike, but they’d be wrong in saying the Speedtail is another minor variation of the familiar recipe from Woking. One of the first customer cars to be delivered has arrived in Belgium at the dealer in Brussels, and we can all agree it stands out with its swoopy shape and unusual front wheels with aero covers that remain fixed in position while the wheels rotate. While the Senna embraced the “function follows form” principle to be a lightweight track animal, the Speedtail’s unworldly shape is all about achieving a high velocity. At 250 mph (403 km/h), it’s the fastest production car ever built by McLaren and a worthy spiritual successor to the 243-mph F1 naturally aspirated machine from the 1990s. You won’t be seeing many of these on the road as production will be strictly limited to just 106 units to perfectly match the iconic F1. All examples of the carbon fibre-bodied UFO on wheels have long been sold out at £1.75 million each before taxes and options. Customer deliveries of what McLaren describes as being its first “Hyper-GT” kicked off at the beginning of the year. The adjacent images don’t tell the whole story as they’re unable to illustrate the Speedtail’s impressive footprint. The car is actually 5.2 metres (204.7 inches) long and has a perfectly flat underfloor to maximise airflow in conjunction with the elongated rear end to make the car as sleek as possible. It’s the most aero-efficient road car McLaren has ever built and can be lowered by 35 millimetres (1.4 inches) when the Velocity mode is activated to unlock the entire speed potential. Once it’s lowered, the Speedtail’s highest point is just 1120 mm (44.1 inches) above the road.',
          author: 'Adrian Padeanu',
          slug: 'mclaren-speedtail',
          tags: ['mclaren', 'carmarket', 'newmodels', 'carindustry'],
          createdAt: new Date('March 17, 2020').setHours(20, 13)
        },
      ]
    }
  }

  allPostPreviews() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.posts) {
          let previews = this.posts.map(post => {
            return {
              title: post.title,
              body: post.body.substring(0, 200) + '...',
              author: post.author,
              slug: post.slug,
              tags: post.tags,
              createdAt: post.createdAt
            }
          });
          previews.sort((a, b) => b.createdAt - a.createdAt);
          resolve({
            posts: previews
          });
        } else {
          reject(new Error(
            'There was an error retrieving the posts.'
          ));
        }
      }, this.delay);
    });
  }

  allArchives() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let archives = [];
        this.posts.sort((a, b) => b.createdAt - a.createdAt);
        this.posts.forEach(post => {
          archives.push(`${months[post.createdAt.getMonth()]} ${post.createdAt.getFullYear()}`);
        });
        if (archives) {
          resolve({
            archives: archives.filter((v, i, a) => a.indexOf(v) === i)
          });
        } else {
          reject(new Error(
            'There was an error retrieving the archives.'
          ));
        }
      }, this.delay);
    });
  }

  allTags() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let tags = [];
        this.posts.forEach(post => {
          tags = tags.concat(post.tags);
        });
        if (tags) {
          resolve({
            tags: tags.filter((v, i, a) => a.indexOf(v) === i)
          });
        } else {
          reject(new Error(
            'There was an error retrieving the tags.'
          ));
        }
      }, this.delay);
    });
  }

  create(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let currentUser = this.authService.currentUser;
        let slug = this.slugify(post.title);
        if (currentUser) {
          this.posts.push({
            title: post.title,
            body: post.body,
            author: currentUser,
            slug,
            tags: post.tags,
            createdAt: new Date()
          });
          resolve({
            slug
          });
        } else {
          reject(new Error(
            'You must be logged in to create a post.'
          ));
        }
      }, this.delay);
    });
  }

  find(slug) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let post = this.posts.sort((a, b) => b.createdAt - a.createdAt).find(post => post.slug.toLowerCase() === slug.toLowerCase());
        if (post) {
          resolve({
            post
          });
        } else {
          reject(new Error(
            'Post not found.'
          ));
        }
      }, this.delay);
    });
  }

  postsByTag(tag) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!this.posts) {
          reject(new Error(
            'Error finding posts.'
          ));
        } else {
          resolve({
            posts: this.posts.filter(post => post.tags.includes(tag)).sort((a, b) => b.createdAt - a.createdAt)
          });
        }
      }, this.delay);
    });
  }

  postsByArchive(archive) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!this.posts) {
          reject(new Error(
            'Error finding posts.'
          ));
        } else {
          resolve({
            posts: this.posts.filter(post => {
              return archive === `${months[post.createdAt.getMonth()]} ${post.createdAt.getFullYear()}`;
            }).sort((a, b) => b.createdAt - a.createdAt)
          });
        }
      }, this.delay);
    });
  }

  slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  update(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Get post based on slug and auther
        let toUpdate = this.posts.find(x => {
          return x.slug === post.slug && x.author === this.authService.currentUser;
        })
        if (!toUpdate) {
          reject(new Error(
            'There was an error updating the post.'
          ));
        } else {
          toUpdate = post;
          resolve({
            slug: toUpdate.slug
          });
        }
      }, this.delay);
    });
  }

}
