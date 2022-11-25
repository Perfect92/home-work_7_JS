
// 1 Задача
class worker {
    constructor(name,surname, rate, days,) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getSalary() {
        let salary = this.rate * this.days;
        return salary;
    }
}
const Worker = new worker('Maksim','Kim',16,30,)
console.log(Worker.name)
console.log(Worker.surname)
console.log(Worker.rate)
console.log(Worker.days)
console.log(Worker.getSalary())




// 2 Задача метод Get
class workerGet {
    #name
    #surname
    #rate
    #days
    constructor(name, surname, rate, days) {
        this.#name = name
        this.#surname = surname
        this.#rate = rate
        this.#days = days
    }

    getName() {
        return this.#name
    }

    getSurname() {
        return this.#surname
    }

    getRate() {
        return this.#rate
    }

    getDays() {
        return this.#days
    }

    getSalary() {
        let salary = this.#rate * this.#days
        return salary
    }
}

const WorkerGet = new workerGet('John', 'Viktor', 12, 25)
console.log(WorkerGet.getName())
console.log(WorkerGet.getSurname())
console.log(WorkerGet.getRate())
console.log(WorkerGet.getDays())
console.log(WorkerGet.getSalary())



// 2 Задача метод Set
class workerSet {
    #name
    #surname
    #rate
    #days
    constructor(name, surname, rate, days) {
        this.#name = name
        this.#surname = surname
        this.#rate = rate
        this.#days = days
    }
    getName() {
        return this.#name
    }

    setName(name) {
        this.#name = name
    }
    getSurname() {
        return this.#surname
    }
    setSurname(surname) {
        this.#surname = surname
    }
    getRate() {
        return this.#rate
    }
    setRate(rate) {
        this.#rate = rate
    }
    getDays() {
        return this.#days
    }
    setDays(days) {
        this.#days = days
    }
    getSalary() {
        let salary = this.#rate * this.#days
        return salary
    }
}
let WorkerSet = new workerSet()
WorkerSet.setName('Kim')
WorkerSet.setSurname('Chynyi')
WorkerSet.setRate(15)
WorkerSet.setDays(23)
console.log(WorkerSet.getName())
console.log(WorkerSet.getSurname())
console.log(WorkerSet.getRate())
console.log(WorkerSet.getDays())
console.log(WorkerSet.getSalary())