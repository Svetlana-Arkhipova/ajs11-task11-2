class Team {
  constructor() {
    this.members = new Set([
      {
        name: 'Лучник1',
        type: 'Bowman1',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Лучник2',
        type: 'Bowman2',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Лучник3',
        type: 'Bowman3',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
    ]);
  }

  * [Symbol.iterator]() {
    for (const person of this.members) yield person;
  }
}
