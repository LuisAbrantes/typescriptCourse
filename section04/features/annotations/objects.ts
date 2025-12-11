const profile = {
    name: 'Amanda',
    age: 16,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// (simple) destructuring - explicit (redundant): Get 'age' from profile and make sure it's a number.
// get 'name' and rename to 'username'
const { age, name: userName }: { age: number; name: string } = profile;
// const { userName }: { userName: string } = profile;

// deep extraction (nested destructuring) => both extract variables, these are nested in an object.
const {
    coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile; // Enter coords and get 'lat' and 'lng'
