class Vehicle {
    // drive(): void {
    //     console.log('chugga chugga');
    // }

    // color: string;

    constructor(public color: string) {
        // this.color = color
    }

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// vehicle.honk()

// extends: copy and paste the methods
class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super('color');
    }

    // cannot change the moddifier of the parent class
    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}
const car = new Car(4, 'red');
car.startDrivingProcess();
// car.honk();
