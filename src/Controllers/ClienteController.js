class ClienteController {
    async index(req, res) {
        try {

            return res.json("deu certo!")
          
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
    }

    async show(req, res) {
        try {

            return res.json("deu certo!")
          
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
    }

    async update(req, res) {
        try {

            return res.json("deu certo!")
          
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
    }

    async delete(req, res) {
        try {

            return res.json("deu certo!")
          
        } catch (err) {
          return res.status(400).json({ error: err.message });
        }
    }

}

module.exports = new ClienteController();