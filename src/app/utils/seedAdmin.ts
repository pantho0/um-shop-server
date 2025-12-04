import { User } from '../modules/user/user.model';

export const seedAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ email: 'admin@umpshop.com' });
    if (existingAdmin) {
      console.log('Default admin user already exists. Skipping seeding.');
      return;
    }
    const admin = await User.create({
      firstName: 'Umshop',
      lastName: 'Admin',
      email: 'admin@umpshop.com',
      password: 'Umshop@123',
      role: 'admin',
    });
    console.log('Default admin user seeded successfully:', admin.email);
  } catch (error) {
    console.error('Failed to seed default admin user:', error);
  }
};
