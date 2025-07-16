import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
scheduleData = [
  {
    day: "02",
    month: "Jun",
    weekday: "Monday",
    times: ["9 am - 10 am", "6 pm - 7 pm"],
    titles: ["Company A", "Flux"]
  },
  {
    day: "03",
    month: "Jun",
    weekday: "Tuesday",
    times: ["10 am - 11 am"],
    titles: ["Innotech"]
  },
  {
    day: "04",
    month: "Jun",
    weekday: "Wednesday",
    times: ["11 am - 12 pm", "2 pm - 3 pm", "4 pm - 5 pm"],
    titles: ["NovaWorks", "TechHive", "BlueOcean"]
  },
  {
    day: "05",
    month: "Jun",
    weekday: "Thursday",
    times: ["1 pm - 2 pm", "3 pm - 4 pm"],
    titles: ["AlphaCorp", "Nexus"]
  },
  {
    day: "06",
    month: "Jun",
    weekday: "Friday",
    times: ["9 am - 10 am"],
    titles: ["Delta Inc."]
  },
  {
    day: "07",
    month: "Jun",
    weekday: "Saturday",
    times: ["8 am - 9 am", "1 pm - 2 pm"],
    titles: ["OmniTech", "SkyNet"]
  },
  {
    day: "08",
    month: "Jun",
    weekday: "Sunday",
    times: ["10 am - 11 am"],
    titles: ["ByteForge"]
  },
  {
    day: "09",
    month: "Jun",
    weekday: "Monday",
    times: ["11 am - 12 pm", "2 pm - 3 pm"],
    titles: ["CyberCore", "Cloud Nine"]
  },
  {
    day: "10",
    month: "Jun",
    weekday: "Tuesday",
    times: ["3 pm - 4 pm", "5 pm - 6 pm"],
    titles: ["NeoWave", "BitZone"]
  },
  {
    day: "11",
    month: "Jun",
    weekday: "Wednesday",
    times: ["9 am - 10 am"],
    titles: ["Zenith Labs"]
  },
  {
    day: "12",
    month: "Jun",
    weekday: "Thursday",
    times: ["12 pm - 1 pm", "4 pm - 5 pm"],
    titles: ["QuantumLeap", "VisionTech"]
  },
  {
    day: "13",
    month: "Jun",
    weekday: "Friday",
    times: ["10 am - 11 am", "2 pm - 3 pm", "6 pm - 7 pm"],
    titles: ["PulseWorks", "GridCore", "SolarEdge"]
  }
];

selectedTab: string = 'my-events';


}
