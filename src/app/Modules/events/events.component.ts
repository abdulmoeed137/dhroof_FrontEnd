import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  constructor() {}
scheduleData = [
  {
    day: "17",
    month: "Jul",
    weekday: "Thursday",
    year: "2025",
    Events: [
      {
        Title: "TechFront Summit",
        Time: "9 am - 10:30 am",
        location: "San Francisco",
        description:
          "TechFront Summit brings together top minds in technology to discuss advancements in AI, quantum computing, and robotics. Attendees gain insights into future trends shaping industries globally.\n\nThis year's event features keynote speeches from pioneers in tech, interactive panel discussions, and networking opportunities with global innovators.",
        views: 240,
        bookmarks: 38,
        people: 6,
        daysLeft: 0,
        imageUrl: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
        tags: ["AI", "Robotics", "Networking"],
        organizedBy: {
          id: "org_001",
          imageUrl: "https://randomuser.me/api/portraits/men/45.jpg"
        },
        attending: [
          "https://randomuser.me/api/portraits/women/32.jpg",
          "https://randomuser.me/api/portraits/men/41.jpg",
          "https://randomuser.me/api/portraits/women/21.jpg"
        ]
      }
    ]
  },
  {
    day: "18",
    month: "Jul",
    weekday: "Friday",
    year: "2025",
    Events: [
      {
        Title: "Healthcare Innovations",
        Time: "1 pm - 3 pm",
        location: "New York",
        description:
          "Explore the evolving landscape of digital healthcare, remote diagnostics, and wearable technology in patient care. Experts will present recent research and real-world applications.\n\nWorkshops include hands-on demos of cutting-edge medical devices and discussion panels on telemedicine policies.",
        views: 180,
        bookmarks: 20,
        people: 4,
        daysLeft: 1,
        imageUrl: "https://source.unsplash.com/400x250/?healthcare,conference",
        tags: ["HealthTech", "AI", "Wearables"],
        organizedBy: {
          id: "org_002",
          imageUrl: "https://randomuser.me/api/portraits/women/55.jpg"
        },
        attending: [
          "https://randomuser.me/api/portraits/men/12.jpg",
          "https://randomuser.me/api/portraits/women/16.jpg"
        ]
      }
    ]
  },
  {
    day: "19",
    month: "Jul",
    weekday: "Saturday",
    year: "2025",
    Events: [
      {
        Title: "Green Energy Expo",
        Time: "10 am - 1 pm",
        location: "Denver",
        description:
          "The Green Energy Expo presents the latest advancements in solar, wind, and bioenergy solutions. Industry leaders and startups showcase innovative products.\n\nVisitors can participate in renewable energy simulations and experience how sustainable choices affect communities.",
        views: 150,
        bookmarks: 22,
        people: 5,
        daysLeft: 2,
        imageUrl: "https://source.unsplash.com/400x250/?solar,energy",
        tags: ["Sustainability", "Energy", "Climate"],
        organizedBy: {
          id: "org_003",
          imageUrl: "https://randomuser.me/api/portraits/men/33.jpg"
        },
        attending: [
          "https://randomuser.me/api/portraits/men/11.jpg",
          "https://randomuser.me/api/portraits/women/52.jpg",
          "https://randomuser.me/api/portraits/men/53.jpg"
        ]
      },
      {
        Title: "EV Innovation Talk",
        Time: "3 pm - 5 pm",
        location: "Denver",
        description:
          "Electric vehicle experts explore sustainable transportation, infrastructure challenges, and smart city integration. Attendees will witness concept car unveilings and charging tech demos.\n\nJoin the Q&A with startup founders revolutionizing the EV industry.",
        views: 195,
        bookmarks: 18,
        people: 6,
        daysLeft: 2,
        imageUrl: "https://source.unsplash.com/400x250/?electric,car",
        tags: ["EV", "Innovation", "Mobility"],
        organizedBy: {
          id: "org_004",
          imageUrl: "https://randomuser.me/api/portraits/men/64.jpg"
        },
        attending: [
          "https://randomuser.me/api/portraits/women/11.jpg",
          "https://randomuser.me/api/portraits/men/21.jpg"
        ]
      }
    ]
  },
  {
    day: "20",
    month: "Jul",
    weekday: "Sunday",
    year: "2025",
    Events: [
      {
        Title: "Startup Pitch Fest",
        Time: "11 am - 2 pm",
        location: "Austin",
        description:
          "Early-stage startups pitch innovative solutions to investors and industry mentors. Categories include fintech, agrotech, and SaaS products.\n\nShortlisted teams receive incubation support and potential seed funding.",
        views: 300,
        bookmarks: 45,
        people: 10,
        daysLeft: 3,
        imageUrl: "https://source.unsplash.com/400x250/?startup,pitch",
        tags: ["Entrepreneurship", "Funding", "Startup"],
        organizedBy: {
          id: "org_005",
          imageUrl: "https://randomuser.me/api/portraits/women/40.jpg"
        },
        attending: [
          "https://randomuser.me/api/portraits/men/22.jpg",
          "https://randomuser.me/api/portraits/men/23.jpg"
        ]
      }
    ]
  },
  {
    day: "21",
    month: "Jul",
    weekday: "Monday",
    year: "2025",
    Events: [
      {
        Title: "Smart City Conclave",
        Time: "9 am - 12 pm",
        location: "Chicago",
        description:
          "City planners and engineers explore technology-driven urban planning, IoT infrastructure, and sustainable mobility solutions. Attendees can join live simulations.\n\nDiscussions cover real-time data monitoring, traffic optimization, and smart utilities.",
        views: 270,
        bookmarks: 34,
        people: 7,
        daysLeft: 4,
        imageUrl: "https://source.unsplash.com/400x250/?city,smart",
        tags: ["UrbanTech", "IoT", "Smart Cities"],
        organizedBy: {
          id: "org_006",
          imageUrl: "https://randomuser.me/api/portraits/men/77.jpg"
        },
        attending: [
          "https://randomuser.me/api/portraits/women/23.jpg",
          "https://randomuser.me/api/portraits/men/36.jpg"
        ]
      }
    ]
  },
  {
    day: "22",
    month: "Jul",
    weekday: "Tuesday",
    year: "2025",
    Events: [
      {
        Title: "Metaverse Meetup",
        Time: "2 pm - 5 pm",
        location: "Seattle",
        description:
          "Join metaverse developers, gamers, and investors for a dive into the future of immersive technology. Experience VR demos and Web3 integrations.\n\nPanels explore ethics, monetization, and interoperability in virtual worlds.",
        views: 210,
        bookmarks: 28,
        people: 6,
        daysLeft: 5,
        imageUrl: "https://source.unsplash.com/400x250/?metaverse,vr",
        tags: ["VR", "Web3", "Gaming"],
        organizedBy: {
          id: "org_007",
          imageUrl: "https://randomuser.me/api/portraits/men/12.jpg"
        },
        attending: [
          "https://randomuser.me/api/portraits/men/26.jpg",
          "https://randomuser.me/api/portraits/women/17.jpg"
        ]
      }
    ]
  },
  {
    day: "23",
    month: "Jul",
    weekday: "Wednesday",
    year: "2025",
    Events: [
      {
        Title: "Cybersecurity Bootcamp",
        Time: "8 am - 11 am",
        location: "Boston",
        description:
          "Hands-on workshops for IT professionals focusing on network security, ethical hacking, and breach response. Learn from top security analysts.\n\nSimulations will help participants assess threats and implement countermeasures.",
        views: 170,
        bookmarks: 20,
        people: 5,
        daysLeft: 6,
        imageUrl: "https://source.unsplash.com/400x250/?cybersecurity",
        tags: ["Security", "Hacking", "Data"],
        organizedBy: {
          id: "org_008",
          imageUrl: "https://randomuser.me/api/portraits/women/66.jpg"
        },
        attending: [
          "https://randomuser.me/api/portraits/women/37.jpg"
        ]
      }
    ]
  }
];




selectedTab: string = 'my-events';
currentDate: string = '';
selectedEvent: any = null;

ngOnInit() {
  const today = new Date();

  const weekday = today.toLocaleDateString('en-US', { weekday: 'long' });
  const day = today.getDate();
  const month = today.toLocaleDateString('en-US', { month: 'long' });
  const year = today.getFullYear();

  this.currentDate = `${weekday}, ${day} ${month} ${year}`;
}


selectedEntry: any = null;
selectedDateInfo: any = null;

selectEvent(event: any, dateInfo: any) {
  this.selectedEvent = event;
  this.selectedDateInfo = dateInfo;
}

}
