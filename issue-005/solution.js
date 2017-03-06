function hello(person) {
    switch (person) {
        case undefined:
            return 'Hello world!';
            break;
        case person:
            return 'Hello ' + person + '!';
            break;
    }
}
