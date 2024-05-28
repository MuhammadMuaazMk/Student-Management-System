class Student {
    static counter = 1000;
    id: number;
    name: string;
    courses: string[];
    balance: number;
  
    constructor(name: string) {
      this.id = Student.counter++ + 1;
      this.name = name;
      this.courses = [];
      this.balance = 10000;
    }
    enroll_course(courses: string) {
  
      this.courses.push(courses);
    }
  
    view_balance() {
      console.log("\n_________________________________________________________")
      console.log(`  Balance for ${this.name} : Rs${this.balance}`);
      console.log("_________________________________________________________")
    }
  
    pay_fees(amount: number) {
      if(amount<this.balance){
      this.balance -= amount;
      console.log("\n_________________________________________________________")
      console.log(`${amount}Rs\nFees Paid Suceesfully for ${this.name}`);
      console.log(`Remaining Balance : ${this.balance}`);
      console.log("_________________________________________________________")
      }
      else{
          console.log("\n____________________________________")
          console.log("       Insufficient Balance")
          console.log("____________________________________")
      }
  
    }
    show_status() {
      console.log("\n_________________________________________________________")
      console.log(` ID      :   ${this.id}`);
      console.log(` Name    :   ${this.name}`);
      console.log(` Course  :   ${this.courses.join(" , ")}`);
      console.log(` Balance :   ${this.balance}Rs`);
      console.log("_________________________________________________________")
    }
  }

export default Student;