import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  settings1 = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };


  settings2 = {
    attr : {
      class : 'table table-hover'
    },
    hideSubHeader : true,
    actions : 'n/a',
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };

  data = [
    {
      id: 1,
      name: "Mr Thanos",
      username: "Thanos",
      email: "thanos@titan.tn"
    },
    {
      id: 2,
      name: "Agent Fury",
      username: "Fury",
      email: "fury@sheild.sh"
    },
    {
      id: 3,
      name: "Tim Holland",
      username: "Spiderman",
      email: "spider@stark.st"
    },
    {
      id: 4,
      name: "Natasha Romanoff",
      username: "Black Widow",
      email: "blackwidow@sheild.sh"
    },
    {
      id: 5,
      name: "Ethen Hunt",
      username: "Agent",
      email: "ethen@mi.com"
    },
    {
      id: 6,
      name: "Bruce Wayne",
      username: "Batman",
      email: "batman@wayne.com"
    },
    {
      id: 7,
      name: "Tony Stark",
      username: "Ironman",
      email: "tony@stark.st"
    },
    {
      id: 8,
      name: "Steve Rogers",
      username: "Captain America",
      email: "steve@sheild.sh"
    },
    {
      id: 9,
      name: "Jack Reacher",
      username: "Agent",
      email: "jack@mi.com"
    },
    {
      id: 10,
      name: "James Bond",
      username: "007",
      email: "bond007@mi6.uk"
    },
    
    {
      id: 11,
      name: "Thor",
      username: "Thor",
      email: "thor@asgard.ag"
    }
  ];
}
