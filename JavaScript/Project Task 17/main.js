class school{
  constructor(name,level,numberOfStudents){
    this._name=name;
    this._level=level;
    this._numberOfStudents=numberOfStudents;

    }
    get name() {
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    quickFacts=function(){
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers){
      let subs=substituteTeachers[Math.floor(Math.random()*substituteTeachers.length)];
      console.log(`Substitute Teacher: ${subs}`);
    }
    set numberOfStudents(newNumberOfStudents){
      if (isNaN(newNumberOfStudents)){
        console.log("Invalid input: numberOfStudents must be set to a Number.");
      }
      else
      {
        this._numberOfStudents=newNumberOfStudents;
      }
  }
}

class primarySchool extends school{
  constructor(name,numberOfStudents,pickupPolicy){
    super(name,"Primary",numberOfStudents);
    this._pickupPolicy=pickupPolicy;
  }
  get pickupPolicy(){
    return this._pickupPolicy;
  }
}

class highSchool extends school{
  constructor(name,numberOfStudents,sportsTeams){
    super(name,"High School",numberOfStudents);
    this._sportsTeams= sportsTeams;
  }
  get sportsTeams(){
    console.log(this._sportsTeams);
  }
}

const lorraineHansbury= new primarySchool('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
lorraineHansbury.quickFacts();
school.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

var alSmith= new highSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;
