class SensorController {
    static async create(req, res) {
      const { tipo, valor } = req.body;
      if (!tipo || valor == null)
        return res.status(400).send({ message: "Dados inválidos" });
  
      try {
        const [result] = await global.db.execute(
          'INSERT INTO sensores (tipo, valor) VALUES (?, ?)',
          [tipo, valor]
        );
        return res.status(201).send({
          message: "Sensor inserido com sucesso",
          body: { id: result.insertId, tipo, valor }
        });
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    }
  
    static async getAll(req, res) {
      try {
        const [rows] = await global.db.execute('SELECT * FROM sensores');
        return res.status(200).json(rows);
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    }
  
    static async getById(req, res) {
      const { id } = req.params;
      try {
        const [rows] = await global.db.execute('SELECT * FROM sensores WHERE id = ?', [id]);
        if (rows.length === 0)
          return res.status(404).send({ message: "Sensor não encontrado" });
        return res.status(200).json(rows[0]);
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    }
  
    static async deleteById(req, res) {
      const { id } = req.params;
      try {
        const [result] = await global.db.execute('DELETE FROM sensores WHERE id = ?', [id]);
        if (result.affectedRows === 0)
          return res.status(404).send({ message: "Sensor não encontrado" });
        return res.status(200).send({ message: "Sensor removido com sucesso" });
      } catch (error) {
        return res.status(500).send({ error: error.message });
      }
    }
  }
  
  module.exports = SensorController;
  