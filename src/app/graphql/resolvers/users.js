import User from '../../models/User';

export default {
  Query: {
    user: (root, { id }) => User.findByPk(id),
    users: () => User.findAll(),
  },
};
