// Type Inference
const add = (a: number, b: number) => {
    return a + b;
};

// Type Annotation (without "return" will crash, bc it would be "void")
const subtract = (a: number, b: number): number => {
    //to annotate that will return a value
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): void => {
    // never as a type = never going to execute the funtion completely
    if (!message) {
        throw new Error(message);
    }
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// };

const logWeather = ({
    date,
    weather
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
