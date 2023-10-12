import React, { useCallback, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import '../../assets/css/SingInCss.css'

import FormSingIN from '../molecules/auth/FormSingIN';
import { useAppDispatch, useAppSelector } from '../../store/store';
import Loading from '../atoms/Loading';
import FormSingUp from '../molecules/auth/FormSingUp';
import { cleanMessage } from '../../store/slices/authSlices';

const SingIn = () => {
  const [value, setValue] = useState<string>('1');
  const dispatch = useAppDispatch();
  const { loading, message } = useAppSelector((state) => state?.auth);

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  }, []);

  useEffect(() => {
    if (message === 'User registered successfully') {
      setValue('1');
    }
  }, [message]);

  useEffect(() => {
    if (message) {
      dispatch(cleanMessage());
    }
  }, [value]);
  
  return (
    loading ? (
      <Loading setHeight="" />
    ) : (
      <section>
        <div className=" mt-10 sml:h-screen sml:mt-0 flex items-center justify-center">
          <div className="bg-white w-full m-5 p-5 sml:w-[470px] sml:p-10 text-center rounded-lg shadow-shadowDiv">
            <div className="relative mb-5">
              <SupervisedUserCircleIcon className="z-50 h-24 sml:h-32 w-auto absolute top-[-25px] sml:top-[-45px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-icon-login" />
            </div>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
                  <TabList onChange={handleChange} aria-label="lab API tabs" className="rounded-tl-md rounded-tr-md" indicatorColor="secondary" textColor="secondary">
                    <Tab label={<span className="normal-case text-base sml:text-lg font-medium text-purple-600">Sing In</span>} value="1" className="w-1/2" />
                    <Tab label={<span className="normal-case text-base sml:text-lg font-medium text-purple-600">Sing Up</span>} value="2" className="w-1/2" />
                  </TabList>
                </Box>
                <TabPanel value="1" className="p-0 pt-10"><FormSingIN /></TabPanel>
                <TabPanel value="2" className="p-0 pt-10"><FormSingUp /></TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </section>
    )
  )
}

export default SingIn