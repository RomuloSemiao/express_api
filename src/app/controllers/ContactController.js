const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
    async index(request, response) {
        const contacts = await ContactRepository.findAll();

        response.json(contacts);
    }

    async show(request, response) {
        const { id } = request.params;

        const contact = await ContactRepository.findById(id);

        if (!contact) {
            // 404: Not Found
            return response.status(404).json({ error: 'User not found' });
        }

        response.json(contact);
    }

    async store(request, response) {
        const { name, email, phone, category_id } = request.body;

        if(!name || !email|| !phone || !category_id) {
            return response.status(400).json({ error: 'Some data is missing' });
        }

        const contactExists = await ContactRepository.findByEmail(email);
        if (contactExists) {
            return response.status(400).json({ error: 'This email is already in use' });
        }

        const contact = await ContactRepository.create({
            name, email, phone, category_id,
        });

        response.json(contact);
    }

    async update(request, response) {
        const { id } = request.params;
        const {
            name, email, phone, category_id,
        } = request.body;

        const contactExists = await ContactRepository.findById(id);
        if (!contactExists) {
            return response.status(404).json({ error: 'User not found' });
        }

        const contactByEmail = await ContactRepository.findByEmail(email);
        if (contactByEmail && contactByEmail.id !== id) {
            return response.status(400).json({ error: 'This email is already in use' });
        }

        if(!name || !email|| !phone || !category_id) {
            return response.status(400).json({ error: 'Some data is missing' });
        }

        const contact = await ContactRepository.update(id, {
            name, email, phone, category_id,
        });

        response.json(contact);
    }

    async delete(request, response) {
        const { id } = request.params;

        const contact = await ContactRepository.findById(id);

        if (!contact) {
            // 404: Not Found
            return response.status(404).json({ error: 'User not found' });
        }

        await ContactRepository.delete(id);
        // 204: No Content
        response.sendStatus(204);
    }
}

module.exports = new ContactController;
