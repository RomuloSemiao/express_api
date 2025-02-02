const { v4 } = require('uuid');

let contacts = [
    {
        id: v4(),
        name: 'Rômulo Semião',
        email: 'r.semiao.a@gmail.com',
        phone: '123123123123',
        category_id: v4(),
    },
    {
        id: v4(),
        name: 'Amanda Lisboa',
        email: 'amandalisboa.am@gmail.com',
        phone: '345345345345',
        category_id: v4(),
    },
    {
        id: v4(),
        name: 'Anderson Arantes',
        email: 'arantes_pv@yahoo.com.br',
        phone: '567567567567',
        category_id: v4(),
    },
    {
        id: v4(),
        name: 'Sandra Regina',
        email: 'sansemiao@gmail.com',
        phone: '789789789789',
        category_id: v4(),
    },
];

class ContactRepository {
    findAll() {
        return new Promise((resolve) => {
            resolve(contacts);
        });
    }

    findById(id) {
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.id === id),
        ));
    }

    findByEmail(email) {
        return new Promise((resolve) => resolve(
            contacts.find((contact) => contact.email === email),
        ));
    }

    delete(id) {
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id !== id);
            resolve();
        });
    }

    create({
        name, email, phone, category_id,
    }) {
        return new Promise((resolve) => {
            const newContact = {
                id: v4(),
                name,
                email,
                phone,
                category_id,
            };

            contacts.push(newContact);
            resolve(newContact);
        });
    }

    update(id, {
        name, email, phone, category_id,
    }) {
        return new Promise((resolve) => {
            const updatedContact = {
                id,
                name,
                email,
                phone,
                category_id,
            };

            contacts = contacts.map((contact) => (
                contact.id === id ? updatedContact : contact
            ));

            resolve(updatedContact);
        });
    }
}

module.exports = new ContactRepository;
