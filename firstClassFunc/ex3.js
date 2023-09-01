function sayHello() {
    console.log('Ice Bear says hello');
};

function sayBye() {
    console.log('Ice Bear says bye');
};


const bear = {
    name: 'Ice Bear',
    hobbies: ['knitting', 'cooking', 'dancing'],
    greeting: sayHello,
    goodbye: sayBye

};

bear.greeting();
bear.goodbye();
