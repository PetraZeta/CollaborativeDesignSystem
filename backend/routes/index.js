const express = require('express');
const { Component, ChangeLog, User } = require('../models');
const router = express.Router();

// Crear un componente
router.post('/components', async (req, res) => {
  try {
    const { name, description } = req.body;
    const component = await Component.create({ name, description });
    res.status(201).json(component);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener todos los componentes
router.get('/components', async (req, res) => {
  try {
    const components = await Component.findAll();
    res.status(200).json(components);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;