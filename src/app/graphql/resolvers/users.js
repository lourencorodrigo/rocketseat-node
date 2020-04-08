import User from '../../models/User';

export default {
  Query: {
    getById: (root, { id }) => User.findByPk(id),
    getAll: () => User.findAll(),
  },
};
