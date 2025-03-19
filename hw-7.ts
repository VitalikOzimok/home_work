interface TypeVehicle {
  brand: string;
  model: string;
  year: number;
  accelerate(amount: number): number;
  brake(amount: number): number;
  info(): void;
}
class Vehicle implements TypeVehicle {
  brand: string;
  model: string;
  year: number;
  protected speed: number;
  constructor(brand: string, model: string, year: number, speed: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.speed = speed;
  }
  accelerate(amount: number): number {
    return (this.speed += amount);
  }
  brake(amount: number): number {
    return (this.speed -= amount);
  }
  info() {
    console.log(
      `Брэнд : ${this.brand}, модель : ${this.model}, год : ${this.year}, скорость : ${this.speed} км/ч`
    );
  }
  drive() {
    console.log(`Едет машина ${this.brand}-${this.model}`);
  }
  sortByYear(ex: Vehicle) {
    if (ex.year > this.year) {
      console.log(`${ex.year} > ${this.year}`);
    } else if (ex.year < this.year) {
      console.log(`${ex.year} < ${this.year}`);
    } else {
      console.log(`${ex.year} = ${this.year}`);
    }
  }
}
const a = new Vehicle("BMV", "Supra", 1990, 50);

a.info();
console.log(a.brake(10));
class Car extends Vehicle {
  fuealType: string;
  constructor(
    brand: string,
    model: string,
    year: number,
    speed: number,
    fuealType: string
  ) {
    super(brand, model, year, speed);
    this.fuealType = fuealType;
  }
  refuel() {
    console.log(`Автомобиль заправлен топливом:${this.fuealType}`);
  }
  info() {
    console.log(
      `Брэнд: ${this.brand}, Модель: ${this.model}, Год: ${this.year}, Скорость: ${this.speed} км/ч, Топливо: ${this.fuealType}`
    );
  }
}
const b = new Car("Reno", "Logan", 2005, 50, "234TT");
b.refuel();
b.info();

class ElectricCar extends Car {
  private batteryLevel: number;
  constructor(
    brand: string,
    model: string,
    year: number,
    speed: number,
    fuealType: string,
    batteryLevel: number
  ) {
    super(brand, model, year, speed, fuealType);
    this.batteryLevel = batteryLevel;
  }
  refuel() {
    console.log(`Автомобиль заряжен на ${this.batteryLevel}%`);
  }
  get(): void {
    console.log(`Заряд ${this.batteryLevel}%`);
  }
  set(value: number) {
    this.batteryLevel = value;
  }
}
const c = new ElectricCar("Tesla", "Nicola", 1990, 50, "234TT", 99);
c.refuel();
c.get();
c.set(66);
c.get();
function testDrive(vehicle: Vehicle) {
  vehicle.drive();
}
testDrive(b);
b.sortByYear(a);
