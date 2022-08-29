const Employee = require('../lib/employee');

describe('Employee Test', () => {
    // Tests name
    describe('name', () => {
        it('should check value of employee name', () => {
            let alviva = new Employee('alviva', '96', 'alviva.faidley@gmail.com');
            expect(alviva.name).toEqual('alviva');
        })
    });
    // Tests ID
    describe('id', () => {
        it('should check value of employee id', () => {
            let alviva = new Employee('alviva', '96', 'alviva.faidley@gmail.com');
            expect(alviva.id).toEqual('96');
        })
    });
    // Test email
    describe('email', () => {
        it('should check value of employee email', () => {
            let alviva = new Employee('alviva', '96', 'alviva.faidley@gmail.com');
            expect(alviva.email).toEqual('alviva.faidley@gmail.com');
        })
    });
    // Function tests
    describe('name', () => {
        it('should check value of employee name', () => {
            let alviva = new Employee('alviva', '96', 'alviva.faidley@gmail.com');
            expect(alviva.getName()).toEqual('alviva');
        })
    });

    describe('id', () => {
        it('should check value of employee id', () => {
            let alviva = new Employee('alviva', '96', 'alviva.faidley@gmail.com');
            expect(alviva.getId()).toEqual('96');
        })
    });

    describe('email', () => {
        it('should check value of employee email', () => {
            let alviva = new Employee('alviva', '96', 'alviva.faidley@gmail.com');
            expect(alviva.getEmail()).toEqual('alviva.faidley@gmail.com');
        })

        describe('role', () => {
            it('should check value of employee role', () => {
                let alviva = new Employee('alviva', '96', 'alviva.faidley@gmail.com');
                expect(alviva.getRole()).toEqual('Employee');
            })
        });
    });


});