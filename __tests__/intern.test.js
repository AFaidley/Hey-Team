const Intern = require('../lib/intern');

describe('Intern Test', () => {
    // Tests name
    describe('Intern Name', () => {
        it('should check value of intern name', () => {
            let alvivaInt = new Intern('alviva', '96', 'alviva.faidley@gmail.com', 'Denver Uni');
            expect(alvivaInt.name).toEqual('alviva');
        })
    });
    // Tests ID
    describe('id', () => {
        it('should check value of intern id', () => {
            let alvivaInt = new Intern('alviva', '96', 'alviva.faidley@gmail.com', 'Denver Uni');
            expect(alvivaInt.id).toEqual('96');
        })
    });
    // Tests email
    describe('email', () => {
        it('should check value of intern email', () => {
            let alvivaInt = new Intern('alviva', '96', 'alviva.faidley@gmail.com', 'Denver Uni');
            expect(alvivaInt.email).toEqual('alviva.faidley@gmail.com');
        })
    });
    // Tests school
    describe('school', () => {
        it('should check value of intern school', () => {
            let alvivaInt = new Intern('alviva', '96', 'alviva.faidley@gmail.com', 'Denver Uni');
            expect(alvivaInt.getSchool()).toEqual('Denver Uni');
        })
    });
    // Tests intern role = intern
    describe('role', () => {
        it('should check value of intern role', () => {
            let alvivaInt = new Intern('alviva', '96', 'alviva.faidley@gmail.com', 'Denver Uni');
            expect(alvivaInt.getRole()).toEqual('Intern');
        })
    });

});