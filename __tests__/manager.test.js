const Manager = require('../lib/manager');

describe('Manager Test', () => {
    // Tests name
    describe('Manager Name', () => {
        it('should check value of manager name', () => {
            let alvivaMngr = new Manager('alviva', '96', 'alviva.faidley@gmail.com', '123456789');
            expect(alvivaMngr.name).toEqual('alviva');
        })
    });
    // Tests ID
    describe('id', () => {
        it('should check value of manager id', () => {
            let alvivaMngr = new Manager('alviva', '96', 'alviva.faidley@gmail.com', '123456789');
            expect(alvivaMngr.id).toEqual('96');
        })
    });
    // Tests email
    describe('email', () => {
        it('should check value of manager email', () => {
            let alvivaMngr = new Manager('alviva', '96', 'alviva.faidley@gmail.com', '123456789');
            expect(alvivaMngr.email).toEqual('alviva.faidley@gmail.com');
        })
    });
    // Tests office number
    describe('office number', () => {
        it('should check value of manager office number', () => {
            let alvivaMngr = new Manager('alviva', '96', 'alviva.faidley@gmail.com', '123456789');
            expect(alvivaMngr.getOfficeNum()).toEqual('123456789');
        })
    });
    // Tests Manager role = manager
    describe('role', () => {
        it('should check value of manager role', () => {
            let alvivaMngr = new Manager('alviva', '96', 'alviva.faidley@gmail.com', '123456789');
            expect(alvivaMngr.getRole()).toEqual('Manager');
        })
    });

});