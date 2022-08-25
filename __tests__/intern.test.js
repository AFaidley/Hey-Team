const Intern = require('../lib/intern');

describe('Intern Test', () => {

    describe('Intern Name', () => {
        it('should check value of intern name', () => {
            let alvivaInt = new Intern('alviva','96', 'alviva.faidley@gmail.com', 'Denver Uni');
            expect(alvivaInt.name).toEqual('alviva');
        })
    });

    describe('id', () => {
        it('should check value of intern id', () => {
            let alvivaInt = new Intern('alviva','96', 'alviva.faidley@gmail.com', 'Denver Uni');
            expect(alvivaInt.id).toEqual('96');
        })
    });

    describe('email', () => {
        it('should check value of intern email', () => {
            let alvivaInt = new Intern('alviva','96', 'alviva.faidley@gmail.com', 'Denver Uni');
            expect(alvivaInt.email).toEqual('alviva.faidley@gmail.com');
        })
    });

    describe('school', () => {
        it('should check value of intern school', () => {
            let alvivaInt = new Intern('alviva','96', 'alviva.faidley@gmail.com', 'Denver Uni');
            expect(alvivaInt.getSchool()).toEqual('Denver Uni');
        })
    });

    describe('role', () => {
        it('should check value of intern role', () => {
            let alvivaInt = new Intern('alviva','96', 'alviva.faidley@gmail.com', 'Denver Uni');
            expect(alvivaInt.getRole()).toEqual('Intern');
        })
    });

});