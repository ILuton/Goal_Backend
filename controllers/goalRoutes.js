const router = require('express').Router();
const { Goal } = require('../models');
// const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newGoal = await Goal.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGoal);
  } catch (err) {
    res.status(400).json(`cannot create new goal ${err}`);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const goalData = await Goal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!goalData) {
      res.status(404).json({ message: 'No goal found with this id!' });
      return;
    }

    res.status(200).json(goalData);
  } catch (err) {
    res.status(500).json(`cannot delete ${err}`);
  }
});

module.exports = router;