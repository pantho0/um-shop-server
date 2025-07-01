import catchAsync from '../../utils/catchAsync';
import { AuthServices } from './auth.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';
import config from '../../config';

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const result = await AuthServices.loginUser({ email, password });
  res.cookie('refreshToken', result.refreshToken, {
    secure: config.node_env === 'production',
    httpOnly: true,
    maxAge: 90 * 24 * 60 * 60 * 1000,
  });
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'User logged in successfully',
    data: result,
  });
});

const changePassword = catchAsync(async (req, res) => {
  const result = await AuthServices.changePasswordIntoDB(req.user, req.body);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Password changed successfully',
    data: result,
  });
});

export const AuthControllers = {
  login,
  changePassword,
};
